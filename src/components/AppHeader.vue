<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 col-md-4 col-12">
          <h1 class="site-title">База данних автостанції</h1>
        </div>
        <div class="col-lg-6 col-md-8 col-12">
          <div class="search-bar">
            <input
              type="text"
              v-model="searchQuery"
              @keyup.enter="$emit('search', searchQuery)"
              class="search-input"
              placeholder="Пошук..."
            />
          </div>
        </div>
        <div class="col-lg-3 col-md-12 col-12 text-end">
          <button @click="$emit('search', searchQuery)" class="search-button">
            <em class="fas fa-search"></em> Пошук
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #343a40;
  padding: 20px 0;
}

.header .container {
  max-width: 1200px;
}

.header .site-title {
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.search-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

.search-input:focus,
.search-button:focus {
  outline: none;
}

@media (max-width: 767px) {
  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-input {
    margin-bottom: 10px;
  }
}
</style>
