import * as UI from "./components/ui/ui.js";
import * as LOGGER from "./logger.js";
import { AppContext } from "./appContext";
import { GameEngine } from "./gameEngine";

const DEFAULT_ACTIVE_SCREEN = UI.SCREENS.PROFILE;

init();

function init() {
    const appContext = AppContext.getInstance();

    const gameEngine = appContext.getBean(GameEngine);
    gameEngine.start();

    try {
        UI.initScreens();
        UI.showScreen(DEFAULT_ACTIVE_SCREEN);
    } catch (ex) {
        LOGGER.logError(ex.stack);
    }
}
