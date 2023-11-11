import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Sidebar() {

    const { isOpen, onClose } = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bgColor={'gray.900'}>
                        <DrawerCloseButton mt="6" color={'white'} sx={{'-webkit-app-region': 'no-drag'}}/>
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        );
    }

    return(
        <Box as="aside" w={72} bgColor={'gray.900'} px={3} pt={8}>
            <SidebarNav />
        </Box>
    );
}