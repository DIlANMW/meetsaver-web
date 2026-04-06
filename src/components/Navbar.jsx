import React from 'react'
import { LOGO, CHROME_ICON } from '../assets.js'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-row1">
        <a className="nav-logo" href="#">
          <img src={LOGO} alt="MeetSaver" style={{ mixBlendMode: 'screen' }} />
          <span className="nav-brand">MeetSaver</span>
        </a>

        <a className="nav-cta" href="https://chromewebstore.google.com/detail/keoflebbbfemdfgggclhimpfcnnckpmk?utm_source=item-share-cbt&utm_medium=web" target="_blank" rel="noopener noreferrer" onClick={() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "add_to_chrome_click",
            location: "navbar"
          });
        }}>
          <img src={CHROME_ICON} alt="" />
          <span className="nav-cta-text">Add to Chrome - Free</span>
        </a>
      </div>

      <div className="nav-links">
        <a href="#how">How it works</a>
        <a href="#features">Features</a>
        <a href="#privacy">Privacy</a>
        <a href="#faq">FAQ</a>
      </div>
    </nav>
  )
}