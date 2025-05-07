export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};
export type ErrorResponse = {
  status: number;
  message: string;
};
