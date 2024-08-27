export type TErrorSourch = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSourch: TErrorSourch;
};
