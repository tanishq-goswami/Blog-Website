import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Post from './pages/Post';
import Home from './pages/Home';
import About from './pages/About';


export default function App() {
return (
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/post/:slug" element={<Post />} />
<Route path="/about" element={<About />} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</div>
);
}