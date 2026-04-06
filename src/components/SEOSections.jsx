import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const SECTIONS = [
    {
        ico: '❌',
        label: 'Problem',
        title: 'Why Google Meet Chat Gets Lost',
        desc: 'Google Meet does not save chat history after meetings. Messages, links, and discussions disappear instantly with no record.',
    },
    {
        ico: '⚡',
        label: 'Solution',
        title: 'How to Save Google Meet Chat Automatically',
        desc: 'MeetSaver captures chat in real time, exports chat history, and extracts links and tasks automatically - no clicks needed.',
        highlight: true,
    },
    {
        ico: '🎯',
        label: 'Use Cases',
        title: 'Perfect for Students, Teams, and Professionals',
        desc: 'Students save notes, teams track decisions, and professionals keep records - all from Google Meet chat.',
    },
]

function Card({ item, delay }) {
    const ref = useScrollAnimation('sa-up', delay)

    return (
        <div
            ref={ref}
            className={`fcard-modern ${item.highlight ? 'fcard-highlight' : ''}`}
        >
            <div className="fcard-modern-ico">{item.ico}</div>

            <div>
                <div className="fcard-label">{item.label}</div>
                <div className="fcard-title-modern">{item.title}</div>
                <div className="fcard-desc-modern">{item.desc}</div>
            </div>
        </div>
    )
}

export default function SeoSummary() {
    const tagRef = useScrollAnimation('sa-up', 0)
    const h2Ref = useScrollAnimation('sa-up', 0.08)
    const pRef = useScrollAnimation('sa-up', 0.16)

    return (
        <section className="section sec-seo" id='over'>
            <div className="wrap">

                <div className="sec-hd">
                    <div className="sec-tag" ref={tagRef}>Overview</div>

                    <h2 className="sec-h2" ref={h2Ref}>
                        Never Lose Google Meet Chat Again
                    </h2>

                    <p className="sec-p" ref={pRef}>
                        MeetSaver helps you save and export chats effortlessly.
                    </p>
                </div>

                <div className="feat-grid seo-grid">
                    {SECTIONS.map((item, i) => (
                        <Card key={item.label} item={item} delay={i * 0.08} />
                    ))}
                </div>

            </div>
        </section>
    )
}