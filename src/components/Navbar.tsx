import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useBlog } from '../store/blog';


export default function Navbar() {
const query = useBlog((s) => s.query);
const setQuery = useBlog((s) => s.setQuery);


return (
<header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<Link to="/" className="font-bold text-xl">
<span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">Blog</span> Website
</Link>
<nav className="hidden md:flex items-center gap-6">
<NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600 dark:text-indigo-400' : 'hover:text-indigo-600'}>Posts</NavLink>
<NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600 dark:text-indigo-400' : 'hover:text-indigo-600'}>About</NavLink>
</nav>
<div className="flex items-center gap-3">
<input
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Search posts..."
className="hidden md:block w-64 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
/>
<ThemeToggle />
</div>
</div>
</header>
);
}