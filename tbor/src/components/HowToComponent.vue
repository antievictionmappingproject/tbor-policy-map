<!-- src/components/HowToComponent.vue -->
<template>
  <div>
    <header-component></header-component>
      <div class="section no-pad-bot orange lighten-5" id="howto-banner">
      <div class="container">
        <br><br>
        <h1 class="header center orange-text text-darken-3">How to Use the Map</h1>
        <div class="row center">
          <h5 class="header col s12 light">How does it work?</h5>
          <br><br>
        </div>
        <br><br>
      </div>
    </div>
      <div class="container" id="startPosts">
        <br>
        <br>
        <div class="row">
          <div class="col s12">
            
            <p>We intend for this resource to be used by tenants, advocates, and policymakers alike. The map can be used in three different ways depending your intents and purposes: </p>

          <div class="section">

            <!--   Icon Section   -->
            <div class="row">
              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center light-blue-text"><i class="large material-icons">location_on</i></h2>
                  <h5 class="center">Know where your city is?</h5>

                  <p class="light">If you know where your city or unincorporated area is located on the embedded map, then simply click on the location and then click on the link in the pop-up window to view that city or area’s TBOR coverage. 
                    </p>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center light-blue-text"><i class="large material-icons">help</i></h2>
                  <h5 class="center">Don't know where your city is?</h5>

                  <p class="light">If you <strong>don’t know</strong> where your city or unincorporated area is located on the embedded map, then type your address into the search bar located at the bottom of the map, click on the location, and click on the link in the pop-up window to view that city or area’s TBOR coverage.
                    </p>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center light-blue-text"><i class="large material-icons">location_city</i></h2>
                  <h5 class="center">Just browsing!</h5>

                  <p class="light">If you just want to browse grades and policies in cities and unincorporated LA County, then scroll through the list and click on the different cities to view their scores.
                    </p>
                </div>
              </div>
          </div>
        </div>

            <br>

              <p>For tenants, advocates, and policymakers interested in joining the movement to enact TBOR policies in their cities and unincorporated areas, then please check out the <a target="_blank" href="https://www.keeplahoused.org/">Keep LA Housed Coalition’s website and social media</a> for more information.</p>
              <p><i>Disclaimer: We intend for this map to be a comparative tool rather than an endorsement 
              of a particular jurisdiction’s policy. Furthermore, a score of 1 for any 
              individual policy does not mean that the policy is perfect or cannot be 
              improved upon. <br><br>
              This project is a collaboration between the Anti-Eviction Mapping Project, Keep LA Housed Coalition, and Right to Counsel Coalition’s Research Committee.</i></p>
          <br><br>
              </div>
            
            
          </div>
        </div>
<footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};

</script>

<style scoped>
/* Add your component-specific styles here */
h1, h4, h2, h3{
  font-family: Anton;
}
</style>