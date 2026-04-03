import React from 'react'
import { LOGO, CHROME_ICON } from '../assets.js'

export default function Navbar() {
  return (
    <nav>
      <a className="nav-logo" href="#">
        <img src={LOGO} alt="MeetSaver" style={{ mixBlendMode: 'screen' }} />
        <span className="nav-brand">MeetSaver</span>
      </a>

      <div className="nav-links">
        <a href="#how">How it works</a>
        <a href="#features">Features</a>
        <a href="#privacy">Privacy</a>
        <a href="#faq">FAQ</a>
      </div>

      <a className="nav-cta" href="https://chromewebstore.google.com/detail/keoflebbbfemdfgggclhimpfcnnckpmk?utm_source=item-share-cbt&utm_medium=web" target="_blank" rel="noopener noreferrer">
        <img src={CHROME_ICON} alt="" />
        Add to Chrome - Free
      </a>
    </nav>
  )
}
