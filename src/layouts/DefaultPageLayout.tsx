import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { ReactNode } from "react";

interface DefaultPageProps {
    children: ReactNode;
}

export function DefaultPageLayout({children}: DefaultPageProps) {

    const bg = useColorModeValue('white', 'gray.700');
    
    return (
        <Flex bg={bg} borderRadius={4} p={["6", "8"]}>
            <Heading>Teste</Heading>
            {children}
        </Flex>
    );
}