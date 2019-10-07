<template>
  <div class="wrapper">
    <label for="searchField">Search:</label>
    <input id="searchField" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.scss" lang="scss"></style>
