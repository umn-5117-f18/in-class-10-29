<template>
  <div class="cats">
    <h1>here are cats</h1>

    <form v-on:submit.prevent="addCat(name, image)">
      <input v-model="name" placeholder="Cat Name">
      <input v-model="image" placeholder="Cat Image URL">
      <button type="submit">Add New Cat</button>
    </form>

    <div>
      <article v-for="(cat, idx) in cats" :key="idx">
        <h1>{{ cat.name }}</h1>
        <img :src="cat.image" style="max-width: 300px;">
        <button @click="deleteCat(cat.id)">Delete</button> 
      </article>
    </div>

  </div>
</template>

<script>
import { db } from "@/firebaseConfig";

export default {
  name: 'Cats',
  data() {
    return {
      cats: [],
      name: "",
      image: ""
    };
  },
  firestore() {
    return {
      cats: db.collection("cats").orderBy("createdAt")
    };
  },
  methods: {
    addCat(name, image) {
      const createdAt = new Date();
      db.collection("cats").add({ name, image, createdAt });
    },
    deleteCat(id) {
      db.collection("cats")
        .doc(id)
        .delete();
    }
  }
}
</script>

<style scoped>
</style>
