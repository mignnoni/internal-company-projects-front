import { Button, HStack, Icon } from "@chakra-ui/react";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";

interface ActionButtonsProps {
    id: string;
    editAction: (id: string) => void;
    deleteAction: (id: string) => void;
}

export function ActionButtons({id, editAction, deleteAction}: ActionButtonsProps) {
    
    return (
        <HStack spacing={["1", "2"]}>
            <Button
                onClick={() => editAction(id)}
                size={"sm"}
                fontSize="sm"
                colorScheme="purple"
                leftIcon={<Icon as={RiPencilLine} />}
                pr={["1", "1"]}
            >
            </Button>
            <Button
                onClick={() => deleteAction(id)}
                size={"sm"}
                fontSize="sm"
                colorScheme="purple"
                leftIcon={<Icon as={RiDeleteBin6Line} />}
                pr={["1", "1"]}
            >
            </Button>
        </HStack>
    );
}