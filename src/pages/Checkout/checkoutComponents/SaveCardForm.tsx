"use client";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { Button } from "@/components/ui/button";

export default function SaveCardForm({ email }: { email: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState<string | null>(null);

  const handleSaveCard = async () => {
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      
      const { data } = await axiosInstance.post(`/api/setup-intent`);
      const clientSecret = data.client_secret;

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) return;

      // 3️⃣ نعمل confirmCardSetup
      const { setupIntent, error } = await stripe.confirmCardSetup(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: { email },
        },
      });

      if (error) {
        console.error(error.message);
      } else {
        console.log("Saved PaymentMethod ID:", setupIntent.payment_method);
        setSaved(setupIntent.payment_method as string);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <CardElement className="p-2 border rounded" />
      <Button onClick={handleSaveCard} disabled={loading}>
        {loading ? "Saving..." : "Save Card"}
      </Button>

      {saved && <p className="text-green-600">Saved PaymentMethod ID: {saved}</p>}
    </div>
  );
}