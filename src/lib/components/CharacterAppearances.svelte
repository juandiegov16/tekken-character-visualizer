<script>
    import * as Accordion from "$lib/components/ui/accordion";
	export let character;
    let appArray = character.appearances[0];
</script>

<Accordion.Root>
  <Accordion.Item value="Main">
    <Accordion.Trigger>Appearances - Main</Accordion.Trigger>
    <Accordion.Content>
      <ul>
        <li>Tekken 1: {appArray.tk1}</li>
        <li>Tekken 2: {appArray.tk2}</li>
        <li>Tekken 3: {appArray.tk3}</li>
        <li>Tekken 4: {appArray.tk4}</li>
        <li>Tekken 5 Dark Resurrection: {appArray.tk5dr}</li>
        <li>Tekken 6 Bloodline Rebellion: {appArray.tk6br}</li>
        <li>Tekken 7 Ultimate Edition: {appArray.tk7s4}</li>
        <li>Tekken 8: {appArray.tk8}</li>
      </ul>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value ="Spin-offs">
<Accordion.Trigger>Appearances - Spin-offs</Accordion.Trigger>
<Accordion.Content>
    <ul>
        <li>Tekken Tag Tournament: {appArray.ttt}</li>
        <li>Tekken Advance: {appArray.tadv}</li>
        <li>Tekken Tag Tournament 2: {appArray.ttt2}</li>
        <li>Tekken Card Tournament: {appArray.tct}</li>
        <li>Tekken Revolution: {appArray.trev}</li>
        <li>Tekken Mobile: {appArray.tmob}</li>
    </ul>
</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>


