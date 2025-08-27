import { useBlog } from '../store/blog';


export default function LikeButton({ postId, count }: { postId: string; count: number }) {
const addLike = useBlog((s) => s.addLike);
return (
<button
onClick={() => addLike(postId)}
className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
>
<span>❤️</span>
<span className="text-sm">{count}</span>
</button>
);
}