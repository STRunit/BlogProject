const styles = {
  container: "flex flex-col items-start self-stretch gap-4",
  heading: "text-2xl font-semibold leading-7 text-[#181A2A]",
  text: "text-xl leading-8 text-[#3B3C4A]",
};

export const Paragraph = ({ header, text }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{header}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
