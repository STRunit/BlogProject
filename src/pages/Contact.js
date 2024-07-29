import { ContactInfo } from "../components";

const styles = {
  container: "flex flex-col w-[895px] h-[895px] m-auto items-center",
  contactUs:
    "flex w-[769px] h-[389px] pt-[14px] px-[10px] flex-col items-center gap-5 shrink-0",
  heading: "flex flex-col items-start gap-5",
  title: "text-[36px] font-bold leading-[40px] text-[#181A2A] pt-4 pb-6",
  text: "text-[#696A75] leading-6 w-[624px] h-[103px]",
  input: `flex pl-5 p-[14px] items-center gap-3 shrink-0 rounded-[5px] border-[1px] border-solid border-[#DCDDDF]`,
  contactInfo: "flex px-[10px] items-center gap-[50px]",

  formSection:
    "flex pt-[29px] pr-[130px] pb-[26px] pl-[35px] rounded-[10px] bg-[#F6F6F7]",
  formContainer: "flex flex-col items-start gap-6",
  formHeader: "text-lg font-semibold",
  inputContainer: "flex w-[478px] pb-5 justify-center items-center",
  form: "w-[478px] h-[317px] shrink-0 flex-col flex justify-between",
  personalInfo: "flex justify-between shrink-0",
  button:
    "inline-flex w-fit px-[10px] py-[16px] flex-col justify-center items-center rounded-md bg-[#4B6BFB] text-white",
};

export const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactUs}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>

        <div className={styles.contactInfo}>
          <ContactInfo
            header={"Address"}
            text={"1328 Oak Ridge Drive, Saint Louis, Missouri"}
          />
          <ContactInfo
            header={"Contact"}
            text={"313-332-8662 info@email.com"}
          />
        </div>
      </div>
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h4 className={styles.formHeader}>Leave a Message</h4>
          <div className={styles.inputContainer}>
            <form className={styles.form}>
              <div className={styles.personalInfo}>
                <input placeholder="Your Name" className={styles.input} />
                <input placeholder="Your Email" className={styles.input} />
              </div>
              <input placeholder="Subject" className={styles.input} />
              <textarea
                placeholder="Write a Message"
                className={`${styles.input} pb-10`}
              />

              <button className={styles.button}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
