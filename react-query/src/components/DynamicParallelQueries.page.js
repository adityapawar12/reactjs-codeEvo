import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperheroes = async (id) => {
  return await axios.get(`http://localhost:4000/superheroes/${id}`);
};

const DynamicParallelQueriesPage = ({ heroIds }) => {
  const qureyResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperheroes(id),
      };
    })
  );

  console.log(qureyResults);
  return <div>DynamicParallelQueriesPage</div>;
};

export default DynamicParallelQueriesPage;
