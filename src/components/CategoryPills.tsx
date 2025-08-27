import { useBlog } from '../store/blog';


const cats = ['all', 'tech', 'life', 'career'] as const;


export default function CategoryPills() {
const filter = useBlog((s) => s.filter);
const setFilter = useBlog((s) => s.setFilter);


return (
<div className="flex flex-wrap gap-2">
{cats.map((c) => (
<button
key={c}
onClick={() => setFilter(c)}
className={
'px-3 py-1 rounded-full border text-sm transition ' +
(filter === c
? 'bg-indigo-600 text-white border-indigo-600'
: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-indigo-400')
}
>
{c}
</button>
))}
</div>
);
}