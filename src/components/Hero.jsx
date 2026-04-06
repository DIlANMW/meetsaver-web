import React from 'react'
import { LOGO, CHROME_ICON, MEET_ICON } from '../assets.js'
import CountUp from '../hooks/useScrollAnimation.jsx'

export default function Hero() {
  return (
    <section className="hero-wrap">
      <div className="hero-inner">

        {/* ── Left  */}
        <div>

          <h1 className="hero-h1">
            Save <br />Google Meet Chats<br />
            <span className="hi">Automatically.</span>
          </h1>

          <p className="hero-p">
            MeetSaver <b>automatically saves</b> Google Meet chat messages
            <b> in real time.</b> and lets you export them anytime.
            Keep your meeting chat history safely,
            even after the meeting ends.
          </p>

          <div className="hero-btns">
            <a className="btn-main" href="https://chromewebstore.google.com/detail/keoflebbbfemdfgggclhimpfcnnckpmk?utm_source=item-share-cbt&utm_medium=web" target="_blank" rel="noopener noreferrer" onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "add_to_chrome_click",
                location: "hero"
              });
            }}>
              <img src={CHROME_ICON} alt="Download MeetSaver Chrome extension" />
              Add to Chrome - It's Free
            </a>
            <a className="btn-out" href="#how">How it works →</a>
          </div>

          <div className="hero-trust">
            <div className="htrust">
              <span>✨ Privacy First</span>
            </div>
            <span className="hdiv">·</span>
            <div className="htrust">🔒 100% local</div>
            <span className="hdiv">·</span>
            <div className="htrust">⚡ Zero setup</div>
          </div>
          <p className="hero-seo-hidden">
            Looking for a way to save Google Meet chat history? MeetSaver automatically captures and stores all messages during your meetings.
          </p>
        </div>


        {/* ── Right popup ── */}
        <div className="hero-popup-col">
          <div className="popup-glow" />
          <div className="popup-wrap">
            <div className="popup">

              <div className="p-header">
                <div className="logo">
                  <img src={LOGO} alt="MeetSaver" style={{ mixBlendMode: 'screen' }} />
                  <span className="logo-text">MeetSaver</span>
                </div>
              </div>

              <div style={{ padding: '15px 20px 0' }}>
                <div className="section-label">LIVE NOW</div>
                <div className="current-card">
                  <div className="current-card-inner">
                    <span className="live-dot" />
                    <div>
                      <div className="current-name">Q2 Product Sync</div>
                      <div className="current-meta">Started 14 minutes ago</div>
                    </div>
                  </div>
                  <div className="current-actions">
                    <div className="stat-pill">
                      <span className="stat-num"><CountUp end={24} duration={1000} /></span>
                      <span className="stat-label">msgs</span>
                    </div>
                    <button className="btn-ghost">Rename</button>
                    <button className="btn-primary">Save Meeting</button>
                  </div>
                  <div className="stats-row">
                    <div className="stats-pill">
                      <span className="stats-pill-num"><CountUp end={12} duration={1000} /></span>
                      <span className="stats-pill-label">meetings saved</span>
                    </div>
                    <div className="stats-pill">
                      <span className="stats-pill-num"><CountUp end={347} duration={1000} /></span>
                      <span className="stats-pill-label">msgs captured</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '17px 20px 17px' }}>
                <div className="section-header">
                  <div className="section-label">SAVED MEETINGS</div>
                </div>
                <div className="date-group-label">TODAY</div>

                <div className="meeting-card">
                  <img className="meet-icon-img" src={MEET_ICON} alt="Meet" />
                  <div className="meeting-card-left">
                    <div className="meeting-card-name">Design Review</div>
                    <div className="meeting-card-sub">
                      Mar 16 · <span className="msg-badge">18 msgs</span>
                    </div>
                  </div>
                  <div className="meeting-card-right">
                    <span className="open-btn">OPEN</span>
                  </div>
                </div>

                <div className="meeting-card">
                  <img className="meet-icon-img" src={MEET_ICON} alt="Meet" />
                  <div className="meeting-card-left">
                    <div className="meeting-card-name">Sprint Planning</div>
                    <div className="meeting-card-sub">
                      Mar 16 · <span className="msg-badge">42 msgs</span>
                    </div>
                  </div>
                  <div className="meeting-card-right">
                    <span className="open-btn">OPEN</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
