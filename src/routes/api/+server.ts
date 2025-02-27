import { read } from "$lib/io";
import { json } from '@sveltejs/kit';

export async function GET() {
    return await read('data.json').then(json);
}