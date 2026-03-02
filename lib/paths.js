const BASE_PATH = window.location.origin

const ZISAM_PATHS = {
    database: {
        config: `${BASE_PATH}/database/config.json`,
        dynamic: `${BASE_PATH}/database/dynamic.json`,
        supported: `${BASE_PATH}/database/media/supported.json`,
        team: `${BASE_PATH}/database/team.json`
    },
    templates: {
        supported: `${BASE_PATH}/components/loop/supported-item.html`,
        team_index: `${BASE_PATH}/components/loop/team-index-item.html`,
        panitia_zisam: `${BASE_PATH}/components/loop/panitia-zisam-item.html`
    }
};

window.ZISAM_PATHS = ZISAM_PATHS;
