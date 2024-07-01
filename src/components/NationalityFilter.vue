<template>
  <div>
    <label for="nationality">Filtrar por nacionalidad:</label>
    <select id="nationality" v-model="selectedNationalities" multiple @change="handleNationalitiesChange">
      <option v-for="nat in nationalities" :key="nat.value" :value="nat.value">{{ nat.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'NationalityFilter',
  data() {
    return {
      selectedNationalities: []
    };
  },
  computed: {
    nationalities() {
      //  nacionalidades 
      return [
        { value: 'AU', label: 'Australia' },
        { value: 'BR', label: 'Brasil' },
        { value: 'CA', label: 'Canadá' },
         { value: 'FR', label: 'Francia' },
      ];
    }
  },
  methods: {
    handleNationalitiesChange() {
      this.$store.commit('setSelectedNationalities', this.selectedNationalities);
    }
  }
};
</script>