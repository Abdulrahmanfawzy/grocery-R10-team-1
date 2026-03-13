import DeleteAccount from "@/components/profile/deleteAccount/DeleteAccount";
import Password from "@/components/profile/security/Password";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ShieldCheck } from "lucide-react";

const Security = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Security & Login</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage your account security and login settings
        </p>
      </div>

      {/*  Status */}
      <div className="bg-success/10 border border-success/30 rounded-lg p-4 flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-success" />
        <div>
          <p className="text-sm font-semibold text-success">
            Your Account is Secure
          </p>
          <p className="text-xs text-muted-foreground">
            All security features are enabled
          </p>
        </div>
      </div>

      {/*  Password */}
      <Password />

      {/* Delete Account  */}
      <div className="bg-destructive/5 border border-destructive/30 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <h2 className="font-semibold text-destructive">Danger Zone</h2>
        </div>
        <p className="text-sm text-destructive/70 mb-4">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <DeleteAccount />
      </div>
    </>
  );
};

export default Security;
