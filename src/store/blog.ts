import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Post, Comment } from '../types';

type BlogState = {
  posts: Post[];
  comments: Record<string, Comment[]>;
  likes: Record<string, number>;

  // UI state
  theme: 'light' | 'dark';
  query: string;
  filter: 'all' | 'tech' | 'life' | 'career';

  // Actions
  addComment: (postId: string, c: Comment) => void;
  addLike: (postId: string) => void;
  setTheme: (t: 'light' | 'dark') => void;
  setQuery: (q: string) => void;
  setFilter: (f: 'all' | 'tech' | 'life' | 'career') => void;
};

export const useBlog = create<BlogState>()(
  persist(
    (set) => ({
      posts: [
        {
          id: '1',
          slug: 'post-one',
          title: 'The Journey Begins',
          excerpt: 'My first post in this futuristic blog.',
          content: 'This is the **content** of post one. It supports _Markdown_!',
          category: 'tech',
          date: new Date().toISOString(),
          image: 'https://picsum.photos/800/400?1',
          likes: 0,
        },
        {
          id: '2',
          slug: 'post-two',
          title: 'Learning & Growing',
          excerpt: 'Reflections on personal growth and learning.',
          content: 'Another **Markdown** post. Growth mindset all the way!',
          category: 'life',
          date: new Date().toISOString(),
          image: 'https://picsum.photos/800/400?2',
          likes: 0,
        },
      ],
      comments: {},
      likes: {},

      // UI state defaults
      theme: 'light',
      query: '',
      filter: 'all',

      // Actions
      addComment: (postId, c) =>
        set((state) => ({
          comments: {
            ...state.comments,
            [postId]: [...(state.comments[postId] || []), c],
          },
        })),
      addLike: (postId) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === postId ? { ...p, likes: p.likes + 1 } : p
          ),
        })),
      setTheme: (t) => set(() => ({ theme: t })),
      setQuery: (q) => set(() => ({ query: q })),
      setFilter: (f) => set(() => ({ filter: f })),
    }),
    { name: 'blog-store' } // persists in localStorage
  )
);
