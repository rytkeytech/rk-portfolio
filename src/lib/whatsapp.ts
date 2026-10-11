import { site } from "./site";

// Builds a wa.me link that opens WhatsApp with a message already typed in.
// encodeURIComponent makes spaces and symbols safe to put inside a link.
export function whatsappLink(message: string = site.messages.general): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
