export const steps = [
    '/language',
    '/gender',
    '/age',
    '/books',
    '/hobbies',
    '/loader',
    '/email',
    '/congratulations'
];

export const optionLanguages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'ge' },
    { label: 'Spanish', value: 'es' }
];

export const optionsGender = (t) => {
    return [
        { label: t('GenderFemale'), value: t('GenderFemale'), emoji: '👩' },
        { label: t('GenderMale'), value: t('GenderMale'), emoji: '👨' },
        { label: t('GenderOther'), value: t('GenderOther'), emoji: '😉' }
    ];
};

export const optionsHobbiesYoung = (t) => {
    return [
        { label: t('Werewolf'), value: t('Werewolf'), emoji: '🐺' },
        { label: t('Action'), value: t('Action'), emoji: '💃' },
        { label: t('RoyalObsession'), value: t('RoyalObsession'), emoji: '👑' },
        { label: t('Romance'), value: t('Romance'), emoji: '🥰' },
        { label: t('YoungAdult'), value: t('YoungAdult'), emoji: '💁‍♀️' },
        { label: t('BadBoy'), value: t('BadBoy'), emoji: '🤠' },
        { label: t('Billionaire'), value: t('Billionaire'), emoji: '🤑' }
    ];
};

export const optionsHobbiesMature = (t) => {
    return [
        { label: t('Werewolf'), value: t('Werewolf'), emoji: '🧟‍♀️' },
        { label: t('Action'), value: t('Action'), emoji: '🧛‍♂️' },
        { label: t('RoyalObsession'), value: t('RoyalObsession'), emoji: '🥷' },
        { label: t('Romance'), value: t('Romance'), emoji: '🦸‍♂️' },
        { label: t('YoungAdult'), value: t('YoungAdult'), emoji: '🤖' },
        { label: t('BadBoy'), value: t('BadBoy'), emoji: '👾' },
        { label: t('Billionaire'), value: t('Billionaire'), emoji: '👽' }
    ];
};

export const optionsHobbiesElderly = (t) => {
    return [
        { label: t('Werewolf'), value: t('Werewolf'), emoji: '🏋' },
        { label: t('Action'), value: t('Action'), emoji: '🧘‍♂️' },
        { label: t('RoyalObsession'), value: t('RoyalObsession'), emoji: '🚵‍♀️' },
        { label: t('Romance'), value: t('Romance'), emoji: '🚣‍♂️' },
        { label: t('YoungAdult'), value: t('YoungAdult'), emoji: '🏇' },
        { label: t('BadBoy'), value: t('BadBoy'), emoji: '🎮' },
        { label: t('Billionaire'), value: t('Billionaire'), emoji: '🎳' }
    ];
};

export const optionsHobbiesOld = (t) => {
    return [
        { label: t('Werewolf'), value: t('Werewolf'), emoji: '💀' },
        { label: t('Action'), value: t('Action'), emoji: '☠️' },
        { label: t('RoyalObsession'), value: t('RoyalObsession'), emoji: '👻' },
        { label: t('Romance'), value: t('Romance'), emoji: '🤯' },
        { label: t('YoungAdult'), value: t('YoungAdult'), emoji: '👨‍🦼' },
        { label: t('BadBoy'), value: t('BadBoy'), emoji: '🏌' },
        { label: t('Billionaire'), value: t('Billionaire'), emoji: '😴' }
    ];
};

export const optionsAge = (years) => {
    return [
        { label: `${'18-29 ' + years}`, value: `${'18-29 ' + years}` },
        { label: `${'30-39 ' + years}`, value: `${'30-39 ' + years}` },
        { label: `${'40-49 ' + years}`, value: `${'40-49 ' + years}` },
        { label: `50+`, value: `50+` }
    ];
};

export const optionsBooks = (t) => {
    return [
        {
            label: t('BoocksWithLackOflogic'),
            value: t('BoocksWithLackOflogic')
        },
        { label: t('BoocksWithASlowSpeed'), value: t('BoocksWithASlowSpeed') },
        {
            label: t('BoocksWithLackOfHumor'),
            value: t('BoocksWithLackOfHumor')
        },
        {
            label: t('BoocksWithGenericEnding'),
            value: t('BoocksWithGenericEnding')
        }
    ];
};
