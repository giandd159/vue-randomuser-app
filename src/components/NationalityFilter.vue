<template>
   <div class="nationality-filter">
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


<style>
.nationality-filter {
  margin-bottom: 20px;
}

.nationality-filter label {
  font-weight: bold;
  margin-right: 10px;
}

.nationality-filter select {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.nationality-filter select:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}
</style>
