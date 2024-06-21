import { Locale, i18n } from "@/i18n.config";

export async function getMessageForRateLimited(
  locale: Locale,
): Promise<string> {
  // TODO: load messages from a JSON file
  // const locale = request.headers.get("accept-language") || "en";
  const messages: { [key: string]: string } = {
    en: `Your access is restricted due to rate limiting. wait 5 seconds and try again`,
    ar: `تم منع وصولك للموقع بشكل مؤقت (10 ثواني) بسبب تجاوز الحد المسموح به.`,
  };
  return messages[locale] || messages[i18n.defaultLocale]; // Default to English if translation not available
}
