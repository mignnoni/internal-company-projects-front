import { Flex, HStack, Heading, Icon, IconButton, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { RiMenuLine, RiNotificationLine } from "react-icons/ri";
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function Header() {

    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            w="100%"
            as="header"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            align={"center"}
            px="6"
            pb="2"
            borderBottom={"1px solid"}
            borderColor="gray.200"
        >
            { !isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant={"unstyled"}
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}

            {/* <Logo /> */}

            <Flex align="center" ml="auto">
            <HStack 
                spacing={["4"]}
                pr={["4", "8"]}
                mx={["4", "8"]}
                py="1"
                borderRightWidth={1}
                borderColor="gray.400"
            >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    {colorMode === "light" ? <MoonIcon onClick={toggleColorMode} cursor={"pointer"} /> : 
                    <SunIcon onClick={toggleColorMode} cursor={"pointer"} />}
            </HStack>
            </Flex>

        </Flex>
    );
}