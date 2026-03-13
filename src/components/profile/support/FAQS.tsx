import { Button } from "@/components/ui/button";
import { ChevronRight, HelpCircle } from "lucide-react";
const instructions = [
  {
    q: "How do I track my order?",
    a: "Go to Order History and click on any order to see real-time tracking.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 days for non-perishable items in original packaging.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Visit the Subscriptions page and click Cancel on any active subscription.",
  },
  {
    q: "Do you deliver on weekends?",
    a: "Yes! We deliver 7 days a week including holidays.",
  },
];

const FAQS = () => {
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
          {instructions.map((inst) => (
            <div key={inst.q} className="bg-muted rounded-lg p-4">
              <p className="text-sm font-semibold text-primary">{inst.q}</p>
              <p className="text-sm text-muted-foreground mt-1">{inst.a}</p>
            </div>
          ))}
        </div>
        <Button className="mt-4">
          View All FAQs <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default FAQS;
