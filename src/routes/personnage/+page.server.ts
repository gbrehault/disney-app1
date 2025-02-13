import { getPersosFromDB } from '$lib/data';

export function load() {
    return {
        disney: getPersosFromDB()
    };
}
