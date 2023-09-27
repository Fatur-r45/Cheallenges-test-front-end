export interface Article {
  source: Source;
  title: string;
  description: string;
  content: string;
  urlToImage: string;
  image: string;
  url: string;
}

interface Source {
  id: string;
  name: string;
}
