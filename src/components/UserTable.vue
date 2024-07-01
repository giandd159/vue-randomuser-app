<template>
  <div>
    <table>
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
/* Añadir estilos según necesidad */
</style>