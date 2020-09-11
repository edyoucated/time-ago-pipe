export type SupportedLanguage = 'de' | 'en';

export class Translate {

    private translations: Object = {};

    constructor() {
        this.translations['en'] = {
            'a few seconds ago': 'a few seconds ago',
            'seconds ago': (p) => `${p.seconds} seconds ago`,
            'a minute ago': 'a minute ago',
            'minutes ago': (p) => `${p.minutes} minutes ago`,
            'an hour ago': 'an hour ago',
            'hours ago': (p) => `${p.hours} hours ago`,
            'a day ago': 'a day ago',
            'days ago': (p) => `${p.days} days ago`,
            'a month ago': 'a month ago',
            'months ago': (p) => `${p.months} months ago`,
            'a year ago': 'a year ago',
            'years ago': (p) => `${p.years} years ago`
        };

        this.translations['de'] = {
            'a few seconds ago': 'vor wenigen Sekunden',
            'seconds ago': (p) => `vor ${p.seconds} Sekunden`,
            'a minute ago': 'vor einer Minute',
            'minutes ago': (p) => `vor ${p.minutes} Minuten`,
            'an hour ago': 'vor einer Stunde',
            'hours ago': (p) => `vor ${p.hours} Stunden`,
            'a day ago': 'vor einem Tag',
            'days ago': (p) => `vor ${p.days} Tag`,
            'a month ago': 'vor einem Monat',
            'months ago': (p) => `vor ${p.months} Monaten`,
            'a year ago': 'vor einem Jahr',
            'years ago': (p) => `vor ${p.years} Jahren`
        };
    }

    translate(locale: string, messageKey: string, parameters?: Object): string {

        const translationsInLocale = this.translations[locale];

        if (translationsInLocale) {
            const translation = translationsInLocale[messageKey];

            if (translation) {
                if (typeof translation == 'function') {
                    return translation(parameters);
                }
                return translation;
            }
        }

        return messageKey;
    }

}
