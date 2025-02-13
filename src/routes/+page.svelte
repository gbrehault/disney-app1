<script lang="ts">
	// OBJET SVELTE RENVOYER PAR LA FONCTION LOAD = PROPS
	let { data } = $props();

	// LA VARIABLE DANS LAQUELLE JE VAIS STOCKER L'OBJET
	let disney = data.disney;
	console.log(disney);
</script>

<header>
	<div>
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg"
			alt="logo_site"
		/>
	</div>
	<a href="/contact" class="contact">
		<button>Contact</button>
	</a>
</header>
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
<footer>
	<div>
		<p>Made in Gaboche</p>
	</div>
</footer>

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

	/* CSS FOOTER  */

	footer {
		padding: 0;
		margin: 0;
		height: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #221e1e;
		color: white;
		font-family: Montserrat, sans-serif;
		font-size: 1rem;
		font-weight: 300;
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
	/* CSS HEADER  */

	header {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
</style>
