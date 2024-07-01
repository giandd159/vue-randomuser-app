<template>
  <div id="app">
    <SearchBar />
    <NationalityFilter />
    <UserTable />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SearchBar from './components/SearchBar.vue';
import NationalityFilter from './components/NationalityFilter.vue';
import UserTable from './components/UserTable.vue';

export default {
  components: {
    SearchBar,
    NationalityFilter,
    UserTable
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
};
</script>

<style>
 
</style>