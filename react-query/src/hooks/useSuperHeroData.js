import axios from "axios";
import { useQuery } from "react-query";

// const fetchSuperHero = async (heroId) => {
//   return await axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };

// export const useSuperHeroData = (heroId) => {
//   return useQuery(["super-heroes", heroId], () => fetchSuperHero(heroId));
// };

const fetchSuperHero = async ({ queryKey }) => {
  console.log(queryKey);
  const heroId = queryKey[1];
  return await axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-heroes", heroId], fetchSuperHero);
};
