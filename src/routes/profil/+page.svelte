<script lang="ts">
	import { fromStore } from 'svelte/store';

	let { form } = $props();
</script>

<h1>Profil</h1>
{#if form?.message}
	<p>{form.message}</p>
{/if}
{#if form?.success}
	<p>Génial, tu es bien connecté !</p>
{/if}

<h2>Inscription</h2>

<form action="?/register" method="POST">
	<label class:error={form?.field === 'name'}>
		Name
		<input type="text" name="name" value={form?.name} />
	</label>
	<label class:error={form?.field === 'password'}>
		Password
		<input type="password" name="password" />
	</label>
	<label class:error={form?.field === 'confirmPassword'}>
		Confirm password
		<input type="password" name="confirmPassword" />
	</label>
	<button>S'inscrire</button>
</form>

<h2>Connexion</h2>

<form action="?/login" method="POST">
	<label class:error={form?.field === 'name'}>
		Name
		<input type="text" name="name" value={form?.name} />
	</label>
	<label class:error={form?.field === 'password'}>
		Password
		<input type="password" name="password" />
	</label>
	<button>Se connecter</button>
</form>

<style>
	.error {
		color: red;
	}

	h2 {
		margin-top: 50px;
		font-family: 'New Walt Disney Font', sans-serif;
		text-align: center;
		color: rgb(1, 18, 41);
	}

	h1 {
		margin-top: 50px;
		font-family: 'New Walt Disney Font', sans-serif;
		text-align: center;
		font-size: 4rem;
		color: rgb(1, 18, 41);
		margin-top: 10rem;
	}
</style>
