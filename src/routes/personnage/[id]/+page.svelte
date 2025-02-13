<script lang="ts">
	import Personnage from '$lib/components/Personnage.svelte';
	import { perso } from '$lib/personnage.svelte.js';
	const { data } = $props();
	console.log(data);
	const { name, _id, imageUrl } = $derived(data.disney);
	const found = $derived(perso.ids.includes(_id));
</script>

<Personnage {name} {_id} src={imageUrl} />
