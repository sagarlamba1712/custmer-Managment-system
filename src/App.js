import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import Header from "./Component/Header"
import Item from "./Component/Item"
import Billing from "./Component/Billing"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Header" element={<Header />} />
                    <Route path="/Item" element={<Item />} />
                    <Route path="/Billing" element={<Billing/>}/>

                </Routes>
            </BrowserRouter>

        </div>
    )
}


