<script lang="ts">
	// OBJET SVELTE RENVOYER PAR LA FONCTION LOAD = PROPS
	let { data } = $props();

	// LA VARIABLE DANS LAQUELLE JE VAIS STOCKER L'OBJET
	let disney = data.disney;
	console.log(disney);
</script>

<h1>Quiz</h1>

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

	h5 {
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
	}
	a {
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
		text-decoration: none;
		color: black;
		text-align: center;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-block: 1rem;
		gap: 2.5rem;
		padding: 0;
	}
	img {
		width: 15rem;
		height: 15rem;
		border-radius: 25px;
	}

	/* CSS PERSO IMG ET TEXTE */

	.perso {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-shadow: 2px 2px 5px #11111141;
		border-radius: 25px;
	}
</style>
