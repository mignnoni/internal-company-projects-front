import { Button, Flex, Heading, Icon, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiAddFill } from "react-icons/ri";

interface DefaultPageProps {
    children: ReactNode;
    title: string;
    handleCreate: () => void;
}

export function DefaultPageLayout({children, title, handleCreate}: DefaultPageProps) {

    const bg = useColorModeValue('white', 'gray.700');
    
    return (
        <Flex bg={bg} borderRadius={4} p={["6", "8"]} flexDir={'column'}>
            <Flex justify={'space-between'}>
                <Heading size='lg'>{title}</Heading>
                <Button
                    onClick={() => handleCreate()}
                    colorScheme="purple"
                    leftIcon={<Icon as={RiAddFill} />}
                    pr={["4"]}
                >
                    Adicionar
                </Button>
            </Flex>
            {children}
        </Flex>
    );
}