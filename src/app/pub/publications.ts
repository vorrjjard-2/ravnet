export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  summary?: string;
  tags?: string[];
  links: { label: string; url: string }[];
}

export const publications: Publication[] = [];
