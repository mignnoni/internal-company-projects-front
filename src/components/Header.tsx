import { Flex, Heading, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";

export function Header() {

    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            w="100%"
            as="header"
            h="20"
            mx="auto"
            align={"center"}
            px="6"
            color={'white'}
            bgColor={'gray.800'}
            sx={{'-webkit-app-region': 'drag'}}
        >
            { !isWideVersion && (
                <IconButton
                    mt="2"
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant={"unstyled"}
                    onClick={onOpen}
                    mr="2"
                    sx={{'-webkit-app-region': 'no-drag'}}
                >

                </IconButton>
            )}
            <Heading>Comparador</Heading>
        </Flex>
    )
}