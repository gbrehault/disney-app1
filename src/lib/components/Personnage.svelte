<script lang="ts">
	type PersoProps = {
		name: string;
		_id: number;
		src?: string;
	};
	const { name, _id, src }: PersoProps = $props();
</script>

<div class="perso">
	<img {src} alt={name} />
	<h1>{name}</h1>
	<p></p>
	<p></p>
</div>

<style>
	.perso {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 15rem;
		margin: auto;
	}
	img {
		width: 15rem;
		height: 15rem;
		border-radius: 25px;
	}

	h1 {
		font-family: Montserrat, sans-serif;
		font-size: 2rem;
		font-weight: 500;
	}
</style>
