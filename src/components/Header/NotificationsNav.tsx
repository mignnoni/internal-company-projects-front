import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine } from "react-icons/ri";

export function NotificationsNav() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
    <HStack 
        spacing={["4"]}
        pr={["4", "8"]}
        mx={["4", "8"]}
        py="1"
        borderRightWidth={1}
        borderColor="gray.400"
    >
            <Icon as={RiNotificationLine} fontSize="20" />
            {colorMode === "light" ? <MoonIcon onClick={toggleColorMode} cursor={"pointer"} />: <SunIcon onClick={toggleColorMode} cursor={"pointer"} />}
    </HStack>
    );
}