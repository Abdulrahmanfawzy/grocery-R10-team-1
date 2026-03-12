import { Button } from "@/components/ui/button";
import {
  useUpdateProfile,
  type UpdateProfile,
} from "@/lib/api/profile/personalInfoApi/use-getProfile";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

const Language = () => {
  const { mutate, isPending } = useUpdateProfile();
  const { register, handleSubmit } = useForm();
  function onSubmit(data: UpdateProfile) {
    mutate(data);
  }
  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6 my-5">
        <h2 className="font-semibold text-card-foreground mb-3">Language</h2>
        <label className="text-sm text-muted-foreground mb-1 block">
          Preferred Language
        </label>
        <div className="relative">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <select
              {...register("preferred_languages")}
              id="language"
              name="language"
              className=" cursor-pointer  border border-border rounded-full px-6 py-2 text-sm text-card-foreground bg-transparent outline-none w-fit relative"
            >
              <option value="en-US">English (US)</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
            <Button className="block mt-5 cursor-pointer">
              {isPending ? <Loader2 className="w-4 animate-spin" /> : "Update"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Language;
