export interface Project {
  id: number;
  title: string;
  description: string;
  category: "Python" | "Web Development" | "Mobile App" | "C/C++";
  imageUrl: string;
  technologies: string[];
  githubUrl?: string; // ? işareti isteğe bağlı demek // değil veri zorunlu değil demektir
  liveUrl?: string;
}

export interface Announcement {
  id: number;
  date: string;
  title: string;
  content: string;
  type: "duyuru" | "haber" | "güncelleme";
}