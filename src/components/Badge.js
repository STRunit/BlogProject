const styles = {
  primary: "py-1 text-white px-3 rounded-md w-fit bg-[#4B6BFB] cursor-pointer",

  secondary:
    "py-1 text-[#4B6BFB] px-3 rounded-md w-fit bg-[#4B6BFB0D] cursor-pointer",
};

export const Badge = ({ badgeName, isPrimary = true }) => {
  return (
    <div className={isPrimary ? styles.primary : styles.secondary}>
      {badgeName}
    </div>
  );
};
