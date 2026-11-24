import * as UI from "../ui.js";

export class Screen {
    _id;
    _$section;

    constructor(id) {
        this._id = id;
    }

    getId() {
        return this._id;
    }

    getSection() {
        return this._$section;
    }

    init() {
        const $app = document.getElementById(UI.APP_ID),
            $section = document.createElement('section');

        $section.setAttribute('id', this._id);
        $section.classList.add('screen');
        $section.classList.add('hidden');

        this._$section = $section;

        $app.appendChild($section);

        return $section;
    }

    render() {
    }
}