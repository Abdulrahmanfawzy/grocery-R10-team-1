import FooterList from "./FooterList";
import FooterCopyrights from "./FooterCopyrights";
import FooterCompanyInfo from "./FooterCamponyInfo";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary-foreground py-8 border-t border-gray-200 text-gray-900  ">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto md:grid md:grid-cols-3  gap-16 space-y-12 px-10">
          <FooterCompanyInfo />
          <FooterList />
        </div>
      </div>
      <FooterCopyrights />
    </footer>
  );
};

export default Footer;
