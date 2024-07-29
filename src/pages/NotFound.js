const styles = {
  container:
    "flex w-[642px] h-[208px] justify-center items-center gap-8 mb-[100px] m-auto",
  fourzerofour: "text-7xl leading-[72px] text-black",
  divider: "w-[1px] h-[156px] bg-[#E8E8EA]",
  sideContainer: "flex flex-col items-start justify-end gap-5 px-2",
  heading: "text-2xl font-semibold leading-10 text-black",
  text: "text-[#696A75] text-lg leading-[26px] w-[392px]",
  button:
    "flex py-[10px] px-4 justify-center items-center rounded-md bg-[#4B6BFB] text-white",
};

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <p className={styles.fourzerofour}>404</p>
      <span className={styles.divider}></span>
      <div className={styles.sideContainer}>
        <h3 className={styles.heading}>Page Not Found</h3>

        <p className={styles.text}>
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>

        <a href="/">
          <button className={styles.button}>Back To Home</button>
        </a>
      </div>
    </div>
  );
};
