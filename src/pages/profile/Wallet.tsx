import { Button } from "@/components/ui/button";
import { paymentHistory, paymentMethod } from "@/lib/constants/paymentsWallet/MockData";
import { Banknote, ChevronRight, Download, Plus, Smartphone, Wallet2 } from "lucide-react";


const Wallet = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Payment & Wallet</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage your payment methods and view transaction history
        </p>
      </div>

      {/* Store Credit */}
      <div className="bg-primary rounded-lg flex flex-col gap-3 p-6 mt-4 text-primary-foreground border-2 border-accent">
        <p className="text-3xl">Store Credit</p>
        <p className="text-sm font-bold mt-1 mb-0">£12.50</p>
        <p className="  mt-2">
          Available for your next purchase • Expires: Dec 31, 2025
        </p>
      </div>
      {/* Store Credit */}

      {/* Saved Cards & Other Payment Methods */}
      <div className="bg-card rounded-lg border border-border p-6 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold text-card-foreground mb-4">
              Saved Cards
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 border border-border rounded-lg p-3">
                <span className="text-xs font-bold bg-muted px-2 py-1 rounded">
                  VISA
                </span>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Visa •••• 4242
                  </p>
                  <p className="text-xs text-muted-foreground">Expires 12/25</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-2 border-primary rounded-lg p-3">
                <span className="text-xs font-bold bg-destructive/20 text-destructive px-2 py-1 rounded">
                  MC
                </span>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Mastercard •••• 8888
                  </p>
                  <p className="text-xs text-muted-foreground">Expires 08/26</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-card-foreground border border-dashed border-border rounded-lg p-3 w-full">
                <Plus className="w-4 h-4" /> Add New Card
              </button>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-card-foreground mb-4">
              Other Payment Methods
            </h2>
            <div className="space-y-3">
              {paymentMethod.map((method) => (
                <div
                  key={method.label}
                  className="flex items-center gap-3 border border-border rounded-lg p-3"
                >
                  <method.icon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      {method.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {method.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Saved Cards & Other Payment Methods */}

      {/* Payment History */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-4">
          Payment History
        </h2>
        <div className="space-y-3">
          {paymentHistory.map((tx) => (
            <div
              key={tx.order + tx.date}
              className="flex items-center justify-between border border-border rounded-lg p-3"
            >
              <div>
                <p className="text-sm font-medium text-card-foreground">
                  {tx.order}
                </p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-semibold ${tx.refund ? "text-primary" : "text-card-foreground"}`}
                >
                  {tx.amount}
                </p>
                <span className="text-xs text-success">Completed</span>
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-4">
          View All Transactions <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Receipt & Invoice */}
      <div className="bg-card rounded-lg border border-border p-6 mt-4">
        <h2 className="font-semibold text-card-foreground">
          Receipt & Invoice
        </h2>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          Download PDF receipts for your orders
        </p>
        <Button className="cursor-pointer">
          <Download className="w-4 h-4 mr-1" /> Download All Receipts
        </Button>
      </div>
      {/* Receipt & Invoice */}
    </div>
  );
};

export default Wallet;
