export interface POST {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string | null;
  featured: boolean;
  visibility: string;
  email_recipient_filter: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt: string | null;
  codeinjection_head: string | null;
  codeinjection_foot: string | null;
  custom_template: string | null;
  canonical_url: string | null;
  url: string;
  excerpt: string;
  reading_time: number;
  access: boolean;
  send_email_when_published: boolean;
  og_image: string | string | null;
  og_title: string | string | null;
  og_description: string | string | null;
  twitter_image: string | string | null;
  twitter_title: string | string | null;
  twitter_description: string | string | null;
  meta_title: string;
  meta_description: string;
  email_subject: string | string | null;
  frontmatter: string | string | null;
}

export interface META {
  page: number;
  limit: number;
  pages: number;
  total: number;
  next: number | null;
  prev: number | null;
}

export interface RESPONSE {
  posts: POST[];
  meta: META;
}
