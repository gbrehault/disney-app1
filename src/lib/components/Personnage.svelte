<script lang="ts">
	type PersoProps = {
		name: string;
		_id: number;
		films: string;
		production: string;
		src?: string;
	};
	const { name, _id, films, production, src }: PersoProps = $props();
</script>

<div class="containeur">
	<div class="perso">
		<div>
			<img {src} alt={name} />
		</div>
		<h1>{name}</h1>
		<p>
			{#each films as film}
				<br />{film}
				<br />
			{/each}
		</p>
		<p><br />{production}</p>
		<ul>
			<a href="/quiz">
				<button class="play">LANCER LE QUIZ 🧠</button>
			</a>
		</ul>
	</div>
</div>

<style>
	p {
		font-family: Montserrat, sans-serif;
		font-size: 1rem;
		font-weight: 400;
		text-align: center;
		margin: 0;
		padding: 0;
	}
	.containeur {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.perso {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 20rem;
		margin: 20px;
		padding: 20px;
		background-color: white;
		border-radius: 25px;
		align-content: center;
		flex-wrap: wrap;
		justify-content: center;
		flex-direction: column;
		box-shadow: 0 0 14px #11111127;
	}
	img {
		width: 20rem;
		height: 20rem;
		border-radius: 25px;
	}

	h1 {
		font-family: 'New Walt Disney Font', sans-serif;
		font-size: 3rem;
		font-weight: 700;
		padding: 5px;
		margin: 0;
	}
	a {
		text-decoration: none;
	}
	ul {
		padding-inline-start: 0;
	}
	.play {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-family: Montserrat, sans-serif;
		font-size: 18px;
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
</style>
