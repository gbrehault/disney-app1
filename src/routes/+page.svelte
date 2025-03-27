<script lang="ts">
	// OBJET SVELTE RENVOYER PAR LA FONCTION LOAD = PROPS
	let { data } = $props();

	// LA VARIABLE DANS LAQUELLE JE VAIS STOCKER L'OBJET
	let disney = data.disney;
	console.log(disney);
</script>

<div class="containeur">
	<h1>DisneyQuiz</h1>

	<div class="perso-galery">
		<ul>
			<a href="/quiz">
				<button class="play">LANCER LE QUIZ 🧠</button>
			</a>
		</ul>
		<ul>
			<a href="/liste">
				<button class="play">ENTRAINE TOI 🧠</button>
			</a>
		</ul>
	</div>
</div>

<style>
	:global(html),
	:global(body) {
		padding: 0;
		margin: 0;
		background-color: rgb(161, 200, 246);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.containeur {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 60vh;
		height: 100vh;
	}
	h1 {
		margin-top: 50px;
		font-family: 'New Walt Disney Font', sans-serif;
		text-align: center;
		font-size: 4rem;
		color: rgb(1, 18, 41);
	}
	.play {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-family: Montserrat, sans-serif;
		font-size: 25px;
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
	.play:hover {
		color: rgb(1, 18, 41);
		border-color: rgb(1, 18, 41);
		background-color: rgba(255, 255, 255, 0);
	}
	ul {
		margin-top: 100px;
		padding: 0;
		display: block;
		justify-content: center;
		align-items: center;
	}
	a {
		text-decoration: none;
	}
	.perso-galery {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
</style>
