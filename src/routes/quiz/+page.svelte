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
</style>
