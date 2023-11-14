import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface ICreate {
    title: string;
}

interface ModalProps {
    handleCreate: (data: ICreate) => void;
    onClose: () => void;
    isOpen: boolean;
}

const createFormSchema: yup.ObjectSchema<ICreate> = yup.object().shape({
    title: yup.string().required('É obrigatório informar o título'),
})

export function CreateAreaAndTechModal({ handleCreate, onClose, isOpen }: ModalProps) {


}