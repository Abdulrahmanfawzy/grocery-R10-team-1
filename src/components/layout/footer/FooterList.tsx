import FooterListColumn from "./FooterListColumn";

const FooterList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12  col-span-2">
      {/* TODO: each Item contain the Link & the name */}
      <FooterListColumn
        title="Support"
        items={["Contact Us", "FAQs", "Shipping & Returns"]}
      />
      <FooterListColumn
        title="Services"
        items={["Order Tracking", "contact Us ", "Sign Up"]}
      />
      <FooterListColumn
        title="Terms and Policies"
        items={[
          "About Us",
          "Terms of Use",
          "Privacy Policy",
          "Return Policy",
          "Cookie Policy",
        ]}
        className="col-span-2 sm:col-span-1"
      />
    </div>
  );
};

export default FooterList;
