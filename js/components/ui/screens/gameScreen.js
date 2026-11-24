import { Screen } from "./screen.js";

export class GameScreen extends Screen {

    constructor() {
        super(`screen-game`);
    }

    /*
        @Override
    */
    init() {
        const $section = super.init();

        const $gameUI = document.createElement('div'),
            $gameCanvas = document.createElement('div');

        $section.setAttribute('id', this.getId());
        $section.classList.add('screen');
        $section.classList.add('hidden');

        $section.appendChild($gameUI);
        $section.appendChild($gameCanvas);
    }

    /*
        @Override
    */
    render() {

    }
}
