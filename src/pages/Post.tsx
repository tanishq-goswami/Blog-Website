import { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBlog } from '../store/blog';
import { readingTime } from '../utils/readingTime';
import MarkdownRenderer from '../components/MarkdownRenderer';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';
import { format } from 'date-fns';

export default function Post() {
  const { slug } = useParams();
  const posts = useBlog((s) => s.posts);
  const post = useMemo(() => posts.find((p) => p.slug === slug), [posts, slug]);
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!post) navigate('/');
  }, [post, navigate]);

  if (!post) return null;

  return (
    <article className="relative">
      {/* progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-500 z-40"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link to="/" className="text-indigo-600 dark:text-indigo-400">
          ← Back
        </Link>
        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          {format(new Date(post.date), 'PP')} • ⏱ {readingTime(post.content)} min • #{post.category}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt=""
            className="w-full h-80 object-cover rounded-2xl my-6"
          />
        )}
        <MarkdownRenderer markdown={post.content} />

        <div className="mt-6">
          <LikeButton postId={post.id} count={post.likes} />
        </div>

        <CommentSection postId={post.id} />
      </div>
    </article>
  );
}