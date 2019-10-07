<template>
  <li class="book">
    <header class="book__headline">
      <router-link class="book__link" :to="{ name: 'book', params: { slug: book.slug } }">
        <h2 class="book__title">{{ index + 1 }}. {{ book.title }}</h2>
      </router-link>
      <span class="book__rating">({{ book.rating }}/10)</span>
    </header>
    <p class="book__author">{{ book.author }}</p>
    <p class="book__description">{{ getShortDescription() }}</p>
    <div class="book__upvotes-row">
      <button v-bind:class="{ book__upvote: true, 'book__upvote--checked': book.upvoted }" type="button">
        {{ book.upvoted ? 'Upvoted' : 'Upvote' }}
      </button>
      <span>Upvoted {{ book.upvotes }} times</span>
    </div>
    <router-link class="book__image-link" :to="{ name: 'book', params: { slug: book.slug } }">
      <img :src="book.cover" :alt="book.title" />
    </router-link>
  </li>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.scss" lang="scss"></style>
