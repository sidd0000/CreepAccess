import React from 'react'
import Image from "./Logo.jpg"
import './Logo.css'
export default function Logo() {
  return (
    <div className="header">
    <div className="logo">
        {/* <img className="img" src={Image} alt="Logo" /> */}
    </div>
    <div className="welcome">
        <h1>WELCOME TO SEHATSAATHI</h1>
    </div>
</div>
  );
}
