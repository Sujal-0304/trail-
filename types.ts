
export interface UserProfile {
  name: string;
  email: string;
  password?: string;
  avatar?: string;
  role: string;
  preferences: string[];
  memories: string[];
  importantDates?: string[]; // Array of ISO date strings (YYYY-MM-DD)
  seenCharmingLines?: string[]; // Track which lines the user has already seen
  integrations?: {
    google: boolean;
    linkedin: boolean;
  };
}

export interface Task {
  id: string;
  title: string;
  startTime: string; // ISO string
  endTime: string; // ISO string
  description?: string;
  category: 'work' | 'personal' | 'health' | 'urgent';
  completed: boolean;
}

export interface Email {
  id: string;
  sender: string;
  subject: string;
  content: string;
  timestamp: string;
  type: 'main' | 'spam';
  draft?: string;
}

export interface LinkedInUpdate {
  id: string;
  type: 'job' | 'notification';
  title: string;
  company?: string;
  description: string;
  highlighted: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type AppTab = 'dash' | 'calendar' | 'email' | 'linkedin' | 'chat' | 'news';
