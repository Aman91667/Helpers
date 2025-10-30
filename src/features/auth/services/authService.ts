import { api } from '@/core/api/axiosClient';
import type { ApiResponse } from '@/core/api/axiosClient';
import type { AuthResponse } from '@/core/types/auth';

export const authService = {
  login: (email: string, password: string) =>
    api.post<AuthResponse>('/auth/login', { email, password }),

  logout: () =>
    api.post('/auth/logout'),

  me: <T = AuthResponse>() =>
    api.get<T>('/auth/me'),
};
