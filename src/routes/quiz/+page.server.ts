import { read } from "$lib/io";
export async function load({ depends }) {
    depends('quiz:all')
    // RETORUNE L'OBJET DISNEY EN EXPORT 
    const disney = await generateCharactersArray();
    console.log('load', disney);
    // LOAD VA RETOURNER UN OBJET QUI VA S'APPELER DATA
    return {
        disney
    };
}

async function generateCharactersArray() {
    const characters: string[] = [];
    await getCharacters(characters);
    shuffleArray(characters);
    return characters;
}

async function getCharacterName() {
    const data = await read('data.json');
    const randomNumber = getRandomNumber(1, 50)
    const character: unknown = data.find(element => element._id === randomNumber) ?? await getCharacterName();
    return character;
}

async function getCharacters(arr: string[]) {
    let done = false;
    while (!done) {
        let character = await getCharacterName();
        if (arr.some(element => element.name === character.name)) { continue }
        if (arr.length === 0) { character.valid = true }
        if (arr.length === 3) { done = true }
        arr.push(character)
    }
}


function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function shuffleArray(arr: string[]) {
    for (let i = arr.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}