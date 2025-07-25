import api from './api';
import { API_CONFIG } from '../config/APIConfig'; 

export interface ICarouselItem {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
}

export const carouselService = {
  async getCarouselItems(): Promise<ICarouselItem[]> {
    const response = await api.get<ICarouselItem[]>(API_CONFIG.ENDPOINTS.CAROUSEL);
    return response.data;
  },
};
