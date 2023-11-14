
import { Avatar, Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { ProfileMenu } from "./ProfileMenu";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {

    const { user } = useContext(AuthContext);
    const { onOpen } = useDisclosure();

    return (
        <>
            <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign={"right"}>
                    <Text>{user?.name}</Text>
                </Box>
            )}
            </Flex>
            <ProfileMenu name={user?.name ?? ''} onOpen={onOpen}/>
        </>
    );
}