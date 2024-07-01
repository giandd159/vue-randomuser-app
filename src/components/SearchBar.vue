<template>
  <div>
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