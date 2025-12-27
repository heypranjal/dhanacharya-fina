export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  cluster: "pillar" | "core" | "pricing" | "advisory" | "platform";
  image: string;
  isPillar?: boolean;
  keywords: string[];
  relatedPosts: number[];
}

export interface BlogSection {
  id: string;
  heading: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Breadcrumb {
  name: string;
  url: string;
}

export interface BlogContent {
  post: BlogPost;
  metaDescription: string;
  sections: BlogSection[];
  faqs: FAQ[];
  breadcrumbs: Breadcrumb[];
}
