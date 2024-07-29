import { Author } from "../assets";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const styles = {
  container: "flex w-[800px] flex-col items-center gap-8 mb-[80px] m-auto",
  info: "flex flex-col items-start self-stretch gap-5",
  heading: "text-4xl font-semibold leading-10 text-[#181A2A]",
  author: "flex items-center gap-6",
  date: "text-[#696A75]",
  cover: "h-[462px] self-stretch rounded-xl",
};

export const BlogDetail = () => {
  const { id } = useParams();
  let [article, setArticle] = useState({
    user: {},
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles/${id}`)
      .then((response) => {
        setArticle(response.data);
      });
  }, [id]);

  const markup = { __html: article?.body_html };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.heading}>{article?.title}</h1>
        <div className={styles.author}>
          <Author
            authorProfile={article?.user.profile_image}
            authorName={article?.user.username}
          />
          <p className={styles.date}>{article?.published_at}</p>
        </div>
      </div>
      <img src={article?.social_image} alt="" className={styles.cover} />
      <div dangerouslySetInnerHTML={markup} />
    </div>
  );
};
