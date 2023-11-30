type Character = {
  name: string;
  species: string;
  gender: "unknown" | "Male" | "Female" | "Genderless";
  origin: {
    name: string;
    url: string;
  };
  type: string;
  location: {
    name: string;
    url: string;
  };
  image: string;
  id: number;
  status: "unknown" | "Dead" | "Alive";
  episode: string[];
  url: string;
  created: string;
  price?: number;
  sale?: boolean;
  hours?: number;
};

export default Character;
