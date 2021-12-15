<template>
    <div class="col">
      <img :src="imgRoute" :alt="altImg">
    </div>       
</template>

<script>
export default {
    props: ['imgRoute', 'altImg']
}
</script>

<style>

</style>
