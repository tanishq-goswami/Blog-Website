import { useState } from 'react';
import type { FormEvent } from 'react';
import { useBlog } from '../store/blog';
import type { Comment } from '../types';

export default function CommentSection({ postId }: { postId: string }) {
  const comments = useBlog((s) => s.comments[postId] || []);
  const addComment = useBlog((s) => s.addComment);

  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    const c: Comment = {
      id: crypto.randomUUID(),
      postId,
      name,
      text, // ✅ consistent with Comment type
      createdAt: new Date().toISOString(),
    };

    addComment(postId, c);
    setText('');
  };

  return (
    <section className="mt-8">
      <h3 className="font-semibold mb-3">Comments</h3>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2 flex-col sm:flex-row">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="flex-1 px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
          >
            Post
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Your comment"
          className="min-h-[100px] px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
        />
      </form>

      <ul className="mt-4 space-y-2">
        {comments.map((c) => (
          <li
            key={c.id}
            className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {new Date(c.createdAt).toLocaleString()} —{' '}
              <strong>{c.name}</strong>
            </p>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
