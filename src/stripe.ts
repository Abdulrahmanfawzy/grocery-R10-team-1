import { loadStripe } from "@stripe/stripe-js";

const key = "pk_test_51HkPEHKcWzfJufI6nEFaZxJI0QaTxwHJHPJDd5gQ6iU9s4ilbjUZ00ptc4tSge7ZNkGF8t1uzpTCooGTCP5UD60Y00wW2IYBeq";

export const stripePromise = loadStripe(key);
