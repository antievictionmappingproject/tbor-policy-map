<!-- src/components/FooterComponent.vue -->
<template>
  <footer class="page-footer blue darken-1 main">
    <div class="container">
      <div class="row">
        <div class="col l7 s12">
                <h5 class="white-text">Project Collaborators</h5>
                <div class="logo-footer"> <a target="_blank" href="https://www.keeplahoused.org/"><img src="../assets/klahlogo.png"></a></div>
                <div class="logo-footer"><a target="_blank" href="https://rtcla.org/"><img src="../assets/rtclogo.png"></a></div>
                <div class="logo-footer"><a target="_blank" href="https://antievictionmap.com/"><img src="../assets/aemplogo.png"></a></div>
              </div>
              <div class="col l3 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" target="_blank" href="https://www.keeplahoused.org/">Keep LA Housed</a></li>
                  <li><a class="grey-text text-lighten-3" target="_blank" href="https://rtcla.org/">Right To Counsel LA</a></li>
                  <li><a class="grey-text text-lighten-3" target="_blank" href="https://antievictionmap.com/">Anti-Eviction Mapping Project</a></li>
                </ul>
              </div>
            </div>
          </div>
      <div class="footer-copyright">
        <div class="container">
          © 2023 LA Tenant Bill of Rights Project
        </div>
      </div>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@300;400;500;700&display=swap');
  /* Add your footer styles here */
  footer {
    bottom: 0;
    width: 100%;
  }


.page-footer{
  font-family: 'Antonio', sans-serif;
}

.footer-copyright, footer li {
  font-family: 'Inter', sans-serif;
}

.logo-footer{
  diplay: inline-block;
  float:left;
  margin-right:50px;
  margin-bottom:20px;
  object-fit: scale-down;
}
h1, h4, h2, h3{
  font-family: Anton;
}
</style>