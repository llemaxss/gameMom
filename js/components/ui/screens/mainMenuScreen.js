import { Screen } from "./screen.js";

export class MainMenuScreen extends Screen {

    constructor() {
        super(`screen-main-menu`);
    }

    /*
        @Override
    */
    init() {
        const $section = super.init();

        const $sectionTitle = document.createElement('h1'),

            $btnContinueGame = document.createElement('button'),
            $btnOpenLevels = document.createElement('button'),
            $btnChangeProfile = document.createElement('button');

        $sectionTitle.classList.add('main-menu-title');
        $sectionTitle.textContent = 'Привет!';

        $btnContinueGame.classList.add('btn-continue-game');
        $btnContinueGame.textContent = 'Продолжить';

        $btnOpenLevels.classList.add('btn-open-levels');
        $btnOpenLevels.textContent = 'Выбор уровня';

        $btnChangeProfile.classList.add('btn-change-profile');
        $btnChangeProfile.textContent = 'Сменить профиль';

        $section.appendChild($sectionTitle);

        $section.appendChild($btnContinueGame);
        $section.appendChild($btnOpenLevels);
        $section.appendChild($btnChangeProfile);
    }

    /*
        @Override
    */
    render() {

    }
}
