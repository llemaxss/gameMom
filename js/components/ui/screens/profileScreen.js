import { Screen } from "./screen.js";

const MAX_PROFILES = 3,
    STORAGE_KEY = 'mail_sorter_profiles';

export class ProfileScreen extends Screen {
    _profiles = [];
    _activeProfileIndex = null;

    constructor() {
        super(`screen-profile`);
    }

    /*
        @Override
    */
    init() {
        this._loadProfiles();

        this._initScreenSection();
    }

    /*
        @Override
    */
    render() {
        this._renderProfiles();
    }

    _renderProfiles() {
        this._rerenderEmptyProfileSlots();

        this._fillProfileSlots();

        this._initProfileEvents();
    }

    _loadProfiles() {
        try {
            const savedProfiles = localStorage.getItem(STORAGE_KEY);

            this._profiles = savedProfiles
                ? JSON.parse(savedProfiles)
                : [];
        } catch {
            this._profiles = [];
        }

        this._initNotLoadedProfiles();
    }

    _initNotLoadedProfiles() {
        if (this._profiles.length < MAX_PROFILES) {
            for (let i = 0; i < MAX_PROFILES; i++) {
                if (!this._profiles[i]) {
                    this._profiles[i] = null;
                }
            }

            this._saveProfiles();
        }
    }

    _createProfile(name, slotIndex) {
        this._profiles[slotIndex] = {
            id: `slot_${slotIndex}`,
            name,
            progress: {
                lastUnlockedLevelId: null,
                completedLevels: [],
                totalPoints: 0,
                bestResults: {}
            },
            createdAt: Date.now()
        };

        this._saveProfiles();
        this._renderProfiles();
    }

    _setActiveProfile(slotIndex) {
        this._activeProfileIndex = slotIndex;

        const profile = this._profiles[slotIndex],
            $mainMenuTitle = document.getElementById('main-menu-title');

        $mainMenuTitle.textContent = `Привет, ${profile.name}!`;
    }

    _saveProfiles() {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(
                this._profiles
            )
        );
    }

    _deleteProfile(slotIndex) {
        this._profiles[slotIndex] = null;

        this._saveProfiles();
        this._renderProfiles();
    }

    _initScreenSection() {
        const $section = super.init();

        const $sectionTitle = document.createElement('h1'),
            $profiles = document.createElement('div');

        $sectionTitle.textContent = 'Выбор профиля';

        $profiles.classList.add('profiles');

        $section.appendChild($sectionTitle);
        $section.appendChild($profiles);
    }

    _rerenderEmptyProfileSlots() {
        const $profiles = document.querySelector('.profiles');

        $profiles.innerHTML = null;

        for (let i = 0; i < MAX_PROFILES; i++) {
            const $profileSlot = document.createElement('div'),

                $profileEmpty = document.createElement('div'),
                $profileFilled = document.createElement('div'),

                $profileName = document.createElement('div'),
                $profileProgress = document.createElement('div'),

                $btnCreateProfile = document.createElement('button'),
                $btnContinue = document.createElement('button'),
                $btnLevels = document.createElement('button'),
                $btnDelete = document.createElement('button');

            $profileSlot.classList.add('profile-slot');
            $profileSlot.setAttribute('data-slot', i);

            $profileEmpty.classList.add('profile-empty');

            $profileFilled.classList.add('profile-filled');
            $profileFilled.classList.add('hidden');

            $profileName.classList.add('profile-name');
            $profileProgress.classList.add('profile-progress');

            $btnCreateProfile.classList.add('btn-create-profile');
            $btnCreateProfile.textContent = 'Создать профиль';

            $btnContinue.classList.add('btn-continue');
            $btnContinue.textContent = 'Продолжить';

            $btnLevels.classList.add('btn-levels');
            $btnLevels.textContent = 'Выбор уровня';

            $btnDelete.classList.add('btn-delete');
            $btnDelete.textContent = 'Удалить';

            $profileEmpty.appendChild($btnCreateProfile);

            $profileFilled.appendChild($profileName);
            $profileFilled.appendChild($profileProgress);
            $profileFilled.appendChild($btnContinue);
            $profileFilled.appendChild($btnLevels);
            $profileFilled.appendChild($btnDelete);

            $profileSlot.appendChild($profileEmpty);
            $profileSlot.appendChild($profileFilled);

            $profiles.appendChild($profileSlot);
        }
    }

    _fillProfileSlots() {
        document.querySelectorAll('.profile-slot')
            .forEach((slotEl, index) => {
                const profile = this._profiles[index],
                    emptyEl = slotEl.querySelector('.profile-empty'),
                    filledEl = slotEl.querySelector('.profile-filled');

                if (!profile) {
                    emptyEl.classList.remove('hidden');
                    filledEl.classList.add('hidden');
                } else {
                    emptyEl.classList.add('hidden');
                    filledEl.classList.remove('hidden');

                    filledEl.querySelector('.profile-name').textContent = profile.name;

                    filledEl.querySelector('.profile-progress').textContent =
                        `Пройдено уровней: ${profile.progress.completedLevels.length}`;
                }
            });
    }

    _initProfileEvents() {
        document.querySelectorAll('.profile-slot')
            .forEach((slotEl, index) => {
                slotEl.querySelector('.btn-create-profile')
                    ?.addEventListener('click', () => {
                        const name = prompt('Введите имя игрока:');

                        if (!name) {
                            return;
                        }

                        this._createProfile(name, index);
                    });

                slotEl.querySelector('.btn-continue')
                    ?.addEventListener('click', () => {
                        this._setActiveProfile(index);
                    });

                slotEl.querySelector('.btn-levels')
                    ?.addEventListener('click', () => {
                        this._setActiveProfile(index);
                    });

                slotEl.querySelector('.btn-delete')
                    ?.addEventListener('click', () => {
                        if (confirm('Удалить профиль?')) {
                            this._deleteProfile(index);
                        }
                    });
            });
    }
}
