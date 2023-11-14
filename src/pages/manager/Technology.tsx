import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { DefaultPageLayout } from "../../layouts/DefaultPageLayout";
import { AxiosError } from "axios";
import { ITechnology } from "../../interfaces/ITechnology";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ActionButtons } from "../../components/Table/ActionButtons";
import { CreateAreaAndTechModal } from "../../components/Modal/CreateAreaAndTechModal";
import { NoPrivilegies } from "../../components/NoPrivilegies";

export function Technology() {

    const { onOpen, onClose, isOpen } = useDisclosure();

    const { user } = useContext(AuthContext);
    const [ technologies, setTechnologies ] = useState<ITechnology[]>();

    const bg = useColorModeValue('purple.100', 'purple.600');

    const handleEdit = (id: string): void => {
        console.log(id);
    }

    const handleDelete = (id: string): void => {
        console.log(id);
    }

    const getTechnologies = () => {
        api
        .get<ITechnology[]>('/technology')
        .then((response) => {
            setTechnologies(response.data);
        })
        .catch((err: AxiosError) => {
            toast.error(err.message);
        })
    }

    useEffect(() => {
        getTechnologies();
    }, [])


    if (user) {
        return (
            <DefaultPageLayout title={'Tecnologias'} handleCreate={onOpen}>
                <TableContainer>
                    <Table style={{borderCollapse:"separate", borderSpacing:"0 1em"}}>
                        <Thead>
                            <Tr>
                                <Th w="80%">Nome</Th>
                                <Th w="20%">Ações</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                !!technologies && technologies.map((technology) => (
                                    <Tr key={technology.id} bg={bg}>
                                        <Td borderLeftRadius={'10px'} fontWeight={'bold'}>{technology.title}</Td>
                                        <Td borderRightRadius={"10px"}>
                                            <ActionButtons id={technology.id} deleteAction={handleDelete} editAction={handleEdit}  />
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                <CreateAreaAndTechModal onClose={onClose} isOpen={isOpen} model='technology' name={'Tecnologia'} />
            </DefaultPageLayout>
        );
    }

    return (
        <NoPrivilegies />
    );
}