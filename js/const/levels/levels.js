import * as RULES from  '../rules/rules.js';
import * as LEVEL_CONSTS from './levelConsts.js';

import { MECHANICS } from '../mechanics.js';
import { BOX_FORMS } from '../box/boxForms.js';
import { BOX_COLORS } from '../box/boxColors.js';
import { BOSS_DIALOGS } from '../bossDialogs.js';
import { MAIL_FORMS } from '../mail/mailForms.js';
import { MAIL_COLORS } from '../mail/mailColors.js';

export const LEVELS = [
    {
        id: LEVEL_CONSTS.LEVEL_DESC.DAY_1.id,
        title: LEVEL_CONSTS.LEVEL_DESC.DAY_1.title,
        errorCount: LEVEL_CONSTS.DEFAULT_ERROR_COUNT,
        pointsByOneMail: LEVEL_CONSTS.DEFAULT_POINTS_BY_ONE_VALID_MAIL,
        bossDialogs: BOSS_DIALOGS[LEVEL_CONSTS.LEVEL_DESC.DAY_1],
        mailsCount: 20,
        timer: {
            enabled: false,
            bonuses: null
        },
        mailData: [
            {
                colors: [
                    MAIL_COLORS.RED,
                    MAIL_COLORS.GREEN,
                    MAIL_COLORS.BLUE
                ],
                forms: [
                    MAIL_FORMS.RECTANGLE
                ]
            }
        ],
        boxData: [
            {
                colors: [
                    BOX_COLORS.RED,
                    BOX_COLORS.GREEN,
                    BOX_COLORS.BLUE
                ],
                forms: [
                    BOX_FORMS.SQUARE
                ]
            }
        ],
        mechanics: [
            MECHANICS.SORT_BY_COLOR
        ],
        rules: [
            RULES.DEFAULT_RULES
        ]
    },

    {
        id: LEVEL_CONSTS.LEVEL_DESC.DAY_2.id,
        title: LEVEL_CONSTS.LEVEL_DESC.DAY_2.title,
        errorCount: LEVEL_CONSTS.DEFAULT_ERROR_COUNT,
        pointsByOneMail: LEVEL_CONSTS.DEFAULT_POINTS_BY_ONE_VALID_MAIL,
        bossDialogs: BOSS_DIALOGS[LEVEL_CONSTS.LEVEL_DESC.DAY_2],
        mailsCount: 25,
        timer: {
            enabled: false,
            bonuses: null
        },
        mailData: [
            {
                colors: [
                    MAIL_COLORS.RED,
                    MAIL_COLORS.GREEN,
                    MAIL_COLORS.BLUE
                ],
                forms: [
                    MAIL_FORMS.SQUARE,
                    MAIL_FORMS.RECTANGLE,
                    MAIL_FORMS.CIRCLE,
                ]
            }
        ],
        boxData: [
            {
                colors: [
                    BOX_COLORS.RED,
                    BOX_COLORS.GREEN,
                    BOX_COLORS.BLUE
                ],
                forms: [
                    BOX_FORMS.SQUARE
                ]
            }
        ],
        mechanics: [
            MECHANICS.SORT_BY_COLOR
        ],
        rules: [
            RULES.DEFAULT_RULES
        ]
    }
];
