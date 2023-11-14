import { useColorModeValue, Flex, Heading, Button, Icon } from "@chakra-ui/react";
import { RiAddFill } from "react-icons/ri";

export function NoPrivilegies() {
    
    const bg = useColorModeValue('white', 'gray.700');
    
    return (
        <Flex bg={bg} borderRadius={4} p={["6", "8"]} flexDir={'column'}>
            <Heading>Você não possui privilégios para acessar essa página.</Heading>
        </Flex>
    );
}