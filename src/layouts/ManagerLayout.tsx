import { Flex, Heading } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ROLES } from "../constants/Roles";
import { toast } from "react-toastify";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function ManagerLayout() {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {

        if (!user?.roles?.includes(ROLES.Manager)) {
            toast.error("Você não possui os privilégios necessários para acessar essa página");
            navigate('/teste');
        }

    }, [])


    return(
        <Flex minH={'100vh'}>
            <Sidebar />
            <Flex flexDir={'column'} w="full">
                <Header />
                <Outlet />
            </Flex>
        </Flex>
    )
}