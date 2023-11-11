import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure();

    const location = useLocation();

    useEffect(() => {
        disclosure.onClose()
    }, [location.pathname])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);