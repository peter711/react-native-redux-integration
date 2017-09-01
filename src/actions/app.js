export const INITIALIZING_APP = 'INITIALIZING_APP';
export const INITIALIZING_APP_DONE = 'INITIALIZING_APP_DONE';

export function initApp() {
    return {
        type: INITIALIZING_APP
    };
}

export function initAppDone() {
    return {
        type: INITIALIZING_APP_DONE
    }
}