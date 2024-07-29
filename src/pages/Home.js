import {
  TrendingSection,
  CarouselSection,
  BlogSection,
} from "../components/sections";
import { useState, useEffect } from "react";

import axios from "axios";

export const Home = () => {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`)
      .then((response) => {
        setArticles(response.data);
      });
  }, []);
  return (
    <>
      <CarouselSection articles={articles} />
      <TrendingSection articles={articles} />
      <BlogSection articles={articles} />
    </>
  );
};
