// Types for blog data

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'tech' | 'life' | 'career';
  date: string;
  image?: string;
  likes: number;
};

export type Comment = {
  id: string;
  postId: string;
  name: string;
  text: string;         // ✅ fixed: using text everywhere
  createdAt: string;
};
