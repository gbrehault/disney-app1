import { read } from "$lib/io";
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
    const charactersData = await read("data.json");
    const character = charactersData.find((element: unknown) => element._id === Number(params.id))
    return json(character);
}