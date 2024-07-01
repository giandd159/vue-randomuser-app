// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: [],
    searchQuery: '',
    selectedNationalities: [],
    currentPage: 1,
    usersPerPage: 10
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
      state.currentPage = 1;  // Reset pagination
    },
    setSelectedNationalities(state, nationalities) {
      state.selectedNationalities = nationalities;
      state.currentPage = 1;  // Reset pagination
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setUsersPerPage(state, number) {
      state.usersPerPage = number;
    }
  },
  actions: {
    async fetchUsers({ commit }, nationalities = []) {
      const nationalityParam = nationalities.length > 0 ? `&nat=${nationalities.join(',')}` : '';
      const response = await axios.get(`https://randomuser.me/api/?results=1000${nationalityParam}`);
      commit('setUsers', response.data.results);
    }
  },
  getters: {
    filteredUsers(state) {
      let users = state.users;

      if (state.searchQuery) {
        users = users.filter(user => 
          user.name.first.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          user.name.last.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      if (state.selectedNationalities.length > 0) {
        users = users.filter(user => 
          state.selectedNationalities.includes(user.nat)
        );
      }

      return users;
    },
    paginatedUsers(state, getters) {
      const startIndex = (state.currentPage - 1) * state.usersPerPage;
      const endIndex = startIndex + state.usersPerPage;
      return getters.filteredUsers.slice(startIndex, endIndex);
    },
    totalPages(state, getters) {
      return Math.ceil(getters.filteredUsers.length / state.usersPerPage);
    }
  }
});