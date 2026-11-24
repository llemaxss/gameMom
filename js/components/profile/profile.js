export class Profile {
    #name;
    #points;
    #currentLevel;

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getPoints() {
        return this.#points;
    }

    setPoints(points) {
        this.#points = points;
    }

    getCurrentLevel() {
        return this.#currentLevel;
    }

    setCurrentLevel(currentLevel) {
        this.#currentLevel = currentLevel;
    }
}