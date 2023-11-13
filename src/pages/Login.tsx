import { Flex, Button, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { parseCookies } from 'nookies';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Form/Input';

export default function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { signIn, user } = useContext(AuthContext);
    const { 'proj.token': acessToken } = parseCookies();
    const navigate = useNavigate();

    const bg = useColorModeValue('gray.200', 'gray.700');

    // useEffect(() => {
    //     if (user && acessToken)
    //         navigate('/manager')
    // }, [])

    async function handleSubmit(event: FormEvent) {
        try {
            event.preventDefault();

            const data = {
                email,
                password
            }

            await signIn(data);

        }
        catch (error: any) {
            toast.error(error?.message)
        }
    }

    return (
        <Flex
            w={"100vw"}
            h={"100vh"}
            justifyContent="center"
            alignItems={"center"}
        >
            <Flex
                as="form"
                w="100%"
                maxW={360}
                bg={bg}
                p="8"
                borderRadius={8}
                flexDir="column"
                onSubmit={handleSubmit}
            >
                <Stack spacing={"4"}>
                    <Input type="email" name="email" label="E-mail" onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" name="password" label="Senha" onChange={(e) => setPassword(e.target.value)} />
                    <Text fontSize={"sm"}>Esqueci minha senha</Text>
                </Stack>

                <Button
                    type="submit"
                    mt="6"
                    colorScheme='purple'
                    size={"lg"}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}