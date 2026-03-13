import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createAddressSchema,
  useAddAddress,
  type CreateAddressFormValues,
} from "@/lib/api/profile/Addresses/use-addAdress";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

const CreateAddress = () => {
  const { mutate, isPending } = useAddAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAddressFormValues>({
    resolver: zodResolver(createAddressSchema),
    defaultValues: { full_name: "", phone: "", street_address: "", city: "" },
  });

  const onSubmit = (data: CreateAddressFormValues) => {
    mutate(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Add Address
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Create Address</DialogTitle>
            <DialogDescription>
              Add your address here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="full_name">Full Name</Label>
              <Input id="full_name" {...register("full_name")} />
              {errors.full_name && (
                <p className="text-xs text-destructive mt-1">
                  {errors.full_name.message}
                </p>
              )}
            </Field>

            <Field>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone")} />
              {errors.phone && (
                <p className="text-xs text-destructive mt-1">
                  {errors.phone.message}
                </p>
              )}
            </Field>

            <Field>
              <Label htmlFor="street_address">Street Address</Label>
              <Input id="street_address" {...register("street_address")} />
              {errors.street_address && (
                <p className="text-xs text-destructive mt-1">
                  {errors.street_address.message}
                </p>
              )}
            </Field>

            <Field>
              <Label htmlFor="city">City</Label>
              <Input id="city" {...register("city")} />
              {errors.city && (
                <p className="text-xs text-destructive mt-1">
                  {errors.city.message}
                </p>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button
                variant="outline"
                type="button"
                className="cursor-pointer"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer"
            >
              {isPending ? (
                <Loader2 className="w-4 animate-spin" />
              ) : (
                "Save changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAddress;
