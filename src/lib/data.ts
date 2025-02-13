import disney from '$lib/data.json';

export function getPersosFromDB() {
    return disney;
}

export function getPersoFromDB(id: number) {
    console.log(disney);
    const found = disney.find((element: any) => element._id === id);
    console.log(found);
    return found;
}
