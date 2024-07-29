import { Author } from "../assets";

const styles = {
  container:
    "flex flex-col w-[392px] p-4 justify-between items-start gap-4 rounded-xl border-solid border-[#E8E8EA] border-[1px] bg-white",
  image:
    "w-[360px] h-[240px] rounded-md object-cover object-center cursor-pointer",
  badgeContainer: "flex gap-3 flex-wrap",
  title:
    "self-stretch text-[#181A2A] text-2xl font-semibold leading-7 cursor-pointer",
  date: "leading-6 text-[#97989F] text-sm",
  author: "flex items-center w-full gap-5 justify-between",
};

export const BlogThumbnail = ({
  imageSrc,
  badge,
  title,
  authorProfile,
  authorName,
  date,
  showAuthor = false,
  onClick,
}) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} className={styles.image} alt="" onClick={onClick} />

      <div className={styles.badgeContainer}>{badge}</div>

      <h2 className={styles.title} onClick={onClick}>
        {title}
      </h2>

      <div className={styles.author}>
        {showAuthor ? (
          <Author authorProfile={authorProfile} authorName={authorName} />
        ) : (
          <></>
        )}
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};
