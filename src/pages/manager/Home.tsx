import { Heading } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { DefaultPageLayout } from "../../layouts/DefaultPageLayout";
import { AxiosError } from "axios";
import { IArea } from "../../interfaces/IArea";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export function Home() {

    const { user } = useContext(AuthContext);
    const [ areas, setAreas ] = useState<IArea[]>();

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
    }, [])

    if (user) {
        return (
            <DefaultPageLayout>

            </DefaultPageLayout>
        );
    }

    return (
        <Heading>Hello World</Heading>
    );
}