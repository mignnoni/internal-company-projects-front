import { Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { DefaultPageLayout } from "../../layouts/DefaultPageLayout";
import { AxiosError } from "axios";
import { IArea } from "../../interfaces/IArea";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ActionButtons } from "../../components/Table/ActionButtons";

export function Area() {

    const { user } = useContext(AuthContext);
    const [ areas, setAreas ] = useState<IArea[]>([]);

    const bg = useColorModeValue('purple.100', 'purple.600');
    
    const [ id ] = useState<string>('teste');

    const handleEdit = (id: string): void => {
        console.log(id);
    }

    const handleDelete = (id: string): void => {
        console.log(id);
    }

    const handleCreate = (): void => {
        console.log('create');
    }

    const getAreas = () => {

        api
        .get<IArea[]>('/area')
        .then((response) => {
            setAreas(response.data);
        })
        .catch((err: AxiosError) => {
            toast.error(err.message);
        })
    }

    useEffect(() => {
        getAreas();
    }, [user])

    // if (user) {
    //     return (
    //         <DefaultPageLayout>

    //         </DefaultPageLayout>
    //     );
    // }

    if(user) {
        return (
            <DefaultPageLayout title={'Áreas'} handleCreate={handleCreate}>
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
                                !!areas && areas.map((area) => (
                                    <Tr key={area.id} bg={bg}>
                                        <Td borderLeftRadius={'10px'} fontWeight={'bold'}>{area.title}</Td>
                                        <Td borderRightRadius={"10px"}>
                                            <ActionButtons id={area.id} deleteAction={handleDelete} editAction={handleEdit}  />
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </DefaultPageLayout>
        );
    }

    return (
        <Heading>Hello World</Heading>
    );
}