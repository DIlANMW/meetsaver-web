import React from 'react'
import { LOGO } from '../assets.js'

export default function Footer() {
  return (
    <footer>
      <a className="foot-logo" href="#">
        <img src={LOGO} alt="MeetSaver" style={{ mixBlendMode: 'screen' }} />
        <span className="foot-logo-t">MeetSaver</span>
      </a>

      <div className="foot-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Chrome Web Store</a>
        <a href="#">Contact</a>
      </div>

      <div className="foot-copy">© 2026 MeetSaver · Made for Google Meet</div>
    </footer>
  )
}
