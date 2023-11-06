import { Route, Routes } from "react-router-dom";
import { ManagerLayout } from "./layouts/ManagerLayout";
import { Home } from "./pages/manager/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<ManagerLayout />}>
                <Route path="" element={<Home />} />
            </Route>
        </Routes>
    )
}