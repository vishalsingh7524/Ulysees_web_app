import React from 'react'
import { useState } from "react";
import "./Web.css";
import "./Media.css"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            {/* LEFT LOGO */}
            <div className="logo">
                <img src='./images/original.png'/>
            </div>

            {/* NAV LINKS */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>Platform</li>
                <li>Products</li>
                <li>Services</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Contact</li>
            </ul>
            {/* HAMBURGER */}
            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>
        </nav>
    )
}
