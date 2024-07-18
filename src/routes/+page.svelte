<script lang="ts">
  export let data;

  let value = data.data;
</script>

{#each value.data as element, index (index)}
  <div>
    <pre>{element.id}: {element.title}</pre>
    <pre>{element.body}</pre>
    <br />
  </div>
{/each}
