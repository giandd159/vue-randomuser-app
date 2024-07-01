<template>
  <div class="user-table">
    <table class="user-list">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Género</th>
          <th>Email</th>
          <th>Nacionalidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.login.uuid">
          <td><img :src="user.picture.thumbnail" :alt="user.name.first"></td>
          <td>{{ user.name.first }}</td>
          <td>{{ user.name.last }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.nat }}</td>
        </tr>
      </tbody>
    </table>
    <UserPagination />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserPagination from './UserPagination.vue';

export default {
  components: {
    UserPagination
  },
  computed: {
    ...mapGetters(['paginatedUsers']),
    users() {
      return this.paginatedUsers;
    }
  }
};
</script>


<style>
.user-table {
  font-family: Arial, sans-serif;
  margin-top: 20px;
}

.user-list {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-list th, .user-list td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.user-list th {
  background-color: #f2f2f2;
}

.user-list img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .user-list th, .user-list td {
    padding: 6px;
  }

  .user-list img {
    width: 40px;
    height: 40px;
  }
}
</style>
