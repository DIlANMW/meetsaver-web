import React from 'react'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation.js'

const PILLS = [
  {
    ico: '🔒',
    title: '100% Local Storage',
    desc: "All data stored in your browser. We never see it, access it, or transmit it anywhere.",
  },
  {
    ico: '🚫',
    title: 'No Account Required',
    desc: 'No sign-up, no email, no passwords. Install and it works immediately.',
  },
  {
    ico: '👁️',
    title: 'Zero Tracking',
    desc: 'We collect zero analytics, zero usage data. MeetSaver is invisible to us once installed.',
  },
]

function PrivacyPill({ pill, delay }) {
  const ref = useScrollAnimation('sa-left', delay)
  return (
    <div className="ppill" ref={ref}>
      <div className="ppill-ico">{pill.ico}</div>
      <div>
        <div className="ppill-title">{pill.title}</div>
        <div className="ppill-desc">{pill.desc}</div>
      </div>
    </div>
  )
}

function StatBox() {
  const boxRef    = useScrollAnimation('sa-right', 0)
  const count1Ref = useCountUp(0, '', 800)
  const count2Ref = useCountUp(0, '', 800)
  const count3Ref = useCountUp(100, '%', 1200)

  return (
    <div className="priv-right" ref={boxRef}>
      <div className="pstat">
        <span className="pstat-n" ref={count1Ref}>0</span>
        <div className="pstat-l">Bytes sent to any server</div>
      </div>
      <div className="pstat">
        <span className="pstat-n" ref={count2Ref}>0</span>
        <div className="pstat-l">Accounts or sign-ups required</div>
      </div>
      <div className="pstat">
        <span className="pstat-n" ref={count3Ref}>100%</span>
        <div className="pstat-l">Your data. Your device. Your control.</div>
      </div>
    </div>
  )
}

export default function Privacy() {
  const tagRef = useScrollAnimation('sa-up', 0)
  const h2Ref  = useScrollAnimation('sa-up', 0.08)
  const pRef   = useScrollAnimation('sa-up', 0.16)

  return (
    <section className="section sec-privacy" id="privacy">
      <div className="wrap">
        <div className="priv-inner">
          <div className="priv-left">
            <div className="sec-hd">
              <div className="sec-tag" ref={tagRef}>Privacy first</div>
              <h2 className="sec-h2" ref={h2Ref}>
                Your data stays<br />on your device.
              </h2>
              <p className="sec-p" ref={pRef}>
                No cloud. No account. No servers. Everything stored locally in your browser — only you can access it.
              </p>
            </div>
            <div className="priv-pills">
              {PILLS.map((pill, i) => (
                <PrivacyPill key={pill.title} pill={pill} delay={i * 0.1} />
              ))}
            </div>
          </div>

          <StatBox />
        </div>
      </div>
    </section>
  )
}
