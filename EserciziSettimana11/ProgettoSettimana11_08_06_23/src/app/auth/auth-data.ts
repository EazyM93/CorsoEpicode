export interface AuthData {
  accessToken: string;
    user: {
      id: number;
      nome: string;
      cognome: string;
      email: string;
      password: string;
      favorites: number[];
    };
}
