const styles = {
  container:
    "flex w-[294px] h-[133px] p-4 flex-col items-start gap-[10px] rounded-xl border-[1px] border-solid border-[#E8E8EA]",
  heading: "text-2xl font-semibold leading-10 text-black",
  text: "text-[#696A75] leading-[26px] w-4/5",
};

export const ContactInfo = ({ header, text }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{header}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
