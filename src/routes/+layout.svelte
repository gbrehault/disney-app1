<script>
	const { children, data } = $props();
</script>

<header>
	<div class="conteneur">
		<div>
			<a href="/">
				<img class="logo" src="src/img/LOGO-DISNEYQUIZ_3.png" alt="logo_site" />
			</a>
		</div>
		<div class="menu">
			<a href="/quiz" class="m">
				<p>Le quiz</p>
			</a>
			<a href="/liste" class="m">
				<p>Liste des personnages</p>
			</a>
			<!-- <a href="/profil" class="m">
				<p>Profil</p>
			</a> -->
			<div class="point"></div>
		</div>
		<a href="/quiz" class="quiz">
			<button>Lancer le quiz</button>
		</a>
	</div>
</header>

<main>
	{@render children()}
</main>

<footer>
	<div class="pied">
		<img class="logo-pied" src="src/img/LOGO-DISNEYQUIZ_3.png" alt="logo_site" />
		<p>Made in Gaboche</p>
	</div>
</footer>

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
	.menu {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 0;
	}
	.m {
		font-size: 16px;
		color: white;
		font-family: Montserrat, sans-serif;
		text-decoration: none;
		text-transform: uppercase;
	}
	/* CSS HEADER  */

	header {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 20px;
		position: sticky;
		top: 20px;
		margin-top: -5rem;
	}

	/* CSS FOOTER  */

	footer {
		position: relative;
		padding: 0;
		margin: 0;
		height: 8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(1, 18, 41); /* Couleur de fond */
		color: white;
		font-family: Montserrat, sans-serif;
		font-size: 1rem;
		font-weight: 300;
		overflow: hidden; /* Empêche le pseudo-élément de dépasser */
	}

	footer::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('src/img/icon-disney.png');
		background-repeat: no-repeat;
		background-position: left;
		background-size: contain;
		opacity: 0.3; /* Réduit l'opacité de l'image */
		z-index: 0;
	}

	footer * {
		position: relative;
		z-index: 1; /* Assure que le texte reste visible au-dessus de l'image */
	}
	.pied {
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.logo {
		width: 70px;
	}
	.logo-pied {
		width: 100px;
		bottom: -10px;
	}
	.conteneur {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: rgb(1, 18, 41);
		width: 80%;
		height: 4rem;
		padding-right: 40px;
		padding-left: 40px;
		padding-top: 10px;
		padding-bottom: 10px;
		border-radius: 100px;
	}
	button {
		text-align: center;
		font-family: Montserrat, sans-serif;
		font-size: 14px;
		color: rgb(1, 18, 41);
		border: 1px solid;
		border-color: white;
		border-radius: 50px;
		padding-right: 25px;
		padding-left: 25px;
		padding-top: 10px;
		padding-bottom: 10px;
		font-weight: 700;
		text-transform: uppercase;
		transition: all ease-out 0.5s;
	}
	button:hover {
		text-align: center;
		font-family: Montserrat, sans-serif;
		font-size: 14px;
		color: rgb(255, 255, 255);
		border: 1px solid;
		border-color: rgb(255, 255, 255);
		background-color: rgba(255, 255, 255, 0);
		border-radius: 50px;
		padding-right: 25px;
		padding-left: 25px;
		padding-top: 10px;
		padding-bottom: 10px;
		font-weight: 700;
	}
	.arrow {
		color: red; /* Change la couleur ici */
		width: 50px;
		height: 50px;
	}
</style>
