import { Categories } from "../../constants/BlogDatas";
import { BlogThumbnail } from "../../components/BlogThumbnail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../Badge";

const styles = {
  section: "flex flex-col items-center gap-8 w-full m-auto",
  header: "self-start mb-5 font-bold text-2xl",
  headerContent: "flex justify-between w-full text-sm font-bold",
  headerLeft: "flex gap-5 overflow-x-scroll w-3/4 no-scrollbar",
  grid: "grid md:grid-cols-2 w-fit gap-5 max-md:grid-cols-1 lg:grid-cols-3",
  button:
    "py-3 px-5 flex justify-center items-center rounded-md border-[1px] bg-[rgba(105, 106, 117, 0.30)] text-[#696A75] my-[100px] hover:bg-[#696A75] hover:text-white duration-300",
};

export const BlogSection = ({
  isShow = true,
  blogCount = 9,
  showAuthor,
  articles,
}) => {
  let [loadMore, setLoadMore] = useState([]);

  const [changeColor, setChangeColor] = useState(0);

  const navigate = useNavigate();

  const LoadButton = () => {
    if (articles.length >= loadMore * 5) {
      setLoadMore(++loadMore);
    } else {
      setLoadMore(loadMore - 7);
    }
  };

  const handleClickCategory = (color) => {
    setChangeColor(color);
  };

  const handleClickPost = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.header}>All Blog Post</h2>
      {isShow ? (
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            {Categories.map((category, i) => {
              return (
                <button
                  onClick={() => handleClickCategory(i)}
                  className={i === changeColor ? "text-[#D4A373]" : ""}
                  key={i}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <a href="/Blog">View All</a>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.grid}>
        {articles.slice(0, blogCount + loadMore * 3).map((article, index) => {
          return (
            <BlogThumbnail
              imageSrc={article.social_image}
              badge={article.tag_list.map((tag, index) => {
                return <Badge badgeName={tag} key={index} isPrimary={false} />;
              })}
              title={article.title}
              date={article.published_at}
              authorName={article.user.username}
              authorProfile={article.user.profile_image}
              key={index}
              showAuthor={showAuthor}
              articles={articles}
              onClick={() => handleClickPost(article.id)}
            />
          );
        })}
      </div>
      <button className={styles.button} onClick={LoadButton}>
        {articles.length < loadMore * 5 ? "See Less" : "Load More"}
      </button>
    </div>
  );
};
