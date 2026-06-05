import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MemberHub from './pages/MemberHub'
import News from './pages/News'
import YourRights from './pages/YourRights'
import Leadership from './pages/Leadership'
import History from './pages/History'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ilwu-black flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member-hub" element={<MemberHub />} />
            <Route path="/news" element={<News />} />
            <Route path="/your-rights" element={<YourRights />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
