import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, useColorModeValue } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
    disabled?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, disabled = false, ...rest }, ref) => {

    const bg = useColorModeValue('white', 'gray.600')
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                disabled={disabled}
                focusBorderColor='gray.500'
                bgColor={bg}
                size="lg"
                ref={ref}
                {...rest}
            />
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}

export const Input = forwardRef(InputBase);