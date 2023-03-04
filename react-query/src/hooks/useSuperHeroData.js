import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

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
  const queryClient = useQueryClient();
  return useQuery(["super-heroes", heroId], fetchSuperHero, {
    initialData: () => {
      const superheroes = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (superheroes) {
        return { data: superheroes };
      } else {
        return undefined;
      }
    },
  });
};
