import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { theme } from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<AuthProvider>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
			<ToastContainer />
		</AuthProvider>
	</ChakraProvider>
)
