import { getPersoFromDB } from '$lib/data';

export function load({ params }) {
    return {
        disney: getPersoFromDB(parseInt(params.id))
    };
}
