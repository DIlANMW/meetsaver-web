import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const FAQS = [
  {
    q: 'Does Google Meet save chat history automatically?',
    a: 'Google Meet may save chat messages to Google Chat for some Google Workspace (business) users, but this is limited and not available to everyone. For most users, Google Meet chat messages disappear the moment the meeting ends. MeetSaver solves this by automatically capturing and storing every message locally during your meeting so you never lose anything.',
  },
  {
    q: 'How do I save Google Meet chat history?',
    a: 'The easiest way is to install the MeetSaver Chrome extension. Once installed, it automatically saves your Google Meet chat in real time, no clicking or setup required. After the meeting, open MeetSaver to view or export the full chat history.',
  },
  {
    q: 'How do I download Google Meet chat history?',
    a: 'With MeetSaver, open the extension after your meeting and click Export. This downloads the full transcript, including sender names and timestamps, as a .txt file. Without an extension, Google Meet does not offer a built-in way to download chat history.',
  },
  {
    q: 'What is MeetSaver?',
    a: "MeetSaver is a free Chrome extension that automatically saves Google Meet chat messages. If you've ever lost important messages after a meeting ends, MeetSaver ensures you can download and store your chat history safely.",
  },
  {
    q: 'Who needs MeetSaver?',
    a: "MeetSaver is ideal for anyone who uses Google Meet regularly and wants to make sure they don't lose important chat messages after a meeting ends: students, teams, and professionals alike.",
  },
  {
    q: 'Do I need to click anything during the meeting?',
    a: 'No. MeetSaver detects your Google Meet session automatically and captures every message without any interaction from you.',
  },
  {
    q: 'Can I export my saved chats?',
    a: 'Yes. From any saved meeting, click Export to download the full transcript as a .txt file. Share it with your team or keep it for your records.',
  },
  {
    q: 'Is MeetSaver free?',
    a: 'Yes, MeetSaver is completely free. No account, no sign-up, no paid tier. Install it from the Chrome Web Store in under 10 seconds.',
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
      <div className="faq-a" hidden={!open} aria-hidden={!open}>{faq.a}</div>
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
          <p className="sec-p" ref={pRef}>Everything you need to know about saving Google Meet chat history.</p>
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
