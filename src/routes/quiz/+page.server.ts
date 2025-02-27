import { read } from "$lib/io";
export function load() {
    // RETORUNE L'OBJET DISNEY EN EXPORT 

    // LOAD VA RETOURNER UN OBJET QUI VA S'APPELER DATA
    return {
        disney
    };
}

const persoTab = generateCharactersArray();

function generateCharactersArray() {
    const characters: string[] = [];
    getCharacters(characters);
    return [];
}

async function getCharacterName() {
    const data = await read('data.json');
    const character = data.find(element => data._id === Number(getRandomNumber(1, 50)));
    return character.name;
}

async function getCharacters(arr: string[]) {
    let done = false;
    while (!done) {
        let character = await getCharacterName();
        if (arr.includes(character)) { continue }
        if (arr.length === 4) { done = true }

        arr.push(character)
    }
}

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}