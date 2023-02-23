import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesDopplegangersPage = () => {
  // CUSTOM QUERY HOOK
  const onSuccess = (data) => {
    console.log("PERFORM SIDE EFFECT AFTER DATA FETCHING >>> ", data);
  };

  const onError = (error) => {
    console.log("PERFORM SIDE EFFECT AFTER ENCOUNTERING ERROR >>> ", error);
  };

  const { isLoading, isFetching, data, isError, error, refetch } =
    useSuperHeroesData(onSuccess, onError, false);

  console.log(isLoading, isFetching);

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
      {/* {data &&
        data.map((heroName) => {
          return <div key={heroName}>{heroName}</div>;
        })} */}
      {/* {data?.data.map((superHero) => {
        return <div key={superHero.name}>{superHero.name}</div>;
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
