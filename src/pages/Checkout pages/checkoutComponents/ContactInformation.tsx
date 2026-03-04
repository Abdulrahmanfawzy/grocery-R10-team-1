import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { SubmitHandler } from "react-hook-form";
const contactSchema = z.object({
  firstName: z.string().min(1, "First Name is required"), 
  lastName: z.string().min(1, "Last Name is required"), 
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^[0-9]+$/, "Enter a valid phone number"), 
  email: z.string().email("Enter a valid email"), 
});

type ContactFormType = z.infer<typeof contactSchema>;

function ContactInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted!");
  };

  return (
    <>
      <div >
        <h2 className=" text-xl font-medium mb-2 text-gray-700">
          Contact Information
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full p-6 bg-white border border-gray-300 rounded-md flex flex-col gap-3"
        >
          <div className=" grid grid-cols-2 gap-2">
            <div>
              <label className="block mb-1 font-light">First Name</label>
              <input
                type="text"
                {...register("firstName")}
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-light">Last Name</label>
              <input
                type="text"
                {...register("lastName")}
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-light">Phone</label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-light">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactInformation;
