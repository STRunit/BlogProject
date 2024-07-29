const styles = {
  container:
    "w-[289px] h-[320px] rounded-xl flex items-end justify-center p-5 relative bg-[#14162466] text-white bg-cover bg-center",
  overlay: "absolute w-full h-full bg-[#14162466] top-0 left-0 rounded-xl",
  content: "w-[230px] h-[120px] flex flex-col gap-4 z-10",
  badgeContainer: "flex gap-3 w-full overflow-x-scroll no-scrollbar",
  textContainer: "h-[70px] overflow-y-scroll no-scrollbar",
};

export const PostCard = ({ image, title, badge }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.badgeContainer}>{badge}</div>
        <h3 className={styles.textContainer}>{title}</h3>
      </div>
    </div>
  );
};
