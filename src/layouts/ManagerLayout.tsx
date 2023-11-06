import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export function ManagerLayout() {
    return (
        <Flex minH={'100vh'}>
            <Flex w='full' my={12} mx="auto" maxW={900} px={[4, 6, 8, 0]} align={'center'} flexDir={'column'}>
                <Outlet />
            </Flex>
        </Flex>
    )
}