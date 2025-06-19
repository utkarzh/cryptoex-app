export interface LoginResponse_int {
  message: string;
  sessionid: string;
  status: number;
}

export interface AuthApiResult_int<T> {
  data: T;
  isLoading: boolean;
  error: string | null;
  isError: boolean;
}
