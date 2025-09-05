import type { Locale } from "./locales";
import type { DictSchema } from "./schema";

export type Dictionaries = DictSchema;

export async function getDictionary(locale: Locale): Promise<DictSchema> {
    switch (locale) {
        case "ru":
            return (await import("./dictionaries/ru")).default;
        case "en":
            return (await import("./dictionaries/en")).default;
        default:
            return (await import("./dictionaries/ru")).default;
    }
}
