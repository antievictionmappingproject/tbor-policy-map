<template>
  <header v-materialize>
    <!-- Include Materialize CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Navigation -->
    <nav class="blue darken-1" role="navigation">
      <div class="nav-wrapper container">
        <a class="brand-logo"><router-link to="/">TBOR</router-link></a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/howto">How To Use</router-link></li>
          <li><a href="https://www.keeplahoused.org/la-tbor" target="_blank">Download Zine</a></li>
        </ul>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <ul class="sidenav" id="mobile-demo" ref="mySidenav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/howto">How To Use</router-link></li>
      <li><a href="https://www.keeplahoused.org/la-tbor" target="_blank">Zine</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  mounted() {
    // Initialize Materialize components here
    // eslint-disable-next-line no-undef
    M.Sidenav.init(this.$refs.mySidenav);
  }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@300;400;500;700&display=swap');
.brand-logo{
  font-family: Anton;
}

body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
  }

h1, h4, h2, h3{
  font-family: Anton;
}

</style>