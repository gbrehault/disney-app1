
import { read } from "$lib/io";

export async function load() {
    // RETORUNE L'OBJET DISNEY EN EXPORT 
    const disney = await read("data.json")
    // LOAD VA RETOURNER UN OBJET QUI VA S'APPELER DATA
    return {
        disney
    };
}
