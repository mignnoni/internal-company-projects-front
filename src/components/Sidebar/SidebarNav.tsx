import { Stack, Box, Text } from "@chakra-ui/react";
import { MdOutlinePix } from "react-icons/md";
import { FaCreditCard, FaTruckLoading, FaUserCircle } from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ROLES } from "../../constants/Roles";

export function SidebarNav() {

    const { user } = useContext(AuthContext);

    const [ isAdmin ] = useState<boolean>(() => {
        return user?.roles.includes(ROLES.Admin) ?? false;
    })

    return (
        <Stack spacing={"12"} align="flex-start">
        {
            isAdmin && (
                <Box>
                    <Text fontWeight={"bold"} fontSize={'md'}>Administrador</Text>
                    <Stack spacing={"4"} mt={4} align={"stretch"}>
                        <SidebarItem icon={FaUserCircle} href={'/manager'} title={'Gerentes'} />
                        <SidebarItem icon={FaUserCircle} href={'/razao/cliente'} title={'Membros'} />
                    </Stack>
                </Box>
            )
        }
        <Box>
            <Text fontWeight={"bold"} color="gray.500" fontSize={'md'}>Gerenciar</Text>
            <Stack spacing={"4"} mt={4} align={"stretch"}>
                <SidebarItem icon={FaCreditCard} href={'/receb/destinar'} title={'Projetos'} />
                <SidebarItem icon={MdOutlinePix} href={'/receb/pix'} title={'Áreas'} />
                <SidebarItem icon={MdOutlinePix} href={'/receb/pix'} title={'Tecnologias'} />
            </Stack>
        </Box>
    </Stack>
    );
}