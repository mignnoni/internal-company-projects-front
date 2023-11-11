import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export function Home() {

    const { user } = useContext(AuthContext);

    if (user) {
        return (
            <Box>
                <Heading>Hello {user.name}</Heading>
                <Divider />
                <Stack spacing={4}>
                {user.roles.map((role) => (
                    <Text key={role}>
                        {role}
                    </Text>
                ))}
                </Stack>
            </Box>
        );
    }

    return (
        <Heading>Hello World</Heading>
    );
}