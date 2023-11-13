import { Route, Routes } from "react-router-dom";
import { ManagerLayout } from "./layouts/ManagerLayout";
import { Area } from "./pages/manager/Area";
import Login from "./pages/Login";
import { Technology } from "./pages/manager/Technology";

export function Router() {
    return (
        <Routes>
            <Route path="/manager" element={<ManagerLayout />}>
                <Route path="/manager/area" element={<Area />} />
                <Route path="/manager/technology" element={<Technology />} />
            </Route>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}