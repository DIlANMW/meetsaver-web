import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import BlogIndex from './pages/BlogIndex.jsx'
import HowToSaveGoogleMeetChatHistory from './pages/articles/HowToSaveGoogleMeetChatHistory.jsx'
import DoesGoogleMeetSaveChatHistory from './pages/articles/DoesGoogleMeetSaveChatHistory.jsx'
import DownloadGoogleMeetChatHistory from './pages/articles/DownloadGoogleMeetChatHistory.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-mesh" />
      <div className="bg-grid" />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/how-to-save-google-meet-chat-history" element={<HowToSaveGoogleMeetChatHistory />} />
        <Route path="/blog/does-google-meet-save-chat-history" element={<DoesGoogleMeetSaveChatHistory />} />
        <Route path="/blog/download-google-meet-chat-history" element={<DownloadGoogleMeetChatHistory />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
