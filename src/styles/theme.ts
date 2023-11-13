import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode('gray.100', 'gray.900')(props),
                a: {
                    cursor: 'pointer'
                }
            }
        })
    },
    fonts: {
        heading: 'Nunito',
        body: 'Nunito'
    }
})