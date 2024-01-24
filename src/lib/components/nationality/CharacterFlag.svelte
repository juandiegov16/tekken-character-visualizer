<script>
	import UnknownFlag from "./UnknownFlag.svelte";
	
	 export let nationality;
</script>

<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/css/tabler-flags.min.css"
/>

{#if nationality == "none"}
	<UnknownFlag/>
{:else}
	<span class="flag flag-sm flag-country-{nationality}" />
{/if}
