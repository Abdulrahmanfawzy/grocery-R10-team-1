import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import Contact from "@/components/profile/support/Contact";
import FAQS from "@/components/profile/support/FAQS";
import Report from "@/components/profile/support/Report";
import { useGetContact } from "@/lib/api/profile/support/use-getContactInfo";
import { useGetFAQ } from "@/lib/api/profile/support/use-getFAQ";
import type { ContactInterface } from "@/types/profile/contact/ContactTypes";

const Support = () => {
  const { data, isError, isLoading } = useGetContact();
  const {data:instructions, isLoading:faqLoading, isError:faqError} = useGetFAQ()
  const contact: ContactInterface = data;

  if (isLoading || faqLoading) return <Loading />;
  if (isError || faqError) return <Error error={data.message} />;
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
        <p className="text-muted-foreground text-sm mt-1">
          We're here to help with any questions or issues
        </p>
      </div>
      {/* Contact */}
      <Contact contactInfo={contact} />
      {/* FAQ */}
      <FAQS instructions={instructions}/>
      {/* Report an Issue */}
      <Report />
    </>
  );
};

export default Support;
