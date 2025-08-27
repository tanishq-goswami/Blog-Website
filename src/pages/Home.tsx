import { useMemo } from 'react';
import { useBlog } from '../store/blog';
import PostCard from '../components/PostCard';
import CategoryPills from '../components/CategoryPills';


export default function Home() {
const posts = useBlog((s) => s.posts);
const q = useBlog((s) => s.query).toLowerCase();
const f = useBlog((s) => s.filter);


const filtered = useMemo(() => {
return posts.filter((p) => {
const matchesQ = [p.title, p.excerpt, p.content].join(' ').toLowerCase().includes(q);
const matchesF = f === 'all' ? true : p.category === f;
return matchesQ && matchesF;
});
}, [posts, q, f]);


return (
<main className="max-w-6xl mx-auto px-4 py-8">
<div className="flex items-center justify-between gap-3 mb-6">
<h2 className="text-2xl font-bold">Latest Posts</h2>
<CategoryPills />
</div>
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filtered.map((p) => (
<PostCard key={p.id} post={p} />
))}
</section>
</main>
);
}