<template>
    <div class="text-format">
        <h2 class="mt-3"> {{ name }} </h2>
        <p class="mb-5">  {{ description }} </p>
        <hr>
        <div class="float-container">
            <div class="float-child">
                <p>AVG. DISTANCE</p>
                <h4> {{ distance }} </h4>
            </div>
            <div class="float-child">
                <p>EST. TRAVEL TIME</p>
                <h4> {{ travelTime }} </h4>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    props: ['name','description','distance','travelTime']
}
</script>

<style>

</style>
