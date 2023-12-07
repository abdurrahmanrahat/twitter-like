import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";

const usePosts = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
  console.log(search);
  console.log(limit);

  const fetchPosts = async () => {
    const res = await axios.get(
      `http://localhost:5000/posts?limit=${limit}&page=${page}&search=${search}`
    );
    return res.data;
  };

  const {
    data: posts,
    refetch,
    isLoading,
  } = useQuery(["posts", limit, page], fetchPosts);

  // Update the query key when limit or page changes
  useEffect(() => {
    refetch();
  }, [limit, page, refetch, search]);

  return [
    posts,
    refetch,
    handleSearch,
    searchRef,
    isLoading,
    page,
    setPage,
    limit,
  ];
};

export default usePosts;
