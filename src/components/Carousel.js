const styles = {
  section: "min-h-[600px] flex flex-col gap-5 max-w-[1216px] m-auto rounded-xl",
  image:
    "relative w-[1216px] h-[600px] rounded-xl bg-cover bg-center flex items-end",
  overlay: "absolute w-full h-full rounded-xl bg-[#14162466]",
  content:
    "w-2/5 p-10 bg-[#E8E8EA] rounded-xl h-fit m-3 z-10 flex flex-col gap-1",
  title: `text-[36px] font-bold leading-[40px] text-[#181A2A] pt-4 pb-6`,
  date: `leading-6 text-[#97989F]`,
  badgeContainer: "flex gap-3 flex-wrap",
};

export const Carousel = ({ imageUrl, badge, title, date }) => {
  return (
    <div className={styles.section}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className={styles.badgeContainer}>{badge}</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};
