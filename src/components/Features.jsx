import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const FEATURES = [
  {
    wide: true,
    ico: '⚡',
    title: "Real-time capture - the moment it's sent",
    desc: "MeetSaver watches the Google Meet chat in real time. The second someone sends a message, it's captured silently - no delay, no missed messages, no manual saving. You stay completely focused on the meeting.",
  },
  {
    ico: '💬',
    title: 'Full message history',
    desc: 'Every message with sender names and timestamps - the complete chat, nothing missing.',
  },
  {
    ico: '🔗',
    title: 'Links auto-extracted',
    desc: 'Every URL shared in chat pulled into its own tab. Click to open instantly.',
  },
  {
    ico: '✅',
    title: 'Action items detected',
    desc: "Tasks and action items identified and listed separately so you never miss a follow-up.",
  },
  {
    ico: '📤',
    title: 'Export anytime',
    desc: 'Download your full meeting transcript as a .txt file - share with your team or keep for records.',
  },
]

function FeatureCard({ feature, delay }) {
  const ref = useScrollAnimation('sa-up', delay)
  return (
    <div className={`fcard${feature.wide ? ' wide' : ''}`} ref={ref}>
      <div className="fcard-ico">{feature.ico}</div>
      <div>
        <div className="fcard-title">{feature.title}</div>
        <div className="fcard-desc">{feature.desc}</div>
      </div>
    </div>
  )
}

export default function Features() {
  const tagRef = useScrollAnimation('sa-up', 0)
  const h2Ref = useScrollAnimation('sa-up', 0.08)
  const pRef = useScrollAnimation('sa-up', 0.16)

  return (
    <section className="section sec-features" id="features">
      <div className="wrap">
        <div className="sec-hd">
          <div className="sec-tag" ref={tagRef}>Features</div>
          <h2 className="sec-h2" ref={h2Ref}>
            Everything you need.<br />Nothing you don't.
          </h2>
          <p className="sec-p" ref={pRef}>
            Built to be invisible during your meeting and indispensable after it ends.
          </p>
        </div>

        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}
