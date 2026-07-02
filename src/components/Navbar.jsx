import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LOGO, CHROME_ICON } from '../assets.js'

const CHROME_URL = 'https://chromewebstore.google.com/detail/keoflebbbfemdfgggclhimpfcnnckpmk?utm_source=item-share-cbt&utm_medium=web'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav>
      <div className="nav-row1">
        <Link className="nav-logo" to="/">
          <img src={LOGO} alt="MeetSaver" style={{ mixBlendMode: 'screen' }} />
          <span className="nav-brand">MeetSaver</span>
        </Link>

        <a className="nav-cta" href={CHROME_URL} target="_blank" rel="noopener noreferrer" onClick={() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'add_to_chrome_click', location: 'navbar' });
        }}>
          <img src={CHROME_ICON} alt="" />
          <span className="nav-cta-text">Add to Chrome - Free</span>
        </a>
      </div>

      <div className="nav-links">
        {isHome ? (
          <>
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#privacy">Privacy</a>
            <a href="#faq">FAQ</a>
          </>
        ) : (
          <>
            <Link to="/#how">How it works</Link>
            <Link to="/#features">Features</Link>
            <Link to="/#faq">FAQ</Link>
          </>
        )}
        <Link to="/blog" className={pathname.startsWith('/blog') ? 'nav-link-active' : ''}>Blog</Link>
      </div>
    </nav>
  )
}
