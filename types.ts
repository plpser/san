
export interface Attraction {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: number;
  location?: string;
  author?: {
    name: string;
    avatar: string;
  };
  likes?: string;
  tags?: string[];
  type: 'ugc' | 'ticket';
  rating?: number;
  reviewCount?: number;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  originalPrice?: number;
}

export interface Order {
  attractionId: string;
  ticketId: string;
  date: string;
  quantity: number;
  total: number;
}
