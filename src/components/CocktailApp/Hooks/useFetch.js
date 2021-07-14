// import { useEffect, useState } from "react";

import useSWR from "swr";
const fetcher = url => fetch(url).then(r => r.json());
function useFetch(url) {
  const { data, error } = useSWR(url, fetcher);

  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   const fetcher = async url => {
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setData(data);
  //     } catch (error) {
  //       setError(true);
  //     }
  //     setLoading(false);
  //   };
  //   fetcher(url);
  // }, [url]);

  return {
    data,
    loading: !error && !data,
    error: error
  };
}

export default useFetch;
