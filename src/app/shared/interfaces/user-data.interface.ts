export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserFavs {
  userId: number;
  questionId: number;
}
