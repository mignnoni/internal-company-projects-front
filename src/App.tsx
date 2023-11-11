import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext'

export function App() {

    return (
        <BrowserRouter>
            <SidebarDrawerProvider>
                <Router />
            </SidebarDrawerProvider>
        </BrowserRouter>
    )
}