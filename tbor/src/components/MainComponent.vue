<template>
  <div>
    <header-component></header-component>
    <div class="section no-pad-bot orange lighten-5" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text text-darken-3">Tenant Bill of Rights Map</h1>
      <div class="row center">
        <h5 class="header col s12 light">During the COVID-19 pandemic, Los Angeles housing organizers, tenant leaders and public interest lawyers formed a coalition called <a target="_blank" href="https://www.keeplahoused.org/">Keep LA Housed</a> to confront the specific challenges the pandemic posed for LA County renters and their communities. What emerged was a holistic policy framework, the Tenant Bill of Rights (TBOR), consisting of nine policies designed to keep tenants housed, protect tenants from harassment, and provide tenants with economic and legal support when they face eviction. This map visualizes how many of the TBOR policies each city in LA County, and the County itself (for unincorporated areas) has enacted, and whether a strong or weak version was adopted.</h5>
        <p class="header col s12 light"><i> Disclaimer: We intend for this map to be a comparative tool rather than an endorsement 
        of a particular jurisdiction’s policy. Furthermore, a score of 1 for any 
        individual policy does not mean that the policy is perfect or cannot be 
        improved upon.</i></p>
        <br><br>
      </div>
      <div class="row center">
        <router-link to="/about" class="btn-large waves-effect waves-light orange darken-3">About</router-link>&nbsp;&nbsp;
        <router-link to="/howto" class="btn-large waves-effect waves-light orange darken-3">How To Use</router-link>
      </div>
      <br><br>

    </div>
  </div>

  <div class="container row scrollspy">
    <br><br><br>
    <div class="col s12 m4 l3">
      <!-- Search input -->
        <div class="search-box">
          <i class="material-icons search-icon">search</i>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search cities..."
          />
          <button
            v-if="searchQuery"
            class="clear-btn"
            @click="searchQuery = ''"
            type="button"
            aria-label="Clear search"
          >
            ×
          </button>
        </div>
      <ul class="collection with-header">
            <li class="collection-item blue-text text-accent-4" v-for="city in filteredCities" :key="city.id" @click="goToCityPage(city.id)">
            <div>
              <span class="title" v-html="city.highlightedName"></span>
              <p class="score">Score: {{ city.score }}/9</p>
            </div>
            </li>
          </ul>
      </div>

      <div class="col s12 m8 l9"> <!-- Note that "m8 l9" was added -->
         <iframe width="100%" height="700" frameborder="0" src="https://clausa.app.carto.com/map/6e07c8a6-e2b8-4c39-97d8-0d9a6a29350c?lat=34.118422&lng=-118.196851" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
      </div>

    </div>
    <!-- Pass the selected city data as a prop to CityPage.vue -->
    <CityPage :selectedCity="selectedCity" />
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import { citiesData } from '../citiesData.js';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      cityData: citiesData,
      searchQuery: '',
      showDropdown: false,
    };
  },
  computed: {
  filteredCities() {
    return this.cityData
      .filter(city =>
        city.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      .map(city => {
        if (!this.searchQuery) return { ...city, highlightedName: city.name };

        const regex = new RegExp(`(${this.searchQuery})`, 'gi');
        const highlightedName = city.name.replace(
          regex,
          '<span class="highlight">$1</span>'
        );
        return { ...city, highlightedName };
      });
    },
  },
  methods: {
    goToCityPage(cityId) {
      // Use Vue Router to navigate to the city page
      this.$router.push({ name: 'city', params: { id: cityId } });
    },
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@300;400;500;700&display=swap');
li:hover {
  background-color: #f0f0f0; /* Change background color on hover */
}
.collection-item .title {
  font-weight: 600; /* semi-bold */
}
.search-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 0.5rem 0.75rem;
  margin: 0.5rem 0 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,.08);
}

.search-box input {
  flex: 1;
  border: none;
  outline: none;
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
}

.search-box input::placeholder {
  color: #9e9e9e;
}

.search-icon {
  font-size: 18px;
  color: #9e9e9e;
}

.clear-btn {
  border: none;
  background: transparent;
  font-size: 18px;
  color: #9e9e9e;
  cursor: pointer;
  line-height: 1;
  padding: 0;
}

.clear-btn:hover {
  color: #424242;
}
.score{
    color:black;
}
.highlight {
  background-color: yellow;
  font-weight: bold;
}
h1, h4, h2, h3{
  font-family: Anton;
}
.collection{
    height:calc(100vh / 2) !important;
    overflow: auto;
    margin-top:0;
}

.collection-header {
    position: relative;
    border-left:1px solid #e0e0e0;
    border-top:1px solid #e0e0e0;
    border-right:1px solid #e0e0e0;
    padding-left:27px;
}
.collection-header h5 {
    margin-bottom: 0;
    padding-bottom: 12px;
    font-weight: bold;
    font-family: Antonio;
}
</style>
