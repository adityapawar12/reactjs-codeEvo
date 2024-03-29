import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.data.map((color) => {
        return (
          <div>
            <h2 key={color.id}>
              {color.id} - {color.label}
            </h2>
          </div>
        );
      })}
      <div>
        <button
          type={`button`}
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((page) => page - 1)}
        >
          Prev
        </button>
        <button
          type={`button`}
          disabled={pageNumber === 4}
          onClick={() => setPageNumber((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedQueriesPage;
