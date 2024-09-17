interface Films {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageURL?: string;
}

type NewFilm = Omit<Films, "id">;

export type { Films, NewFilm };
