export type Song = {
  _id?: string;
  id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  publishYear: number;
  createdAt?: Date;
  updatedAt?: Date;
};
