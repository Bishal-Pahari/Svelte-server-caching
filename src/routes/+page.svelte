<script lang="ts">
  export let data;

  // console.log(data);
  let value = data.data;
</script>

<button><a href="/about">ABOUT</a></button>

{#each value.data as element}
  <div>
    <pre>{element.id}: {element.title}</pre>
    <pre>{element.body}</pre>
    <br />
  </div>
{/each}
