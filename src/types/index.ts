export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  expertise: string[];
  joinedAt: Date;
}

export interface Message {
  id: string;
  content: string;
  userId: string;
  timestamp: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  messages: Message[];
}