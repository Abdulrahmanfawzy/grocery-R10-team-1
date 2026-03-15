import type { FAQInterface } from "@/types/profile/support/FAQTypes";
import { HelpCircle } from "lucide-react";

interface Props {
  instructions: FAQInterface;
}

const FAQS = ({ instructions }: Props) => {
  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-card-foreground" />
          <h2 className="font-semibold text-card-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {instructions.data.data.slice(0,5).map((inst) => (
            <div key={inst.id} className="bg-muted rounded-lg p-4">
              <p className="text-sm font-semibold text-primary">
                {inst.question}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {inst.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
