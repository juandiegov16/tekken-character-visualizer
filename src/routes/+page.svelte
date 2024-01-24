<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { CardWrapper, CharacterCard, CharacterFlag, CharacterGender } from '$lib/components/index.js';

	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';

	export let data;

	$: characterNationalities = [...new Set(data.characters.map((char) => char.nationality).flat())];
	$: characterSpecies = [...new Set(data.characters.map((char) => char.species).flat())];
	$: characterGenders = [...new Set(data.characters.map((char) => char.gender).flat())];
	let filters = new Map();

	$: filtered = data.characters.filter((char) => {
		return (
			char.nationality.includes(selectedNationality) &&
			char.species.includes(selectedSpecies) &&
			char.gender.includes(selectedGender)
		);
	});

	$: selectedNationality = $page.url.searchParams.get('nationality') || '';
	$: selectedSpecies = $page.url.searchParams.get('species') || '';
	$: selectedGender = $page.url.searchParams.get('gender') || '';

	const updateSearchParams = (key, value) => {
		const searchParams = new URLSearchParams($page.url.searchParams);
		searchParams.set(key, value);
		goto(`?${searchParams.toString()}`);
	};
</script>

<div class="flex min-h-screen min-w-full flex-col items-center justify-center">
	<h1>Tekken Character Visualizer, by Juandi</h1>
	<Separator class="my-4" />

	<div class="grid grid-cols-1 gap-2">
		<div>
			<Label for="nationalities">Nationality Filter</Label>
			<ToggleGroup.Root variant="outline" type="single" id="nationalities">
				<ToggleGroup.Item value="All">
					<button
						class="nationality active"
						class:active={selectedNationality == ''}
						on:click={() => updateSearchParams('nationality', '')}>All</button
					>
				</ToggleGroup.Item>
				{#each characterNationalities as nationality}
					<ToggleGroup.Item value={nationality}>
						<button
							class="nationality"
							class:active={selectedNationality == nationality}
							on:click={() => updateSearchParams('nationality', nationality)}
							><CharacterFlag {nationality} /></button
						>
					</ToggleGroup.Item>
				{/each}
			</ToggleGroup.Root>
		</div>
		<div>
			<Label for="Species">Species Filter</Label>
			<ToggleGroup.Root variant="outline" type="single" id="species">
				<ToggleGroup.Item value="All">
					<button
						class="species active"
						class:active={selectedSpecies == ''}
						on:click={() => updateSearchParams('species', '')}>All</button
					>
				</ToggleGroup.Item>
				{#each characterSpecies as species}
					<ToggleGroup.Item value={species}>
						<button
							class="species"
							class:active={selectedSpecies == species}
							on:click={() => updateSearchParams('species', species)}
							>{species}</button
						>
					</ToggleGroup.Item>
				{/each}
			</ToggleGroup.Root>
		</div>
		<div>
			<Label for="Gender">Gender Filter</Label>
			<ToggleGroup.Root variant="outline" type="single" id="Gender">
				<ToggleGroup.Item value="All">
					<button
						class="gender active"
						class:active={selectedGender == ''}
						on:click={() => updateSearchParams('gender', '')}>All</button
					>
				</ToggleGroup.Item>
				{#each characterGenders as gender}
					<ToggleGroup.Item value={gender}>
						<button
							class="species"
							class:active={selectedGender == gender}
							on:click={() => updateSearchParams('gender', gender)}
							><CharacterGender gender = {gender}/></button
						>
					</ToggleGroup.Item>
				{/each}
			</ToggleGroup.Root>
		</div>
	</div>

	<CardWrapper>
		{#each filtered as character}
			<CharacterCard {character} />
		{/each}
	</CardWrapper>
</div>
