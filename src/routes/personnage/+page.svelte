<script lang="ts">
	import Personnage from '$lib/components/Personnage.svelte';
	import { perso } from '$lib/personnage.svelte.js';

	const { data } = $props();
	let disney = data.disney;
</script>

<!-- <h1>Personnages</h1> -->

<h1>WikiDisney</h1>

<div class="perso-galery">
	<ul>
		{#each disney as { _id, name, imageUrl }}
			<div class="perso">
				<a class="lien" href="/personnage/{_id}">
					<img src={imageUrl} alt={name} />
					<h5>{name}</h5>
				</a>
			</div>
		{/each}
	</ul>
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-block: 1rem;
		gap: 1rem;
	}
	img {
		width: 15rem;
		height: 15rem;
		border-radius: 25px;
	}
</style>
