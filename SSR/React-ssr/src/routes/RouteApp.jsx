import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from "@/components/Header"
import Home from '@/pages/Home';
import Movies from "@/pages/Movies";
import NotFound from "@/pages/NotFound"
export default function RouteApp() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route element={NotFound}></Route>
            </Routes>
        </div>

    )
}
