<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" placeholder="Buscar por nombre o apellido">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    };
  },
  watch: {
    searchQuery(newQuery) {
      this.$store.commit('setSearchQuery', newQuery);
    }
  }
};
</script>


<style>
.search-bar {
  margin-bottom: 20px;
}

.search-bar input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar input[type="text"]:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}
</style>
