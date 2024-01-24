<script>
  import * as Accordion from "$lib/components/ui/accordion";
export let character;

</script>

<Accordion.Root>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Full Name</Accordion.Trigger>
    <Accordion.Content>
      {character.full_name}
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>