import { readFile } from 'fs/promises';

export async function read(path: string) {
    const json = (await readFile(`data/${path}`)).toString();
    const data = JSON.parse(json);
    return data;
}