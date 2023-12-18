<script lang="ts">
    import Icon from '@iconify/svelte';
  
    export let props: { icon: string; name: string }[] = [];

    function isFirstItem(index: number) {
        return index == 0
    }

    function isLastItem(index: number, iterable: Iterable) {
        return index < iterable.length -1
    }
  </script>
  
  <nav aria-label="breadcrumb" class="flex items-center space-x-2">
    {#each items as item, index (item.name)}
      <Icon icon={item.icon} class="w-5 h-5" />
      {#if !isFirstItem(index)}
      <span class="font-medium">{item.name}</span>
      {/if}
      {#if isLastItem(index, items)}  
        <span class="text-gray-500">{@html '>'}</span>
      {/if}

    {/each}
  </nav>