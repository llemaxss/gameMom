import { UI } from "./components/ui/ui2.js";
import { GameEngine } from "./gameEngine.js";
import { ProfileStorage } from "./components/profile/profileStorage";
import { ProfileService } from "./components/profile/profileService";

export class AppContext {
    static #instance = null;
    static #beans = null;

    static getInstance() {
        if (!this.#instance) {
            this.#init();

            this.#instance = new AppContext();
        }

        return this.#instance;
    }

    static #init() {
        this.#beans = new Map();

        this.#beans.put(UI, new UI());

        this.#beans.put(ProfileStorage, new ProfileStorage());
        this.#beans.put(ProfileService, new ProfileService());
        this.#beans.put(GameEngine, new GameEngine());
    }

    getBean(name) {
        return this.#beans.get(name);
    }
}
