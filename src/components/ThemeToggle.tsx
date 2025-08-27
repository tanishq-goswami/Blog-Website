import { useEffect } from 'react';
import { useBlog } from '../store/blog';


export default function ThemeToggle() {
const theme = useBlog((s) => s.theme);
const setTheme = useBlog((s) => s.setTheme);


useEffect(() => {
const root = document.documentElement;
if (theme === 'dark') root.classList.add('dark');
else root.classList.remove('dark');
}, [theme]);


return (
<button
aria-label="Toggle theme"
onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
className="rounded-full border border-slate-300/50 dark:border-slate-600/50 px-3 py-2 text-lg shadow-sm hover:shadow transition"
>
{theme === 'dark' ? '☀️' : '🌙'}
</button>
);
}