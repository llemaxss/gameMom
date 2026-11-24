export class ProfileStorage {
    static #storageKey;

    #profiles;

    static {
        this.#storageKey = 'MAIL_SORTER_PROFILES';
    }

    getProfiles() {
        return localStorage.getItem(ProfileStorage.#storageKey);
    }

    setProfiles(profiles) {
        this.#profiles = profiles;

        localStorage.setItem(ProfileStorage.#storageKey, profiles);
    }
}