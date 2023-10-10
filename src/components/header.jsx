import React from "react"
import "../styles/header.css"

const Header = () => {
  return (
        <header className="header">
            <div className="header-start">
                <img src="https://cdn-icons-png.flaticon.com/128/6805/6805886.png" alt="Easy market logo" className="header-logo"/>
                <h1>Easy Market</h1>
            </div>
            <div className="header-medium">
                <input className="search-input" type="text" placeholder="Search"/>
            </div>
        </header>
  )
}

export default Header
