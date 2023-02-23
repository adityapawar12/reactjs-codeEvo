import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
  // return axios.get("http://localhost:4000/superheroes1");
};

export const useSuperHeroesData = (onSuccess, onError, fetchOnMount) => {
  return useQuery(["super-heroes"], fetchSuperheroes, {
    enabled: fetchOnMount,
    refetchOnMount: true,
    onSuccess,
    onError,
    // select: (data) => {
    //   const heroNames = data.data.map((hero) => hero.name);
    //   return heroNames;
    // },
  });
};
