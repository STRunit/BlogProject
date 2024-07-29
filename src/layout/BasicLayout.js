import { NavbarSection, FooterSection } from "../components/sections";

export const BasicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-[1216px] m-auto flex flex-col gap-[100px] flex-grow">
        <NavbarSection />
        {children}
      </div>
      <FooterSection />
    </div>
  );
};
