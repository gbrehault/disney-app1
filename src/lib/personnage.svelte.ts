class Perso {
    ids: number[] = $state([]);
    catchqPerso = (id: number) => {
        if (!this.ids.includes(id)) {
            this.ids.push(id);
            fetch('api/data', { body: JSON.stringify({ id }), method: 'POST' })
        }
    };
}

export const perso = new Perso();