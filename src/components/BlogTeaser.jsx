import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const POSTS = [
  {
    slug: 'how-to-save-google-meet-chat-history',
    tag: 'Guide',
    title: 'How to Save Google Meet Chat History',
    desc: 'Every method available — and the one that actually works automatically, even if you forget.',
    read: '5 min',
  },
  {
    slug: 'does-google-meet-save-chat-history',
    tag: 'Answer',
    title: 'Does Google Meet Save Chat History?',
    desc: 'The short answer is no. Here\'s the full story and what to do about it.',
    read: '4 min',
  },
  {
    slug: 'download-google-meet-chat-history',
    tag: 'Guide',
    title: 'How to Download Google Meet Chat',
    desc: 'No built-in export button exists. Here\'s how to get a proper download of your chat.',
    read: '4 min',
  },
]

function PostCard({ post, delay }) {
  const ref = useScrollAnimation('sa-up', delay)
  return (
    <Link to={`/blog/${post.slug}`} className="blog-teaser-card" ref={ref}>
      <div className="blog-teaser-tag">{post.tag}</div>
      <h3 className="blog-teaser-title">{post.title}</h3>
      <p className="blog-teaser-desc">{post.desc}</p>
      <div className="blog-teaser-footer">
        <span>{post.read} read</span>
        <span className="blog-teaser-arrow">→</span>
      </div>
    </Link>
  )
}

export default function BlogTeaser() {
  const tagRef = useScrollAnimation('sa-up', 0)
  const h2Ref = useScrollAnimation('sa-up', 0.08)
  const pRef = useScrollAnimation('sa-up', 0.16)

  return (
    <section className="section sec-blog-teaser">
      <div className="wrap">
        <div className="sec-hd">
          <div className="sec-tag" ref={tagRef}>Resources</div>
          <h2 className="sec-h2" ref={h2Ref}>From the blog</h2>
          <p className="sec-p" ref={pRef}>
            Guides and answers for saving, exporting, and managing your Google Meet chats.
          </p>
        </div>

        <div className="blog-teaser-grid">
          {POSTS.map((post, i) => (
            <PostCard key={post.slug} post={post} delay={i * 0.09} />
          ))}
        </div>

        <div className="blog-teaser-more">
          <Link to="/blog" className="btn-out">View all articles →</Link>
        </div>
      </div>
    </section>
  )
}
