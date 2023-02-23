import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQSuperHeroPage = () => {
  const { heroId } = useParams();

  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  console.log(isLoading, isError, data, error);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h3>{error.message}</h3>
      </div>
    );
  }

  return (
    <div>
      {data.data.name} - {data.data.alterEgo}
    </div>
  );
};

export default RQSuperHeroPage;
