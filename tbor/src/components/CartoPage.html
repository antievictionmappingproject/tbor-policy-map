<!-- CartoPage.vue -->
<template>
  <div>
    <!-- Content -->
    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-content">
                <span class="card-title" v-if="city">
                  {{ city.name }} Index Score: {{ city.score }}/9
                </span>
                <i class="tiny material-icons">info_outline</i>
                <span>Click the panels below to see how the score was evaluated.</span>

                <!-- Check if city is not null before accessing measures -->
                <ul class="collapsible" v-collapsible v-if="city && city.measures">
                <li v-for="measure in city.measures" :key="measure.id">
                  <div class="collapsible-header">
                    <i class="material-icons"><span class="material-symbols-outlined">{{ getIconForMeasure(measure.title) }}</span></i>
                    {{ measure.title }}
                    <span :class="getBadgeClass(measure.score)" :data-badge-caption="getBadgeCaption(measure.score)"></span>
                  </div>
                  <div class="collapsible-body">
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
                          <td>{{ measure.title }}</td>
                          <td>{{ getScoreDescription(1, measure.title) }}</td>
                          <td>{{ getScoreDescription(0.5, measure.title) }}</td>
                          <td>{{ getScoreDescription(0, measure.title) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script>
// CityPage.vue
import FooterComponent from './FooterComponent.vue';
import { citiesData } from '../citiesData.js';

export default {
  components: {
    FooterComponent,
  },
  data() {
    return {
      city: null,
      citiesData: citiesData,
    };
  },
  mounted() {
    this.loadCityData();
    this.$nextTick(() => {
      const collapsibleElement = document.querySelector('.collapsible');
      if (collapsibleElement) {
        // eslint-disable-next-line no-undef
        M.Collapsible.init(collapsibleElement);
      }
    });
  },
  methods: {
    loadCityData() {
      const cityId = this.$route.params.id;
      // Find the city with the matching ID in citiesData
      this.city = citiesData.find((city) => city.id === parseInt(cityId));
    },
    getBadgeCaption(score) {
      // Customize this logic based on your requirements
      if (score === 1) {
        return '1';
      } else if (score === 0.5) {
        return '0.5';
      } else if (score === 0) {
        return '0';
      } else {
        return 'Unknown';
      }
    },
    getBadgeClass(score) {
      // Customize this logic based on your requirements
      if (score === 1) {
        return 'new badge green';
      } else if (score === 0.5) {
        return 'new badge orange';
      } else if (score === 0) {
        return 'new badge red';
      } else {
        return 'new badge';
      }
    },
    getIconForMeasure(title) {
    // Define mapping of measure titles to icons
    const iconMap = {
      'Rent Stabilization': 'apartment',
      'Anti-Harassment Protections': 'security',
      'Limits on Evictions Based on Non-Payment of Rent': 'house_with_shield',
      'Relocation Assistance for Large Rent Increases': 'move_location',
      'Tenant Buyout Safeguards': 'real_estate_agent',
      'Proactive Code Enforcement': 'shield_lock',
      'Fair Access and/or Anti-Discrimination Policies': 'policy',
      'Codified Right to Counsel': 'gavel',
      'Universal Just Cause Protections': 'vpn_lock'
    };

    return iconMap[title] || ''; // Return the corresponding icon or an empty string if not found
    },
    getScoreDescription(score, measureTitle) {
  const descriptions = {
    'Rent Stabilization': {
      1: 'This jurisdiction has adopted a robust rent stabilization policy that approaches the maximum allowable coverage under state law and is designed to keep rent increases truly affordable for low-income tenants.',
      0.5: 'This jurisdiction has adopted a rent stabilization policy, but it contains exemptions for significant numbers of units or allows unaffordable rent increases.',
      0: 'This jurisdiction does not have rent stabilization, or has a rent stabilization policy that simply imports minimum requirements from state law or is limited to only cover a small segment of housing.',
    },
    'Anti-Harassment Protections': {
      1: 'This jurisdiction has a local Anti-Harassment policy that prohibits and punishes common harassing behaviors from landlords and allows tenants to report such harassment for enforcement.',
      0.5: 'This jurisdiction has a local Anti-Harassment policy, but lacks an effective way for tenants to report harassment or enforce the policy through other means.',
      0: 'This jurisdiction does not have Anti-Harassment Protections.',
    },
    'Limits on Evictions Based on Non-Payment of Rent': {
      1: 'This jurisdiction prohibits eviction based on nonpayment of smaller amounts of rent, unless the tenant owes more than one month of the Fair Market Rent for their unit size.',
      0.5: 'This jurisdiction prohibits eviction based on nonpayment of smaller amounts of rent, but the threshold is less than one month Fair Market Rent, or requires repayment within a certain timeframe.',
      0: 'This jurisdiction does not have Limits on Evictions Based on Non-Payment of Rent.',
    },
    'Relocation Assistance for Large Rent Increases': {
      1: 'This jurisdiction gives tenants who are displaced by large rent increases the option to receive substantial relocation assistance in most instances if they are served with such a rent increase.',
      0.5: 'This jurisdiction gives tenants displaced by large rent increases the option of receiving relocation assistance, but leaves certain units or tenants out, or does not require a substantial amount of relocation assistance.',
      0: 'This jurisdiction does not have Relocation Assistance for Large Rent Increases.',
    },
    'Tenant Buyout Safeguards': {
      1: 'This jurisdiction requires tenants to be notified of their rights when signing move-out agreements, mandates that landlords provide information to the tenant about this protection when presenting such an agreement, and allows the tenant sufficient time to learn about their rights and to cancel the agreement if it does not serve their interests.',
      0.5: 'This jurisdiction has placed limits on tenant buyout agreements, but either does not give tenants a period to cancel improper agreements, does not require information to be given to tenants about their rights when signing agreements, or lacks an enforcement mechanism.',
      0: 'This jurisdiction does not have Tenant Buyout Safeguards.',
    },
    'Proactive Code Enforcement': {
      1: 'This jurisdiction has a proactive inspection program that includes routine inspections, utilizes appropriate penalties, allows tenants to file complaints and establishes a clear, actionable plan to resolve all violations within a reasonable time period, including the potential of a rent escrow account program or the jurisdiction intervening to resolve violations itself.',
      0.5: 'This jurisdiction has a proactive inspection program that includes routine inspections, but lacks effective means to ensure violations are remedied within a reasonable time period, such as a rent escrow account program or the jurisdiction intervening to resolve violations itself.',
      0: 'This jurisdiction does not have Proactive Code Enforcement.',
    },
    'Fair Access and/or Anti-Discrimination Policies': {
      1: 'This jurisdiction has adopted limitations on landlord screening of prospective tenants, including barring consideration of credit scores, criminal history and eviction history, and requires landlords to be transparent about their screening criteria and reasons for denying tenant applications.',
      0.5: 'This jurisdiction has adopted some limitations on landlord screening practices, but fails to prohibit all of the most common problematic criteria or fails to require transparency with respect to a landlord(s) screening criteria.',
      0: 'This jurisdiction does not have Fair Access and/or Anti-Discrimination Policies.',
    },
    'Codified Right to Counsel': {
      1: 'This jurisdiction has codified a Right to Counsel for tenants facing eviction.',
      0.5: 'This jurisdiction has adopted a large eviction defense program, but has not codified the Right to Counsel for tenants facing eviction.',
      0: 'This jurisdiction does not have Codified Right to Counsel.',
    },
    'Universal Just Cause Protections': {
      1: 'In this jurisdiction, all (or nearly all) tenants are protected from no-cause evictions by a robust Just Cause for Eviction policy.',
      0.5: 'This jurisdiction has a Just Cause for eviction policy, but it either exempts significant numbers of units or tenants, or allows for evictions based on inappropriate reasons.',
      0: 'This jurisdiction does not have Universal Just Cause Protections.',
    },
  };
  if (descriptions[measureTitle] && descriptions[measureTitle][score] !== undefined) {
        return descriptions[measureTitle][score];
      }

      return 'Score not available.';
    },

    // other methods if any
  },
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

.collapsible span.badge.new::before{
  background-color: transparent;
}
</style>
