import { Flex, Icon, useBreakpointValue, IconButton } from "@chakra-ui/react";
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";


export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

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
                <NotificationsNav />
                <Profile showProfileData={isWideVersion}/>
            </Flex>

        </Flex>
    );
}