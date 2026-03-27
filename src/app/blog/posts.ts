export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
}

export const posts: Post[] = [];
