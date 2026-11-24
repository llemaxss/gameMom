import { ProfileScreen } from "./screens/profileScreen.js";
import { MainMenuScreen } from "./screens/mainMenuScreen.js";
import { LevelMapScreen } from "./screens/levelMapScreen.js";
import { GameScreen } from "./screens/gameScreen.js";

export const APP_ID = "app";

export const SCREENS = {
    PROFILE: new ProfileScreen(),
    MAIN_MENU: new MainMenuScreen(),
    LEVEL_MAP: new LevelMapScreen(),
    GAME: new GameScreen()
};

export function initScreens() {
    Object.values(SCREENS)
        .forEach(screenData => {
            screenData.init();
        });
}

export function showScreen(screen) {
    hideScreens();

    const $section = screen.getSection();

    screen.render();

    $section.classList.add('active');
    $section.classList.remove('hidden');
}

function hideScreens() {
    Object.values(SCREENS)
        .forEach(screenData => {
            const $section = screenData.getSection();

            $section.classList.add('hidden');
            $section.classList.remove('active');
        });
}