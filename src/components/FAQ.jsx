import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const FAQS = [
  {
    q: 'Does MeetSaver work with Zoom or Teams?',
    a: 'MeetSaver is built exclusively for Google Meet. It does not work with Zoom, Microsoft Teams, or any other platform.',
  },
  {
    q: 'Is my meeting data sent to the cloud?',
    a: "Never. All data is stored locally using Chrome's storage API. Nothing is transmitted to any server.",
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
    q: 'Is MeetSaver really free?',
    a: 'Yes — completely free, forever. No premium tier, no trial, no credit card.',
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
  const h2Ref  = useScrollAnimation('sa-up', 0.08)
  const pRef   = useScrollAnimation('sa-up', 0.16)

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
