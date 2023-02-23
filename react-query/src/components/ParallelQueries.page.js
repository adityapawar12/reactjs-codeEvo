import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroes = async () => {
  return await axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = async () => {
  return await axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  //   const { data: superheroes } = useQuery("super-heroes", fetchSuperheroes);
  //   const { data: friends } = useQuery("friends", fetchFriends);

  const superheroes = useQuery("super-heroes", fetchSuperheroes);
  const friends = useQuery("friends", fetchFriends);

  console.log({ superheroes, friends });

  return <div>ParallelQueriesPage</div>;
};

export default ParallelQueriesPage;
