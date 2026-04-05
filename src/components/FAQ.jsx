import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const FAQS = [
  {
    q: 'What is MeetSaver?',
    a: "MeetSaver is a Chrome extension that automatically saves Google Meet chat messages. If you've ever lost important messages after a meeting ends, MeetSaver ensures you can download and store your chat history safely.",
  },
  {
    q: 'Who Needs MeetSaver?',
    a: "MeetSaver is ideal for anyone who uses Google Meet regularly and wants to ensure they don't lose important chat messages after a meeting ends.",
  },
  {
    q: 'Do I need to click anything during the meeting?',
    a: 'No. MeetSaver detects your meeting automatically and captures every message without any interaction.',
  },
  {
    q: 'Can I export my saved chats?',
    a: 'Yes. From any saved meeting, click Export to download the full transcript as a .txt file.',
  },
  {
    q: 'Does Google Meet save chat messages automatically?',
    a: 'Google Meet may save chat messages to Google Chat for some Google Workspace (business) users. However, this feature is limited, not available to all users, and meeting participants often cannot access chats after the meeting ends. MeetSaver ensures all chat messages are captured and stored locally for anyone using Google Meet.',
  },
]

function FaqItem({ faq, defaultOpen = false, delay }) {
  const [open, setOpen] = useState(defaultOpen)
  const ref = useScrollAnimation('sa-up', delay)

  return (
    <div className={`faq-item${open ? ' open' : ''}`} ref={ref}>
      <div className="faq-q" onClick={() => setOpen(o => !o)}>
        {faq.q}
        <span className="faq-ic">+</span>
      </div>
      {open && <div className="faq-a">{faq.a}</div>}
    </div>
  )
}

export default function FAQ() {
  const tagRef = useScrollAnimation('sa-up', 0)
  const h2Ref = useScrollAnimation('sa-up', 0.08)
  const pRef = useScrollAnimation('sa-up', 0.16)

  return (
    <section className="section sec-faq" id="faq">
      <div className="wrap">
        <div className="sec-hd">
          <div className="sec-tag" ref={tagRef}>FAQ</div>
          <h2 className="sec-h2" ref={h2Ref}>Common questions.</h2>
          <p className="sec-p" ref={pRef}>Everything you need to know before installing.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              defaultOpen={i === 0}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
