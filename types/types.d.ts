// type of { PORT = 3000, MONGO_USER, MONGO_PASS, MONGO_URL } = process.env;
export type EnvConfig = {
  PORT: string | number;
  MONGO_USER: string;
  MONGO_PASS: string;
  MONGO_URL: string;
};
