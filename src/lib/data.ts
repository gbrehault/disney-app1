import disney from '$lib/data.json';

export function getPersosFromDB() {
    return disney;
}

export function getPersoFromDB(id: number) {
    return disney[id - 1];
}
