<template>
    <div class="col-6">
      <img :src="imgRoute" :alt="altImg">
    </div>    
</template>

<script>
export default {
    props: ['imgRoute','altImg']    
}
</script>

<style>

</style>