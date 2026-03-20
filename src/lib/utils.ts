import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppLink(phone: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
}

export const WHATSAPP_CONFIG = {
  number: "1234567890", // Placeholder for actual brand number
  defaultMessage: "Hello Zing Bliss Events, I would like to inquire about your luxury event services.",
};
