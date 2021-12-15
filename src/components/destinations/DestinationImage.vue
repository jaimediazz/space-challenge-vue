<template>
    <div class="col">
        <div class="text-format">
            <h5 class="mb-5"> <p style="display: inline; color: #D0D6F9;">01</p> PICK UP YOUR DESTINATION</h5>
            <img :src="moonImageRoute" alt="Moon">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moonImageRoute: '../../assets/destination/image-moon.png' 
        }
    }
}
</script>

<style>

</style>
