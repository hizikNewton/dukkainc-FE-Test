export type Data = {
  fullname: string;
  phoneNumber: string;
  email: string;
  position: string;
  salary: string | number;
};

export type ErrorData = { [T in keyof Data]?: Array<Data[T]> };
