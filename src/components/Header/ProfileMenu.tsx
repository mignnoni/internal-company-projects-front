import { Box, Menu, MenuButton, IconButton, Icon, MenuList, MenuItem, MenuDivider, Avatar } from "@chakra-ui/react";
import { RiMore2Fill } from "react-icons/ri";
import { signOut } from "../../contexts/AuthContext";

interface ProfileMenuProps {
    name: string;
    onOpen: () => void;
}

export function ProfileMenu({name, onOpen}: ProfileMenuProps) {
    return (
        <Menu>
            <MenuButton>
            <Avatar size={"md"} name={name} bg={"purple.500"} color="gray.50" onClick={onOpen}/>
            </MenuButton>
            <MenuList fontSize={"16"}>
                <MenuItem py="4" onClick={signOut}>Sair</MenuItem>
            </MenuList>
        </Menu>                           
    );
}