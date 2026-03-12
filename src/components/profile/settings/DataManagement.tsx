import { Trash2 } from "lucide-react";
import DeleteAccount from "../deleteAccount/DeleteAccount";

const DataManagement = () => {
  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-4">
          Data Management
        </h2>
        <div className="space-y-3">
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm font-medium text-card-foreground">
              Download Your Data
            </p>
            <p className="text-xs text-muted-foreground">
              Get a copy of your account information
            </p>
          </div>
          <div className="bg-destructive/10 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <DeleteAccount />
            </div>
            <p className="text-xs text-destructive/70 mt-5">
              Permanently delete your account and data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataManagement;
