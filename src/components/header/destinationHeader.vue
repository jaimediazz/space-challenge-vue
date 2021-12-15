<template>
    <ul class="nav" id="nav-bar">
      <li class="nav-item active">
        <a href="" @click="selectedDestination = 'appMoon'">MOON</a>
      </li>
      <li class="nav-item">
        <a href="" @click="selectedDestination = 'appMars'">MARS</a>
      </li>
      <li class="nav-item">
        <a href="" @click="selectedDestination = 'appEuropa'">EUROPA</a>
      </li>
      <li class="nav-item">
        <a href="" @click="selectedDestination = 'appTitan'">TITAN</a>
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      selectedDestination: 'appMoon'
    }
  }
}
</script>

<style>

</style>
