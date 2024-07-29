import { Logo } from "../../assets";
import { NavbarItems, SocialLinks } from "../../constants";

const styles = {
  section: "w-full justify-center items-end py-[64px] bg-[#F6F6F7]",
  container: "flex flex-col gap-[25px] max-w-[1216px] m-auto",
  header: "self-start font-semibold text-xl text-black",
  info: "flex flex-col w-1/4 gap-6 leading-6",
  about: "flex flex-col gap-3 text-[#696A75]",
  contact: "text-[#696A75]",
  items: "flex flex-col gap-2 text-start",
  left: "flex gap-5 ",
  mid: "flex flex-col items-center w-2/4 text-[#696A75]",
  right: "flex w-1/4 gap-7",
  footer: "flex items-center justify-between py-5 border-t",
  policies: "flex gap-4 text-[#696A75]",
  divider: "h-6 pl-[2px] bg-gray-200",
};

export const FooterSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.about}>
              <h3 className={styles.header}>About</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className={styles.contact}>
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
          <div className={styles.mid}>
            <div className={styles.items}>
              {NavbarItems.map((item, index) => {
                return (
                  <a key={index} href={item.href}>
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.right}>
            {SocialLinks.map((link, index) => {
              return (
                <a href={link.href} key={index} target="blank">
                  {link.platform}
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.footer}>
          <Logo copyRightShow={true} />
          <div className={styles.policies}>
            <span>Terms Of Use</span>
            <span className={styles.divider}></span>
            <span>Privacy Policy</span>
            <span className={styles.divider}></span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
