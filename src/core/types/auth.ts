export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'patient' | 'healper';
  avatar?: string;
  verified?: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  phone: string;
  role: 'patient' | 'healper';
}

export interface AuthResponse {
  user: User;
  token?: string;
}
