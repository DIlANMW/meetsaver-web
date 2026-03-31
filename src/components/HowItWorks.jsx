import React from 'react'
import { CHROME_ICON } from '../assets.js'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const STEPS = [
  {
    n: 'STEP 01',
    ico: '📦',
    title: 'Install MeetSaver',
    desc: 'Add from the Chrome Web Store in one click. Under 10 seconds. No account, no sign-up.',
  },
  {
    n: 'STEP 02',
    icoImg: true,
    title: 'Open Google Meet',
    desc: 'MeetSaver detects your meeting instantly and starts capturing the moment the first message appears.',
  },
  {
    n: 'STEP 03',
    ico: '✅',
    title: 'Everything saved',
    desc: 'After the meeting, find every message, link and action item — organised, searchable, exportable.',
  },
]

function AnimStep({ step, delay }) {
  const ref = useScrollAnimation('sa-flip', delay)
  return (
    <div className="step" ref={ref}>
      <div className="step-n">{step.n}</div>
      <span className="step-ico">
        {step.icoImg
          ? <img src={CHROME_ICON} alt="Google Meet" style={{ width: 34, height: 34, borderRadius: 8, verticalAlign: 'middle' }} />
          : step.ico
        }
      </span>
      <div className="step-title">{step.title}</div>
      <div className="step-desc">{step.desc}</div>
    </div>
  )
}

export default function HowItWorks() {
  const tagRef  = useScrollAnimation('sa-up', 0)
  const h2Ref   = useScrollAnimation('sa-up', 0.08)
  const pRef    = useScrollAnimation('sa-up', 0.16)

  return (
    <section className="section sec-how" id="how">
      <div className="wrap">
        <div className="sec-hd">
          <div className="sec-tag" ref={tagRef}>How it works</div>
          <h2 className="sec-h2" ref={h2Ref}>
            Three steps.<br />Completely automatic.
          </h2>
          <p className="sec-p" ref={pRef}>
            No setup, no manual saving — join your meeting and MeetSaver handles everything.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((step, i) => (
            <AnimStep key={step.n} step={step} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}
