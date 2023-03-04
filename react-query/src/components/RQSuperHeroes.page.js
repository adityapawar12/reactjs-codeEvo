// import { useQuery } from "react-query";
// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useSuperHeroesData,
  useAddSuperHeroeData,
} from "../hooks/useSuperHeroesData";

// const fetchSuperheroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
//   // return axios.get("http://localhost:4000/superheroes1");
// };

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
  // const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
  //   "super-heroes",
  //   fetchSuperheroes,
  //   {
  //     enabled: false,
  //   }
  // );

  // const [fetchInterval, setFetchInterval] = useState(3000);

  // // SUCCESS CALLBACK FUNCTION
  // const onSuccess = (data) => {
  //   console.log("PERFORM SIDE EFFECT AFTER DATA FETCHING >>> ", data);
  //   if (data.data.length > 3) {
  //     setFetchInterval(false);
  //   }
  // };

  // // ERROR CALLBACK FUNCTION
  // const onError = (error) => {
  //   console.log("PERFORM SIDE EFFECT AFTER ENCOUNTERING ERROR >>> ", error);
  //   if (error) {
  //     setFetchInterval(false);
  //   }
  // };

  // // CALL USEQUERY ON A USER EVENT SUCH AS A CLICK(INSTEAD OF COMPONENT MOUNT OR WINDOW FOCUS)
  // const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
  //   "super-heroes",
  //   fetchSuperheroes,
  //   {
  //     refetchInterval: fetchInterval,
  //     onSuccess: onSuccess,
  //     onError: onError,
  //   }
  // );

  // DATA TRANSFORMATION
  // const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
  //   "super-heroes",
  //   fetchSuperheroes,
  //   {
  //     select: (data) => {
  //       const heroNames = data.data.map((hero) => hero.name);
  //       return heroNames;
  //     },
  //   }
  // );

  // CUSTOM QUERY HOOK

  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  // const [addLoaderText, setAddLoaderText] = useState("");
  // const [addErrorText, setAddErrorText] = useState("");

  const onSuccess = (data) => {
    console.log("PERFORM SIDE EFFECT AFTER DATA FETCHING >>> ", data);
  };

  const onError = (error) => {
    console.log("PERFORM SIDE EFFECT AFTER ENCOUNTERING ERROR >>> ", error);
  };

  const { isLoading, isFetching, data, isError, error, refetch } =
    useSuperHeroesData(onSuccess, onError, true);

  console.log(isLoading, isFetching);

  const {
    mutate,
    // isLoading: isAddLoading,
    // isError: isAddError,
    // error: addError,
  } = useAddSuperHeroeData();

  const handleAddHeroClick = (event) => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    mutate(hero);
  };

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>

      <form>
        <input
          type={`text`}
          name={`name`}
          placeholder={`Name`}
          id={`name`}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type={`text`}
          name={`alterEgo`}
          placeholder={`Alter Ego`}
          id={`alterEgo`}
          value={alterEgo}
          onChange={(event) => {
            setAlterEgo(event.target.value);
          }}
        />
        {/* {addLoaderText.length > 0 && <p>{addLoaderText}</p>}
        {addErrorText.length > 0 && <p>{addErrorText}</p>} */}
        <button type={`button`} onClick={(event) => handleAddHeroClick(event)}>
          Add Hero
        </button>
      </form>

      <button onClick={refetch}>Fetch Heroes</button>
      {/* 
      {data?.data.map((superHero) => {
        return <div key={superHero.name}>{superHero.name}</div>;
      })} */}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
      {data?.data.map((superHero) => {
        return (
          <div key={superHero.id}>
            <Link to={`/rq-super-heroes/${superHero.id}`}>
              {superHero.name}
            </Link>
          </div>
        );
      })}
    </>
  );
};
