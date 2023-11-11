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
                    borderRadius={12}
                    bgColor={'gray.800'}
                    alignItems={'center'}
                    border={isActive ? '1px solid blue' : 'none '}
                    color={isActive ? 'blue.600' : 'white'}
                    borderColor={isActive ? 'blue.700' : 'white'}
                    borderStyle={isActive ? 'solid' : 'none'}
                    borderWidth={2}
                    p={3}
                >
                    <Icon as={icon} fontSize={20} />
                    <Text ml={4} fontWeight={isActive ? 'bold' : 'mediu,'}>{title}</Text>
                </Box>
            )}
        </NavLink>
    );
}