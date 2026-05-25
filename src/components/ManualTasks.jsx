import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SHORTCUTS = [
  { keys: ['Ctrl', '⇧', 'X'], desc: 'Open task input' },
  { keys: ['↵'],               desc: 'Save & add another' },
  { keys: ['⇧', '↵'],         desc: 'Save & close' },
  { keys: ['Ctrl', '⇧', 'L'], desc: 'Preview last 3 tasks' },
  { keys: ['Esc'],             desc: 'Close input' },
]

function ShortcutRow({ keys, desc, delay }) {
  const ref = useScrollAnimation('sa-up', delay)
  return (
    <div className="mt-row" ref={ref}>
      <div className="mt-keys">
        {keys.map((k, i) => <span className="mt-key" key={i}>{k}</span>)}
      </div>
      <span className="mt-key-desc">{desc}</span>
    </div>
  )
}

export default function ManualTasks() {
  const tagRef   = useScrollAnimation('sa-up', 0)
  const h2Ref    = useScrollAnimation('sa-up', 0.07)
  const pRef     = useScrollAnimation('sa-up', 0.14)
  const pillRef  = useScrollAnimation('sa-up', 0.1)
  const scRef    = useScrollAnimation('sa-up', 0.18)

  return (
    <section className="section sec-manual-tasks" id="manual-tasks">
      <div className="wrap mt-wrap">

        {/* Left: copy + shortcuts */}
        <div className="mt-left">
          <div className="sec-tag" ref={tagRef}>New Feature</div>
          <h2 className="sec-h2 mt-h2" ref={h2Ref}>
            Add tasks without<br />
            <span className="mt-accent">leaving your meeting.</span>
          </h2>
          <p className="sec-p mt-p" ref={pRef}>
            Quickly save reminders and action items inside Google Meet.
            View everything in one place while you talk.
          </p>

          <div className="mt-sc-list" ref={scRef}>
            {SHORTCUTS.map((s, i) => (
              <ShortcutRow key={s.desc} keys={s.keys} desc={s.desc} delay={0.2 + i * 0.06} />
            ))}
          </div>

          <p className="mt-footnote">
            Tasks sync alongside auto-captured messages. Review everything in the{' '}
            <span className="mt-accent-text">Tasks tab</span> after your meeting.
          </p>
        </div>

        {/* Right: pill mockup */}
        <div className="mt-right" ref={pillRef}>
          <div className="mt-mockup">

            {/* Pill state 1: idle */}
            <div className="mt-pill-group">
              <div className="mt-label-tag">Idle</div>
              <div className="mt-pill idle">
                <span className="mt-dot green"></span>
                <span className="mt-pill-text">MeetSaver · 18 msgs</span>
                <div className="mt-pill-sep"></div>
                <span className="mt-pill-plus">+</span>
                <span className="mt-pill-text">Add task</span>
                <span className="mt-pill-sc">⌃⇧X</span>
                <span className="mt-pill-count">3</span>
                <span className="mt-pill-close">✕</span>
              </div>
            </div>

            {/* Pill state 2: typing */}
            <div className="mt-pill-group">
              <div className="mt-label-tag active">Typing</div>
              <div className="mt-pill open">
                <span className="mt-dot purple"></span>
                <span className="mt-pill-input">Follow up with design team on mockups</span>
                <span className="mt-cursor"></span>
                <span className="mt-pill-hint">↵ save · ⇧↵ close · esc</span>
                <span className="mt-pill-close">✕</span>
              </div>
            </div>

            {/* Pill state 3: saved */}
            <div className="mt-pill-group">
              <div className="mt-label-tag saved">Saved</div>
              <div className="mt-toast">✓ Task saved</div>
              <div className="mt-pill saved">
                <span className="mt-dot green glow"></span>
                <span className="mt-pill-text">MeetSaver · 18 msgs</span>
                <div className="mt-pill-sep"></div>
                <span className="mt-pill-plus">+</span>
                <span className="mt-pill-text">Add task</span>
                <span className="mt-pill-count">4</span>
                <span className="mt-pill-close">✕</span>
              </div>
            </div>

            {/* Task preview panel */}
            <div className="mt-preview-panel">
              <div className="mt-preview-head">Tasks this meeting · Ctrl⇧L</div>
              {[
                { done: true,  text: 'Send API spec to backend team' },
                { done: true,  text: 'Update Figma prototype' },
                { done: true,  text: 'Review designs by Thursday EOD' },
                { done: false, text: 'Follow up with design team on mockups' },
              ].map((t, i) => (
                <div className="mt-preview-row" key={i}>
                  <span className={`mt-preview-icon ${t.done ? 'done' : ''}`}>{t.done ? '✓' : '○'}</span>
                  <span className={`mt-preview-text ${t.done ? 'done' : ''}`}>{t.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
