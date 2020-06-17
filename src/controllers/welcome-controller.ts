import { RequestHandler, Request } from 'express';
import template from '../data/out/template.json';

const availableLanguages = Object.keys(template);

type SupportedLanguage = 'EN' | 'IT';

const getCurrentLanguage = (req: Request) => {
    const userLangArray = req.acceptsLanguages();

    let lang: SupportedLanguage = 'EN';

    for (let i = 0; i < userLangArray.length; i++) {
        const currentUserLang = userLangArray[i];
        const foundLanguage = availableLanguages.find(availableLanguage => {
            const match = currentUserLang.toLowerCase().match(availableLanguage.toLowerCase());
            return match;
        })
        if (foundLanguage) {
            lang = foundLanguage as SupportedLanguage;
            break;
        }
    }

    return template[lang];
}

export const welcome: RequestHandler = async (req, res) => {
    const lang = getCurrentLanguage(req)
    res.json({ message: lang.WELCOME })
}