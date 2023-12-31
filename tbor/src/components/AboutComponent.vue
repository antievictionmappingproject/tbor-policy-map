<!-- src/components/AboutComponent.vue -->
<template>
  <div>
    <header-component></header-component>
    <div class="section no-pad-bot orange lighten-5" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text text-darken-3">About the Project</h1>
      <div class="row center">
        <h5 class="header col s12 light">What is the Tenant Bill of Rights?</h5>
        <br><br>
      </div>
      <br><br>
    </div>
  </div>

  <div class="container" id="startPosts">
  <br>
  <br>
  <div class="row">
    <div class="col s12 m12 l12">
      
      <p>During the COVID-19 pandemic, Los Angeles housing organizers, tenant leaders and public interest lawyers formed a coalition called <a target="_blank" href="https://www.keeplahoused.org/">Keep LA Housed</a> to confront the specific challenges the pandemic posed for LA County renters and their communities. Since its inception, Keep LA Housed has been dedicated to expanding temporary tenant protections and codifying permanent ones in the City of LA and LA County. </p>
        
        <p>What emerged was a holistic policy framework, the Tenant Bill of Rights (TBOR), consisting of nine policies designed to keep tenants housed, protect tenants from harassment, and provide tenants with economic and legal support when they face eviction.</p>

        <table class="table">
        <thead>
          <tr>
              <th>The nine policies include:</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1. Rent stabilization to the maximum extent allowed by state law </td>
          </tr>
          <tr>
            <td>2. Effective anti-harassment protections </td>
          </tr>
          <tr>
            <td>3. Limits on evictions for failure to pay rent </td>
          </tr>
          <tr>
            <td>4. Relocation assistance for tenants displaced for no fault of their own</td>
          </tr>
          <tr>
            <td>5. Safeguards when landlords attempt to buy out tenants </td>
          </tr>
          <tr>
            <td>6. Strong, proactive code enforcement </td>
          </tr>
          <tr>
            <td>7. Removal of discriminatory barriers to housing access </td>
          </tr>
          <tr>
            <td>8. Codified right to counsel for tenants facing eviction </td>
          </tr>
          <tr>
            <td>9. Universal just cause protections </td>
          </tr>
        </tbody>
      </table>
      <br>

        <p>On this map, we visualize the extent to which each jurisdiction in Los Angeles County–88 cities and unincorporated Los Angeles County–have enacted TBOR policies into law. Cities are ranked on a 0-9 scale, represented by a blue color gradient from light (few to no enacted policies) to dark blue (many enacted policies).</p>
        <br>
        <h5>What do the scores mean? </h5>
        <p>You can find the rubric that we used to classify each city here:</p>

    <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Jurisdiction Rubric</span>
            <table class="striped responsive-table">
                  <thead>
                    <tr>
                        <th>Quality Measure</th>
                        <th>Score: 1</th>
                        <th>Score: 0.5</th>
                        <th>Score: 0</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><i class="material-icons"><span class="material-symbols-outlined">apartment</span></i> Rent Stabilization</td>
                      <td>This jurisdiction has adopted a robust rent stabilization policy that approaches the maximum allowable coverage under state law and is designed to keep rent increases truly affordable for low-income tenants.</td>
                      <td>This jurisdiction has adopted a Rent Stabilization policy, but it contains exemptions for significant numbers of units or allows large rent increases.</td>
                      <td>This jurisdiction does not have rent stabilization, or has a rent stabilization policy that simply imports minimum requirements from state law or is limited to only cover a small segment of housing.</td>
                    </tr>
                    <tr>
                      <td><i class="material-icons"><span class="material-symbols-outlined">security</span></i> Anti-Harassment Protections</td>
                      <td>This jurisdiction has a local Anti-Harassment policy that prohibits and punishes common harassing behaviors from landlords and allows tenants to report such harassment for enforcement. </td>
                      <td>This jurisdiction has a local Anti-Harassment policy, but lacks an effective way for tenants to report harassment or enforce the policy through other means. </td>
                      <td>This jurisdiction does not have Anti-Harassment Protections.</td>
                    </tr>
                    <tr>
                      <td><i class="material-icons"><span class="material-symbols-outlined">house_with_shield</span></i> Limits on Evictions Based on Non-Payment of Rent</td>
                      <td>This jurisdiction prohibits eviction based on nonpayment of smaller amounts of rent, unless the tenant owes more than one month of the Fair Market Rent for their unit size.</td>
                      <td>This jurisdiction prohibits eviction based on nonpayment of smaller amounts of rent, but the threshold is less than one month Fair Market Rent, or requires repayment within a certain timeframe. </td>
                      <td>This jurisdiction does not have Limits on Evictions Based on Non-Payment of Rent.</td>
                    </tr>
                    <tr>
                      <td><i class="material-icons"><span class="material-symbols-outlined">move_location</span></i> Relocation Assistance for Large Rent Increases</td>
                      <td>This jurisdiction gives tenants who are displaced by large rent increases the option to receive substantial relocation assistance in most instances if they are served with such a rent increase. </td>
                      <td>This jurisdiction gives tenants displaced by large rent increases the option of receiving relocation assistance, but leaves certain units or tenants out, or does not require a substantial amount of relocation assistance. </td>
                      <td>This jurisdiction does not have Relocation Assistance for Large Rent Increases.</td>
                    </tr>
                    <tr>
                      <td><i class="material-icons"><span class="material-symbols-outlined">real_estate_agent</span></i> Tenant Buyout Safeguards</td>
                      <td>This jurisdiction requires tenants to be notified of their rights when signing move-out agreements, mandates that landlords provide information to the tenant about this protection when presenting such an agreement, and allows the tenant sufficient time to learn about their rights and to cancel the agreement if it does not serve their interests.</td>
                      <td>This jurisdiction has placed limits on tenant buyout agreements, but either doesn't give tenants a period to cancel improper agreements, doesn't require information to be given to tenants about their rights when signing agreements, or lacks an enforcement mechanism. </td>
                      <td>This jurisdiction does not have Tenant Buyout Safeguards.</td>
                    </tr>
                    <tr>
                      <td><i class="material-icons"><span class="material-symbols-outlined">shield_lock</span></i> Proactive Code Enforcement</td>
                      <td>This jurisdiction has a proactive inspection program that includes routine inspections, utilizes appropriate penalties, allows tenants to file complaints and establishes a clear, actionable plan to resolve all violations within a reasonable time period, including the potential of a rent escrow account program or the jurisdiction intervening to resolve violations itself.</td>
                      <td>This jurisdiction has a proactive inspection program that includes routine inspections, but lacks effective means to ensure violations are remedied within a reasonable time period, such as a rent escrow account program or the jurisdiction intervening to resolve violations itself. </td>
                      <td>This jurisdiction does not have Proactive Code Enforcement.</td>
                    </tr>
                    <tr>
                      <td> <i class="material-icons"><span class="material-symbols-outlined">policy</span></i> Fair Access and/or Anti-Discrimination Policies</td>
                      <td>This jurisdiction has adopted limitations on landlord screening of prospective tenants, including barring consideration of credit scores, criminal history and eviction history, and requires landlords to be transparent about their screening criteria and reasons for denying tenant applications. </td>
                      <td>This jurisdiction has adopted some limitations on landlord screening practices, but fails to prohibit all of the most common problematic criteria or fails to require transparency with respect to a landlord's screening criteria. </td>
                      <td>This jurisdiction does not have Fair Access and/or Anti-Discrimination Policies.</td>
                    </tr>
                    <tr>
                      <td><i class="material-icons"><span class="material-symbols-outlined">gavel</span></i> Codified Right to Counsel</td>
                      <td>This jurisdiction has codified a Right to Counsel for tenants facing eviction. </td>
                      <td>This jurisdiction has adopted a large eviction defense program, but has not codified the Right to Counsel for tenants facing eviction. </td>
                      <td>This jurisdiction does not have a Right to Counsel or eviction defense program.</td>
                    </tr>
                    <tr>
                      <td><i class="material-icons"><span class="material-symbols-outlined">vpn_lock</span></i> Universal Just Cause Protections</td>
                      <td>In this jurisdiction, all (or nearly all) tenants are protected from no-cause evictions by a robust Just Cause for Eviction policy. </td>
                      <td>This jurisdiction has a Just Cause for eviction policy, but it either exempts significant numbers of units or tenants, or allows for evictions based on inappropriate reasons. </td>
                      <td>This jurisdiction does not have Universal Just Cause Protections.</td>
                    </tr>
                  </tbody>
                </table>
                  </div>
                </div>
              </div>
            </div>

    <p><i>
      Disclaimer: We intend for this map to be a comparative tool rather than an endorsement 
        of a particular jurisdiction’s policy. Furthermore, a score of 1 for any 
        individual policy does not mean that the policy is perfect or cannot be 
        improved upon. <br><br>
    This project is a collaboration between the Anti-Eviction Mapping Project, Keep LA Housed Coalition, and Right to Counsel Coalition’s Research Committee.</i></p>   
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