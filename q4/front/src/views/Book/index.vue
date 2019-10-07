<template>
  <article class="book" v-if="book">
    <header class="book__headline">
      <h2 class="book__title">
        {{ book.title }}
        <span class="book__author">{{ book.author }}</span>
      </h2>
      <div class="book__upvotes-row">
        <span>Upvoted {{ book.upvotes }} times</span>
        <button v-bind:class="{ book__upvote: true, 'book__upvote--checked': book.upvoted }" type="button">
          {{ book.upvoted ? 'Upvoted' : 'Upvote' }}
        </button>
      </div>
    </header>
    <img :src="book.cover" :alt="book.title" />

    <h3 class="book__subtitle">Synopsis</h3>
    <p class="book__description">{{ book.synopsis }}</p>

    <p class="book__rating">Rating: {{ book.rating }}/10</p>
  </article>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.scss" lang="scss"></style>
