import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PasswordSchema,
  useUpdatePassword,
  type PasswordFormValues,
} from "@/lib/api/profile/security/use-updatePassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock } from "lucide-react";
import { useForm } from "react-hook-form";

const Password = () => {
  const { mutate, isPending } = useUpdatePassword();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(PasswordSchema),
  });

  function onSubmit(data: PasswordFormValues) {
    mutate(data);
  }
  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6 my-4">
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-2 mb-1">
            <Lock className="w-5 h-5 text-card-foreground" />
            <h2 className="font-semibold text-card-foreground">
              Change Password
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Enter a new password to replace the old password
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-md"
          >
            {/* Current Password */}
            <div>
              <label className="text-sm font-medium text-card-foreground block mb-1">
                Current Password
              </label>
              <Input
                type="password"
                placeholder="Enter Current Password"
                {...register("current_password")}
              />
              {errors.current_password && (
                <p className="text-xs text-destructive mt-1">
                  {errors.current_password.message}
                </p>
              )}
            </div>

            {/* New Password */}
            <div>
              <label className="text-sm font-medium text-card-foreground block mb-1">
                New Password
              </label>
              <Input
                type="password"
                placeholder="Enter New Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs text-destructive mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="text-sm font-medium text-card-foreground block mb-1">
                Confirm New Password
              </label>
              <Input
                type="password"
                placeholder="Confirm New Password"
                {...register("password_confirmation")}
              />
              {errors.password_confirmation && (
                <p className="text-xs text-destructive mt-1">
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full max-w-50 cursor-pointer"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 animate-spin" />
                  Updating
                </span>
              ) : (
                "Update Password"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
