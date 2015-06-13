var localize = require('localize');
var localizationData = {
    "AppSubTTL01": {
        "de": "Quick-Links",
        "en": "Quick Links",
        "es": "Vínculos rápidos",
        "fi": "Pikalinkit",
        "fr": "Liens rapides",
        "it": "Link rapidi",
        "ja": "クイックリンク",
        "ko": "빠른 링크",
        "nl": "Snelkoppelingen",
        "ptBR": "Links Rápidos",
        "pt": "Ligações rápidas",
        "ru": "Быстрые ссылки",
        "sv": "Snabblänkar",
        "tr": "Hızlı Bağl.",
        "zhCN": "快速链接",
        "zhHK": "快速連結",
        "zhTW": "快速連結"
    },
    "DeviceSubTTL01": {
        "de": "Benutzerhandb.",
        "en": "Manuals",
        "es": "Manuales",
        "fi": "Käsikirjat",
        "fr": "Manuels",
        "it": "Manuali",
        "ja": "取扱説明書",
        "ko": "사용 설명서",
        "nl": "Handleidingen",
        "ptBR": "Manuais",
        "pt": "Manuais",
        "ru": "Руководства",
        "sv": "Manualer",
        "tr": "Kılavuzlar",
        "zhCN": "说明书",
        "zhHK": "手冊",
        "zhTW": "手冊"
    },
    "DeviceSubTTL02": {
        "de": "Anleitung & FAQ",
        "en": "How to & FAQ",
        "es": "Instruccion./P+F",
        "fi": "Miten & UKK",
        "fr": "Utilisation/FAQ",
        "it": "Modo impiego&FAQ",
        "ja": "使いかた/Q&A",
        "ko": "방법 및 FAQ",
        "nl": "Instructies/FAQ",
        "ptBR": "Como Fazer e FAQ",
        "pt": "Explicação e FAQ",
        "ru": "Применение & FAQ",
        "sv": "Användning & FAQ",
        "tr": "Nasıl Yap. / SSS",
        "zhCN": "使用方法&常见问题",
        "zhHK": "使用方法&常見問題集",
        "zhTW": "使用方法&常見問題集"
    },
    "DeviceSubTTL03": {
        "de": "Support-Website",
        "en": "Support Website",
        "es": "Web asistencia",
        "fi": "Tukisivusto",
        "fr": "Site d'assist.",
        "it": "Sito supporto",
        "ja": "サポートサイト",
        "ko": "지원 웹사이트",
        "nl": "Onderst.website",
        "ptBR": "Site de Suporte",
        "pt": "Site de suporte",
        "ru": "Веб. поддержки",
        "sv": "Support webbsida",
        "tr": "Destek Sitesi",
        "zhCN": "支持网站",
        "zhHK": "支援網站",
        "zhTW": "支援網站"
    },
    "DeviceTTL01": {
        "de": "Geräte-Support",
        "en": "Device Support",
        "es": "Asist. disposit.",
        "fi": "Laitetuki",
        "fr": "Assist. appareil",
        "it": "Supporto dispos.",
        "ja": "機器サポート情報",
        "ko": "장치 지원",
        "nl": "Apparaatonderst.",
        "ptBR": "Suporte de Disp.",
        "pt": "Suporte ao disp.",
        "ru": "Поддержка устр.",
        "sv": "Enhetssupport",
        "tr": "Aygıt Desteği",
        "zhCN": "设备支持",
        "zhHK": "裝置支援",
        "zhTW": "裝置支援"
    },
    "DeviceTTL01_01": {
        "de": "Kein Gerät",
        "en": "No Device",
        "es": "Ningún disposit.",
        "fi": "Ei laitetta",
        "fr": "Aucun appareil",
        "it": "Nessun disposit.",
        "ja": "機器はありません",
        "ko": "어떤 장치도 없다",
        "nl": "Geen apparaat",
        "ptBR": "Sem Dispositivo",
        "pt": "Nenhum disposit.",
        "ru": "Устр. Отсутству.",
        "sv": "Ingen enhet",
        "tr": "Aygıt Yok",
        "zhCN": "没有设备",
        "zhHK": "沒有裝置",
        "zhTW": "沒有裝置"
    }
};

module.exports = {


    getLocalizationMap: function(lang, country){

        var languageCountry = new localize (localizationData, null, 'ids');
        languageCountry.throwOnMissingTranslation(false);
        languageCountry.setLocale(lang + country);

        var languageFallback = new localize (localizationData, null, 'ids');
        languageFallback.throwOnMissingTranslation(false);
        languageFallback.setLocale(lang );

        var englishFallback = new localize (localizationData, null, 'ids');
        englishFallback.throwOnMissingTranslation(false);
        englishFallback.setLocale( "en" );

        var localizationMap = {
            translate: function(key){

                var translation = languageCountry.translate.apply(this, arguments);
                if(translation === key)
                {
                    translation = languageFallback.translate.apply(this, arguments);
                    if(translation === key)
                    {
                        translation = englishFallback.translate.apply(this, arguments);
                    }
                }

                return translation;
            }
        };


        return localizationMap;
    }
};
