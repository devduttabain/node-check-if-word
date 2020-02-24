/**
 * @param language {string} two character abbreviation for language containing words for that language;
 * supports: de, en, es, fr
 * @returns {{check: (function(*=): boolean)}} a function that determines if the given word is a valid word in the
 * language
 */
module.exports = function words(language) {
    const possibleLanguages = ['de', 'en', 'es', 'fr'];

    language = language && language.toLowerCase() || 'en';
    if (possibleLanguages.indexOf(language) === -1) throw new Error(language + " is not valid language");
    const languageRegex = require(`./word-regexes/${language}-regex.js`);

    return {
        check: word => languageRegex.test(word),
        getValidWords: function (words) {
            if (Array.isArray(words)) {
                return words.filter(word => languageRegex.test(word));

            } else {
                var type = ((words == null) ? "Null" : ((words == undefined) ? "Undefined" : words.__proto__.constructor.name));
                throw new Error("argument 1 must be an array. given " + type + " .");
            }
            return false;
        },
    };
};
