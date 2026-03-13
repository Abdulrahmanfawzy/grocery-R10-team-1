import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  supportSchema,
  useSendIssue,
  type SupportFormValues,
} from "@/lib/api/profile/support/use-sendIssue";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

const Report = () => {
  const { mutate, isPending } = useSendIssue();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupportFormValues>({
    resolver: zodResolver(supportSchema),
  });

  const onSubmit = async (data: SupportFormValues) => {
    mutate(data);
  };

  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6 mt-5">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-card-foreground" />
          <h2 className="font-semibold text-card-foreground">
            Report an Issue
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Name
            </label>
            <Input placeholder="Your name" {...register("name")} />
            {errors.name && (
              <p className="text-xs text-destructive mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Email
            </label>
            <Input placeholder="your@email.com" {...register("email")} />
            {errors.email && (
              <p className="text-xs text-destructive mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Issue Type
            </label>
            <Input placeholder="Delivery Issue" {...register("subject")} />
            {errors.subject && (
              <p className="text-xs text-destructive mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Description
            </label>
            <Textarea
              placeholder="Please describe your issue..."
              className="min-h-[100px] resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isPending} className="cursor-pointer">
            {isPending ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
                Sending
              </span>
            ) : (
              "Report"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Report;
