import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ProfileSchema,
  useUpdateProfile,
  type UpdateProfile,
} from "@/lib/api/profile/personalInfoApi/use-getProfile";
import { formFields } from "@/lib/constants/personalInfo/PersonalInfo";
import type { ProfileDataInterface } from "@/lib/types/Profile/Profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Edit, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
interface Props {
  profileData: ProfileDataInterface;
}

const ProfileDetails = ({ profileData }: Props) => {
  const { mutate, isPending } = useUpdateProfile();

  //   Form Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfile>({
    resolver: zodResolver(ProfileSchema),
    mode: "onChange",
    defaultValues: {
      firstname: profileData?.me?.firstname,
      lastname: profileData.me.lastname,
      email: profileData.me.email,
      phone: profileData.me.phone,
      preferred_languages: profileData.me.preferred_languages,
    },
  });

  function onSubmit(data: UpdateProfile) {
    mutate(data);
  }

  return (
    <form
      className="bg-card rounded-lg border border-border p-6 my-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-card-foreground">
          Basic Information
        </h2>

        <Button type="button" variant="outline" size="sm">
          <Edit />
          {isPending ? "Saving..." : "Edit"}
        </Button>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formFields.map((field) => (
          <div>
            <label
              id="firstName"
              className="text-sm text-muted-foreground mb-1 block"
            >
              {field.label}
            </label>

            <div className="flex items-center gap-2 border border-border px-3 py-2 rounded-lg">
              <field.icon className="w-4 h-4 text-muted-foreground" />
              <Input
                id="firstName"
                {...register(field.name)}
                required
                className="bg-transparent rounded-md capitalize outline-none text-sm w-full "
              />
            </div>

            {errors[field.name] && (
              <p className="text-red-500 text-xs">
                {errors[field.name]!.message}
              </p>
            )}
          </div>
        ))}

        {/* Language */}
        <div className="mt-6">
          <h2 className="font-semibold text-card-foreground mb-3">Language</h2>

          <div className="relative">
            <select
              {...register("preferred_languages")}
              className="appearance-none border border-border rounded-full px-6 py-2 text-sm bg-transparent"
            >
              <option value="en">English (US)</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>

            <div className="pointer-events-none absolute left-28 top-1/2 -translate-y-1/2">
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full rounded-full h-10 mt-8 cursor-pointer"
      >
        {isPending ? (
          <div className="flex items-center gap-3">
            <Loader className="spin-in w-8" /> Loading..
          </div>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default ProfileDetails;
