import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider>
		<AuthProvider>
			<App />
			<ToastContainer />
		</AuthProvider>
	</ChakraProvider>
)
