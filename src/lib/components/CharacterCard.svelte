<script>
	import { CharacterFlag, CharacterGender, CharacterAppearances, CharacterSpecies } from '.';

	import * as Card from '$lib/components/ui/card';

	export let character;
	//console.log(character.appearances[0].tk1)
</script>

<Card.Root class="w-[280px]">
	<Card.Header class="grid">
		<Card.Title class="justify-self-center">{character.name}</Card.Title>
		{#if character.name != character.full_name}
			<Card.Description class="justify-self-center">{character.full_name}</Card.Description>
		{:else}
			<Card.Description class="justify-self-center">--</Card.Description>
		{/if}
	</Card.Header>
	<Card.Content>
		<div class="grid grid-cols-2 justify-items-center">
			<CharacterFlag nationality={character.nationality} />
			<CharacterGender gender={character.gender} />
		</div>
		<CharacterSpecies species={character.species} />
	</Card.Content>
	<Card.Footer>
		<CharacterAppearances {character} />
	</Card.Footer>
</Card.Root>
