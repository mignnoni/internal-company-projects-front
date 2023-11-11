import { Route, Routes } from "react-router-dom";
import { ManagerLayout } from "./layouts/ManagerLayout";
import { Home } from "./pages/manager/Home";
import Login from "./pages/Login";

export function Router() {
    return (
        <Routes>
            <Route path="/manager" element={<ManagerLayout />}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}