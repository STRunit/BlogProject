import { BlogSection } from "../components/sections";

import { useState, useEffect } from "react";

import axios from "axios";

export const Blog = () => {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`)
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  return (
    <BlogSection
      isShow={false}
      blogCount={12}
      showAuthor={true}
      articles={articles}
    />
  );
};
