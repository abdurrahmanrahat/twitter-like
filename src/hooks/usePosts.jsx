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
  console.log("search", search);
  console.log(page);

  const fetchPosts = async () => {
    const res = await axios.get(
      `https://demo-twitter-server.vercel.app/posts?limit=${limit}&page=${page}&search=${search}`
    );
    return res.data;
  };

  const { data: posts, refetch, isLoading } = useQuery(["posts"], fetchPosts);

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
