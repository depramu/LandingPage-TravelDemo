export interface Destination {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface ItineraryRequest {
  destination: string;
  duration: string;
  budget: string;
  interests: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}