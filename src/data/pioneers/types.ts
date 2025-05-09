
export interface Pioneer {
  id: string;
  name: string;
  birthYear: string;
  deathYear: string | null;
  shortBio: string;
  longBio: string;
  contributions: string[];
  quote: string;
  imageUrl: string;
  links: {
    label: string;
    url: string;
  }[];
  tags: string[];
}
