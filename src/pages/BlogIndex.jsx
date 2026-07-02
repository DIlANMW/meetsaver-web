import React from 'react'
import { Link } from 'react-router-dom'

const ARTICLES = [
  {
    slug: 'how-to-save-google-meet-chat-history',
    tag: 'Guide',
    title: 'How to Save Google Meet Chat History (Complete Guide)',
    desc: 'Google Meet doesn\'t save your chat messages after the meeting ends. Here\'s every method available, and the one that actually works automatically.',
    date: 'July 2, 2026',
    read: '5 min read',
  },
  {
    slug: 'does-google-meet-save-chat-history',
    tag: 'Answer',
    title: 'Does Google Meet Save Chat History Automatically?',
    desc: 'The short answer: no, for most users Google Meet does not save chat history. Here\'s the full story, what Google actually does with your chats, and how to fix it.',
    date: 'July 2, 2026',
    read: '4 min read',
  },
  {
    slug: 'download-google-meet-chat-history',
    tag: 'Guide',
    title: 'How to Download Google Meet Chat History',
    desc: 'Google Meet has no built-in download button for chat. Here\'s exactly how to get your chat history saved as a file, step by step.',
    date: 'July 2, 2026',
    read: '4 min read',
  },
]

export default function BlogIndex() {
  return (
    <div className="blog-page">
      <div className="blog-index-wrap">

        <div className="blog-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>Blog</span>
        </div>

        <header className="blog-index-header">
          <h1 className="blog-index-h1">MeetSaver Blog</h1>
          <p className="blog-index-lead">Guides and answers for Google Meet users who want to save, export, and manage their chat history.</p>
        </header>

        <div className="blog-card-grid">
          {ARTICLES.map(a => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="blog-card">
              <div className="blog-card-tag">{a.tag}</div>
              <h2 className="blog-card-title">{a.title}</h2>
              <p className="blog-card-desc">{a.desc}</p>
              <div className="blog-card-footer">
                <span>{a.date}</span>
                <span>{a.read}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
