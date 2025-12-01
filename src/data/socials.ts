export interface SocialPost {
    id: number;
    platform: 'youtube' | 'instagram' | 'tiktok';
    title: string;
    thumbnail: string;
    url: string;
    likes?: string;
  }
  
  export const socialPosts: SocialPost[] = [
    {
      id: 1,
      platform: 'youtube',
      title: 'Python ile Otomasyon Botu Yapımı',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800',
      url: 'https://youtube.com',
      likes: '1.2B'
    },
    {
      id: 2,
      platform: 'instagram',
      title: 'Ofis Günlükleri - Yazılımcı Hayatı',
      thumbnail: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=800',
      url: 'https://instagram.com',
      likes: '540'
    },
    {
      id: 3,
      platform: 'tiktok',
      title: 'Web Sitenizi 3 Adımda Hızlandırın',
      thumbnail: 'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?q=80&w=800',
      url: 'https://tiktok.com',
      likes: '2.5K'
    },
    {
      id: 4,
      platform: 'youtube',
      title: 'React vs Vue - Hangisi?',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800',
      url: 'https://youtube.com',
      likes: '890'
    }
  ];