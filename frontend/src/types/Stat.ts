export type Stat = {
  albums: {
    amount: number;
    data: {
      _id: string;
      songs: number;
    }[];
  };

  artists: {
    amount: number;
    data: {
      _id: string;
      songs: number;
      albums: number;
    }[];
  };

  genres: {
    amount: number;
    data: {
      _id: string;
      songs: number;
    }[];
  };
};
