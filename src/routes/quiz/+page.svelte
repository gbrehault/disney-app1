<script lang="ts">
	import { invalidate } from '$app/navigation';

	// OBJET SVELTE RENVOYER PAR LA FONCTION LOAD = PROPS
	let { data } = $props();

	// LA VARIABLE DANS LAQUELLE JE VAIS STOCKER L'OBJET
	let disney = $derived(data.disney);
	let guessedCharacterId: number | undefined = $state();
	let score = $state(0);

	function validate(id: number) {
		const checkedCharacter = disney.find((element) => element._id === id);
		const valid = checkedCharacter?.valid ? true : false;
		return valid;
	}

	function handle(id: number) {
		guessedCharacterId = id;
		setRefreshTimeout();
		const valid = validate(id);
		updateScore(valid);
		return valid;
	}

	function setRefreshTimeout() {
		console.log('Invalidation');
		const timeout = setTimeout(() => {
			invalidate('quiz:all');
			guessedCharacterId = undefined;
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}

	async function updateScore(valid) {
		if (valid) {
			score++;
		} else {
			score = 0;
		}

		// Envoi du score au serveur
		await fetch('/score.json', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ score })
		});
	}
</script>

<div class="section">
	<h1>Quiz</h1>
	<div class="point">Score : {score}</div>
	<!-- Affichage du score corrigé -->
	<div class="content">
		{#key disney}
			<div class="quiz">
				<img alt="" src={disney.find((element) => element.valid === true).imageUrl} />
				<div class="boutons">
					{#each disney as character}
						<button
							class:success={guessedCharacterId == character._id && validate(character._id)}
							class:failure={guessedCharacterId == character._id && !validate(character._id)}
							onclick={() => handle(character._id)}
							disabled={guessedCharacterId}
						>
							{character.name}
						</button>
					{/each}
				</div>
			</div>
		{/key}
	</div>
</div>

<style>
	.section {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	h1 {
		font-family: 'New Walt Disney Font', sans-serif;
		text-align: center;
		font-size: 5rem;
		margin: 0;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}
	.point {
		font-family: 'Montserrat', sans-serif;
		text-align: center;
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}
	img {
		width: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
		border-radius: 25px;
		margin-bottom: 1rem;
	}
	.quiz {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.content {
		width: 35rem;
		height: max-content;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button {
		height: 100%;
		width: 100%;
		display: grid;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-family: Montserrat, sans-serif;
		font-size: 0.8rem;
		color: rgb(255, 255, 255);
		border: 3px solid;
		background-color: rgb(1, 18, 41);
		border-color: rgb(1, 18, 41);
		border-radius: 50px;
		padding-right: 25px;
		padding-left: 25px;
		padding-top: 10px;
		padding-bottom: 10px;
		font-weight: 700;
		text-decoration: none;
		text-transform: uppercase;
		transition: all ease-out 0.5s;
	}
	button:hover {
		color: rgb(1, 18, 41);
		border-color: rgb(1, 18, 41);
		background-color: rgba(255, 255, 255, 0);
	}

	.boutons {
		gap: 1rem;
		width: 100%;
		display: grid;
		grid-auto-rows: minmax(0, 1fr);
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-bottom: 1rem;
	}
	.success,
	.success:hover {
		background: green;
		border-color: green;
	}
	.failure,
	.failure:hover {
		background: red;
		border-color: red;
	}
</style>
