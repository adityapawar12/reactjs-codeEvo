import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  // SET THE AMOUNT OF TIME THE DATA WILL BE CACHED BY REACT QUERY(5 MINUTES BY DEFAULT)
  // const { isLoading, data, isError, error } = useQuery(
  //   "super-heroes",
  //   fetchSuperheroes,
  //   {
  //     cacheTime: 5000
  //   }
  // );

  // SET THE AMOUNT OF TIME THE DATA WILL REMAIN FRESH(0 MINUTES BY DEFAULT)
  // const { isLoading, data, isError, error } = useQuery(
  //   "super-heroes",
  //   fetchSuperheroes,
  //   {
  //     staleTime: 30000,
  //   }
  // );

  // SET IF THE DATA SHOULD BE REFETCHED ON COMPONENT MOUNT(TRUE BY DEFAULT)
  // const { isLoading, data, isError, error } = useQuery(
  //   "super-heroes",
  //   fetchSuperheroes,
  //   {
  // // REFETCH DATA ON COMPONENT MOUNT IF IT IS STALE
  //     refetchOnMount: true,
  // // DO NOT REFETCH DATA ON COMPONENT MOUNT
  //     // refetchOnMount: false,
  // // REFETCH DATA ON COMPONENT MOUNT INDEPENDENT OF IT IS STALE OR NOT
  //     // refetchOnMount: 'always',
  //   }
  // );

  // SET IF THE DATA SHOULD BE REFETCHED ON WINDOW FOCUS(TRUE BY DEFAULT)
  // const { isLoading, data, isError, error } = useQuery(
  //   "super-heroes",
  //   fetchSuperheroes,
  //   {
  // // REFETCH DATA WHEN WINDOW GAINS FOCUS IF IT IS STALE
  //     refetchOnWindowFocus: true,
  // // DO NOT REFETCH DATA WHEN WINDOW GAINS FOCUS
  //     // refetchOnWindowFocus: false,
  // // REFETCH DATA WHEN WINDOW GAINS FOCUS INDEPENDENT OF IT IS STALE OR NOT
  //    // refetchOnWindowFocus: 'always',
  //   }
  // );

  // POLL DATA(REFETCH DATA AFTER A INTERVAL OF TIME REPEATEDLY/AUTOMATICALLY)
  // const { isLoading, data, isError, error } = useQuery(
  //   "super-heroes",
  //   fetchSuperheroes,
  //   {
  // // INTERVAL OF TIME AFTER WHICH DATA SHOULD BE FETCHED.
  //     refetchInterval: 2000,
  // // REFETCH DATA EVEN IN THE BACKGROUND IF IT IS SET TO TRUE.
  //     // refetchIntervalInBackground: true,
  //   }
  // );

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  // CALL USEQUERY ON A USER EVENT SUCH AS A CLICK(INSTEAD OF COMPONENT MOUNT OR WINDOW FOCUS)
  const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
    "super-heroes",
    fetchSuperheroes,
    {
      enabled: false,
    }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>

      <button onClick={refetch}>Fetch Heroes</button>

      {data?.data.map((superHero) => {
        return <div key={superHero.name}>{superHero.name}</div>;
      })}
    </>
  );
};
