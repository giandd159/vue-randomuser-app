<template>
  <div class="pagination">
    <button 
      @click="changePage(currentPage - 1)" 
      :disabled="currentPage === 1"
    >
      Anterior
    </button>
    <span>Página {{ currentPage }} de {{ totalPages }}</span>
    <button 
      @click="changePage(currentPage + 1)" 
      :disabled="currentPage === totalPages"
    >
      Siguiente
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'UserPagination',
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['totalPages'])
  },
  methods: {
    ...mapMutations(['setCurrentPage']),
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.setCurrentPage(page);
      }
    }
  }
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin: 0 5px;
}
</style>