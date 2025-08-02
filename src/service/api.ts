import axios from 'axios';
import { API_CONFIG } from '../config/APIConfig';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.DEFAULT_HEADERS,
});

const isTestEnv = process.env.NODE_ENV === 'test';

// Interceptor das requisições
api.interceptors.request.use(
  (config) => {
    if (!isTestEnv) {
      console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => {
    if (!isTestEnv) {
      console.error('[API] Erro na requisição:', error);
    }
    return Promise.reject(new Error(error.message || 'Erro na requisição'));
  }
);

// Interceptor das respostas
api.interceptors.response.use(
  (response) => {
    if (!isTestEnv) {
      console.log(`[API] Resposta recebida: ${response.status}`);
    }
    return response;
  },
  (error) => {
    if (!isTestEnv) {
      console.error('[API] Erro na resposta:', error.response?.status, error.message);

      // Tratamento dos erros globais
      if (error.response?.status === 401) {
        console.error('Erro de autenticação');
      } else if (error.response?.status === 500) {
        console.error('Erro interno do servidor');
      } else {
        console.error('Erro desconhecido:', error.message);
      }
    }

    return Promise.reject(new Error(error.message || 'Erro na resposta da API'));
  }
);

export default api;
