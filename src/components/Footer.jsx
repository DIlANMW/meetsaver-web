import React from 'react'
import { LOGO } from '../assets.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <a className="foot-logo" href="#">
            <img src={LOGO} alt="MeetSaver Logo" />
            <span className="foot-logo-t">MeetSaver</span>
          </a>

          <p className="footer-desc">
            MeetSaver is a Chrome extension that automatically saves Google Meet chat messages in real time.
            Never lose important meeting conversations again.
          </p>
        </div>

        <div className="footer-col">
          <div className="footer-title">Product</div>
          <a href="#how">How it Works</a>
          <a href="#">Download Extension</a>
          <a href="#features">Features</a>
        </div>

        <div className="footer-col">
          <div className="footer-title">Resources</div>
          <a href="#faq">FAQ</a>
          <a href="#support">Support</a>
        </div>


        <div className="footer-col">
          <div className="footer-title">Legal</div>
          <a href="#privacy">Privacy</a>
        </div>

      </div>


      <div className="footer-bottom">
        <div className="foot-copy">
          © 2026 MeetSaver · Google Meet Chat Saver Extension
        </div>

        <div className="footer-badges">
          <span>🔒 Privacy First</span>
          <span>⚡ Real-time Capture</span>
          <span>🧠 Smart Export</span>
        </div>
      </div>
    </footer>
  )
}