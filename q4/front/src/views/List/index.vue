<template>
  <div class="content">
    <h1 class="title">The books of all time</h1>

    <SearchInput type="text" v-model="searchField" />

    <ul class="books" v-if="getFilteredBooks()">
      <BookCard v-for="(book, index) in getFilteredBooks()" :book="book" :index="index" :key="index" />
    </ul>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.scss" lang="scss"></style>
