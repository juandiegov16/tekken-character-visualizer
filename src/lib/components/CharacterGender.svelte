<script>
	import { FemaleGender, Genderless, MaleGender, Androgyne } from '.';

	export let gender;
</script>

{#if gender == 'Male'}
	<MaleGender />
{:else if gender == 'Female'}
	<FemaleGender />
{:else if gender == 'Genderless'}
	<Genderless />
{:else if gender == 'Androgyne'}
	<Androgyne />
{/if}
