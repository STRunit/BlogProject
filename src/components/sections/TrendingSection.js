import { PostCard } from "../../components/PostCard";
import { Badge } from "../Badge";

const styles = {
  section: "m-auto w-fit w-full",
  header: "self-start mb-5 font-bold text-2xl",
  grid: "flex flex-wrap gap-5 m-auto justify-center",
};

export const TrendingSection = ({ articles, articleCount = 4 }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.header}>Trending</h2>
      <div className={styles.grid}>
        {articles.slice(0, articleCount).map((article, index) => {
          return (
            <PostCard
              key={index}
              image={article.social_image}
              title={article.title}
              badge={article.tag_list.map((tag, index) => {
                return <Badge badgeName={tag} key={index} isPrimary={true} />;
              })}
            />
          );
        })}
      </div>
    </div>
  );
};
