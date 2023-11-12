import { Box, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
    icon: ElementType;
    href: string;
    title: string;
}

export function SidebarItem({ icon, href, title }: SidebarItemProps) {
    return (
        <NavLink to={href}>
            {({ isActive }) => (
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    color={isActive ? 'purple.500' : 'gray.400'}
                >
                    <Icon as={icon} fontSize={20} />
                    <Text ml={4} fontWeight={isActive ? 'bold' : 'medium'}>{title}</Text>
                </Box>
            )}
        </NavLink>
    );
}