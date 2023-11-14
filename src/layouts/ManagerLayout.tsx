import { Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ROLES } from "../constants/Roles";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { NoPrivilegies } from "../components/NoPrivilegies";

export function ManagerLayout() {

    const { user } = useContext(AuthContext);

    const [ isManager ] = useState<boolean>(() => {

        if (user?.roles?.includes(ROLES.Manager))
            return true;
        return false;
    })

    return (
        <Flex direction={"column"} h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar/>
            <Flex flexDir={'column'} w="full">
                {isManager && (<Outlet />)}
                {!isManager && (<NoPrivilegies />)}
            </Flex>
            </Flex>
        </Flex>
    );

}