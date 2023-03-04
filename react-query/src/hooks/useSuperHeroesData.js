// import axios from "axios";
import { request } from "../utils/axios-utils";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchSuperheroes = () => {
  // return axios.get("http://localhost:4000/superheroes1");
  // return axios.get("http://localhost:4000/superheroes");

  return request({ url: "/superheroes" });
};

const addSuperHero = (hero) => {
  // return axios.post("http://localhost:4000/superheroes", hero);
  return request({ url: "/superheroes", method: "post", data: hero });
};

export const useSuperHeroesData = (onSuccess, onError, fetchOnMount) => {
  return useQuery(["super-heroes"], fetchSuperheroes, {
    enabled: fetchOnMount,
    refetchOnMount: true,
    onSuccess,
    onError,
    // select: (data) => {
    //   const heroNames = data.data.m(ap((hero) => hero.name);
    //   return heroNames;
    // },
  });
};

export const useAddSuperHeroeData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return { ...oldQueryData, data: [...oldQueryData.data, data.data] };
      });
    },
    //   onMutate: async (newHero) => {
    //     await queryClient.cancelQueries("super-heroes");
    //     const previousQueryData = queryClient.getQueryData("super-heroes");
    //     queryClient.setQueryData("super-heroes", (oldQueryData) => {
    //       return {
    //         ...oldQueryData,
    //         data: [
    //           ...oldQueryData.data,
    //           { id: oldQueryData?.data?.length + 1, ...newHero },
    //         ],
    //       };
    //     });
    //     return {
    //       previousQueryData,
    //     };
    //   },
    //   onError: (_error, _hero, context) => {
    //     queryClient.setQueryData("super-heroes", context.previousQueryData);
    //   },
    //   onSettled: () => {
    //     queryClient.invalidateQueries("super-heroes");
    //   },
  });
};
