import { Logo, Menu } from "../../assets";
import { Search } from "lucide-react";
import { NavbarItems } from "../../constants";

const styles = {
  container: "flex justify-between py-5 w-[1216px] mx-auto items-center",
  search:
    "flex gap-3 max-md:hidden items-center pl-4 p-2 rounded-[5px] bg-[#F4F4F5] justify-between",
  items: "flex gap-10 text-[#3B3C4A] max-md:hidden",
  input: "bg-transparent outline-none",
};

export const NavbarSection = () => {
  return (
    <div className={styles.container}>
      <Logo />

      <div className={styles.items}>
        {NavbarItems.map((item, index) => {
          return (
            <a key={index} href={item.href}>
              {item.name}
            </a>
          );
        })}
      </div>
      <div className={styles.search}>
        <input placeholder="Search..." className={styles.input} />
        <Search color="#52525B" size="16px" cursor="pointer" />
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};
