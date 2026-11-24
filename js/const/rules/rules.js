import {
    MAGIC_TYPES,
    MAGIC_AFFECTS
} from '../magic.js';

import {
    BOX_COLORS,
    BOX_GREY_COLOR
} from '../box/boxColors.js';

import {
    MAIL_PROPS,
    BOX_PROPS,
    MAGIC_PROPS,
    LEVEL_PROPS,
    OPERAND_SOURCES,
    OPERAND_CONDITIONS,
    RULE_SCOPES
} from './ruleConsts.js';

import { STAMPS } from '../stamps.js';
import { MECHANICS } from "../mechanics.js";
import { BOX_FORMS } from '../box/boxForms.js';
import { MAIL_FORMS } from '../mail/mailForms.js';
import { MAIL_COLORS } from '../mail/mailColors.js';
import { MAIL_SENDERS_AND_RECEIVERS } from "../mail/mailSendersAndReceivers.js";

export const MAIL_COLOR_TO_BOX_COLOR = {
    id: 'MAIL_COLOR_TO_BOX_COLOR',
    scope: RULE_SCOPES.PUT_MAIL_IN_BOX,
    when: [
        {
            condition: OPERAND_CONDITIONS.IN,
            left: {
                source: OPERAND_SOURCES.MAIL,
                prop: MAIL_PROPS.COLOR
            },
            right: {
                source: OPERAND_SOURCES.LEVEL,
                prop: LEVEL_PROPS.BOX_COLORS
            }
        }
    ],
    then: [
        {
            condition: OPERAND_CONDITIONS.EQUALS,
            left: {
                source: OPERAND_SOURCES.MAIL,
                prop: MAIL_PROPS.COLOR
            },
            right: {
                source: OPERAND_SOURCES.BOX,
                prop: BOX_PROPS.COLOR
            },
        }
    ]
};

export const MAIL_COLOR_TO_BOX_COLOR_WITH_GREY_BOX = {
    id: 'MAIL_COLOR_TO_BOX_COLOR_WITH_GREY_BOX',
    scope: RULE_SCOPES.PUT_MAIL_IN_BOX,
    when: [
        {
            condition: OPERAND_CONDITIONS.NOT_IN,
            left: {
                source: OPERAND_SOURCES.MAIL,
                prop: MAIL_PROPS.COLOR
            },
            right: {
                source: OPERAND_SOURCES.LEVEL,
                prop: LEVEL_PROPS.BOX_COLORS
            }
        }
    ],
    then: [
        {
            condition: OPERAND_CONDITIONS.EQUALS,
            left: {
                source: OPERAND_SOURCES.BOX,
                prop: BOX_PROPS.COLOR
            },
            right: {
                source: OPERAND_SOURCES.CONST,
                prop: BOX_GREY_COLOR
            },
        }
    ]
};

export const MAIL_FORM_TO_BOX_FORM = {
    id: 'MAIL_FORM_TO_BOX_FORM',
    scope: RULE_SCOPES.PUT_MAIL_IN_BOX,
    when: [
        {
            condition: OPERAND_CONDITIONS.IN,
            left: {
                source: OPERAND_SOURCES.MAIL,
                prop: MAIL_PROPS.FORM
            },
            right: {
                source: OPERAND_SOURCES.LEVEL,
                prop: LEVEL_PROPS.BOX_FORMS
            }
        }
    ],
    then: [
        {
            condition: OPERAND_CONDITIONS.EQUALS,
            left: {
                source: OPERAND_SOURCES.MAIL,
                prop: MAIL_PROPS.FORM
            },
            right: {
                source: OPERAND_SOURCES.BOX,
                prop: BOX_PROPS.FORM
            }
        }
    ]
};

export const MAIL_FORM_TO_BOX_FORM_WITH_GREY_BOX = {
    id: 'MAIL_FORM_TO_BOX_FORM_WITH_GREY_BOX',
    scope: RULE_SCOPES.PUT_MAIL_IN_BOX,
    when: [
        {
            condition: OPERAND_CONDITIONS.NOT_IN,
            left: {
                source: OPERAND_SOURCES.MAIL,
                prop: MAIL_PROPS.FORM
            },
            right: {
                source: OPERAND_SOURCES.LEVEL,
                prop: LEVEL_PROPS.BOX_FORMS
            }
        }
    ],
    then: [
        {
            condition: OPERAND_CONDITIONS.EQUALS,
            left: {
                source: OPERAND_SOURCES.BOX,
                prop: BOX_PROPS.COLOR
            },
            right: {
                source: OPERAND_SOURCES.CONST,
                prop: BOX_GREY_COLOR
            }
        }
    ]
};

export const DEFAULT_RULES = [
    MAIL_COLOR_TO_BOX_COLOR,
    MAIL_COLOR_TO_BOX_COLOR_WITH_GREY_BOX
];
