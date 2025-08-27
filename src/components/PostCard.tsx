import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { readingTime } from '../utils/readingTime';
import type { Post } from '../types';


export default function PostCard({ post }: { post: Post }) {
return (
<motion.article
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.25 }}
className="bg-white dark:bg-slate-900 rounded-2xl shadow-card overflow-hidden flex flex-col"
>
{post.image && (
<img src={post.image} alt="" className="w-full h-52 object-cover" />
)}
<div className="p-5 flex flex-col gap-2">
<div className="text-xs text-slate-500 dark:text-slate-400">
{format(new Date(post.date), 'PP')} • ⏱ {readingTime(post.content)} min
</div>
<Link to={`/post/${post.slug}`} className="text-lg font-semibold hover:underline">
{post.title}
</Link>
<p className="text-slate-600 dark:text-slate-300 line-clamp-3">{post.excerpt}</p>
</div>
</motion.article>
);
}