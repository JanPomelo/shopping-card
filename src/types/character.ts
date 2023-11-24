type Character = {
  name: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  image: string;
  id: number;
  status: string;
  episode: string[];
};

export default Character;
