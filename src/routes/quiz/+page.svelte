<script lang="ts">
	// OBJET SVELTE RENVOYER PAR LA FONCTION LOAD = PROPS
	let { data } = $props();

	// LA VARIABLE DANS LAQUELLE JE VAIS STOCKER L'OBJET
	let disney = data.disney;

	function validate(id: number) {
		const checkedCharacter = disney.find((element) => element._id === id);
		const valid = checkedCharacter.valid ? true : false;
		console.log(valid);
	}
</script>

<h1>Quiz</h1>
<img src={disney.find((element) => element.valid === true).imageUrl} />
{#each disney as character}
	<button onclick={() => validate(character._id)}>{character.name}</button>
{/each}

<style>
	:global(body) {
		padding: 0;
		margin: 0; /* Facultatif si tu veux aussi enlever les marges */
		background-image: #11111158,
			url('src/img/n025579_2050dec31_world_disney-stars-on-parade-supporting-visuals_16-9_tcm808-182793$p~1$f~jpg.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	h1 {
		font-family: 'New Walt Disney Font', sans-serif;
		text-align: center;
		font-size: 5rem;
	}

	img {
		width: 30vh;
		height: 30vh;
	}
</style>
