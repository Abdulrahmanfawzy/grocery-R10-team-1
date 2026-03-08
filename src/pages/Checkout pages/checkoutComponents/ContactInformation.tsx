import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  register: any;
  formState: any;
};


function ContactInformation({ register, formState }: Props) {
  return (
    <>
      <div>
        <h2 className=" text-gray-800 font-sans text-lg mb-1">
          Contact Information
        </h2>
        <div className=" w-full p-6 bg-white border border-gray-300 rounded-md flex flex-col gap-3">
          <div className=" grid grid-cols-2 gap-2">
            <div>
              <label className="block mb-1 font-light">First Name</label>
              <Input
                aria-invalid={!!formState.errors.firstName}
                {...register("firstName")}
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {formState.errors.firstName?.message && (
                <p
                  id="specialNotes-error"
                  role="alert"
                  className="text-red-500 text-xs mt-1"
                >
                  {formState.errors.firstName?.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-light">Last Name</label>
              <Input
                aria-invalid={!!formState.errors.lastName}
                {...register("lastName")}
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {formState.errors.lastName?.message && (
                <p
                  id="specialNotes-error"
                  role="alert"
                  className="text-red-500 text-xs mt-1"
                >
                  {formState.errors.lastName?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-light">Phone</label>
            <Input
              aria-invalid={!!formState.errors.phone}
              {...register("phone")}
              type="tel"
              className="w-full border border-gray-300 p-2 rounded"
            />
            {formState.errors.phone?.message && (
                <p
                  id="specialNotes-error"
                  role="alert"
                  className="text-red-500 text-xs mt-1"
                >
                  {formState.errors.phone?.message}
                </p>
              )}
          </div>
          

          <div>
            <label className="block mb-1 font-light">Email</label>
            <Input
            aria-invalid={!!formState.errors.email}
              {...register("email")}
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
            />
            {formState.errors.email?.message && (
                <p
                  id="specialNotes-error"
                  role="alert"
                  className="text-red-500 text-xs mt-1"
                >
                  {formState.errors.email?.message}
                </p>
              )}

          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInformation;
