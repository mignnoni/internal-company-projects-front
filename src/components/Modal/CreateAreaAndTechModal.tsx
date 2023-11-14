import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { Button, Flex, HStack, Heading } from '@chakra-ui/react';
import { Input } from '../Form/Input';
interface ICreate {
    title: string;
}

interface ModalProps {
    onClose: () => void;
    isOpen: boolean;
    model: string;
    name: string;
}

const createFormSchema = zod.object({
    title: zod.string().min(1, 'É obrigatório informar o título')
})

export function CreateAreaAndTechModal({ onClose, isOpen, model, name }: ModalProps) {

    const { register, handleSubmit, reset, formState } = useForm<ICreate>({
        resolver: zodResolver(createFormSchema),
        defaultValues: {
            title: ''
        }
    })

    const { errors } = formState;

    const handleCreate: SubmitHandler<ICreate> = (data) => {

        api.post<ICreate>(model, data)
            .then(() => {
                toast.success(name + ' criada com sucesso');
                handleClose();
            })
            .catch((err: AxiosError) => {
                toast.error(err?.message);
                handleClose();
            })
    }

    const handleClose = () => {
        reset();
        onClose();
    }

    return (
        <Modal isOpen={isOpen} isCentered={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW={450} as='form' onSubmit={handleSubmit(handleCreate)} p={2}>
                <ModalHeader>
                    <Heading>Adicionar nova {name}</Heading>
                </ModalHeader>
                <ModalCloseButton onClick={handleClose} />
                <ModalBody>
                    <Input label='Título' {...register('title')} error={errors.title} />
                </ModalBody>
                <ModalFooter>
                    <Flex mt={2} justify={"flex-end"}>
                        <HStack spacing={"4"}>
                            <Button onClick={onClose} colorScheme="gray">Cancelar</Button>
                            <Button colorScheme="purple" type="submit">Salvar</Button>
                        </HStack>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );

}