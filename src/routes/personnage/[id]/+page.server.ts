
import { read } from "$lib/io";

export async function load({ params }) {
    // RETORUNE L'OBJET DISNEY EN EXPORT 
    const allDisneys = await read("data.json")
    const disney = allDisneys.find((element: unknown) => element._id === Number(params.id));
    // LOAD VA RETOURNER UN OBJET QUI VA S'APPELER DATA
    return {
        disney
    };
}
