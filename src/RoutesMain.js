import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/common/Login';
import Dashboard from './pages/Dashboard';
import ApprovalImage from './pages/ApprovalImage';


export default function RoutesMain() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/dashboard" exact element={<Dashboard />} />
                    <Route path="/approval" exact element={<ApprovalImage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}