"use client" //this is a client component
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import {IoMdMenu, IoMdClose} from "react-icons/io"

interface NavItem {
    label: string
    page: string
}
const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },

]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [Navbar, setNavbar] = useState(false)

  return <header>
    <div>
        <div>
            <dev>
                <h2>Jason Matjila</h2>
            </dev>
        </div>
    </div>
  </header>
  
}

export default Navbar