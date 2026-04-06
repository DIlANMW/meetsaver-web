import React from 'react'
import { CHROME_ICON } from '../assets.js'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

export default function CTA() {
  const h2Ref = useScrollAnimation('sa-up', 0)
  const pRef = useScrollAnimation('sa-up', 0.18)
  const btnsRef = useScrollAnimation('sa-up', 0.30)

  return (
    <section className="cta-sec" id="cta">
      <div className="wrap">
        <h2 className="cta-h2" ref={h2Ref}>
          Stop losing your<br />
          <span className="hi">Meet chats.</span>
        </h2>

        <p className="cta-p" ref={pRef}>
          Free forever. 10-second install. Works instantly with every Google Meet.
        </p>

        <div className="cta-btns" ref={btnsRef}>
          <a className="btn-main" href="https://chromewebstore.google.com/detail/keoflebbbfemdfgggclhimpfcnnckpmk?utm_source=item-share-cbt&utm_medium=web" onClick={() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "add_to_chrome_click",
              location: "navbar"
            });
          }}>
            <img src={CHROME_ICON} alt="" style={{ width: 48, height: 48, borderRadius: 5, objectFit: 'cover' }} />
            Add to Chrome
          </a>
          <a className="btn-out" href="#how">See how it works</a>
        </div>

        <div className="cta-note">Working in background · No account needed · 100% local &amp; private</div>
      </div>
    </section>
  )
}
