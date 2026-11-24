export const MAGIC_AFFECTS = {
    COLOR: 'COLOR',
    FORM: 'FORM',
    SENDER_NAME: 'SENDER_NAME'
};

export const MAGIC_TYPES = {
    CHAMELEON: {
        id: 'CHAMELEON',
        label: 'Хамелеон',
        description: 'Скрывает настоящий цвет письма',
        affects: MAGIC_AFFECTS.COLOR
    },
    TRANSFORMER: {
        id: 'TRANSFORMER',
        label: 'Трансформер',
        description: 'Скрывает настоящую форму письма',
        affects: MAGIC_AFFECTS.FORM
    },
    MILK_INK: {
        id: 'MILK_INK',
        label: 'Молочные чернила',
        description: 'Скрывает настоящего отправителя письма',
        affects: MAGIC_AFFECTS.SENDER_NAME
    },
    LOVER: {
        id: 'LOVER',
        label: 'Приворот',
        description: '',
        affects: null
    }
};
