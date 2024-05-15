<template>
  <footer id="footer">
    <div class="main-container">
      <section id="bottom-nav">
        <div id="bottom-menu">
          <div v-for="(contact, index) in contactInfo" :key="index" class="contact-container"
            style="display: flex; flex-wrap: wrap; justify-content: space-between;">
            <div id="bottom-about" style="flex: 1 1 auto; max-width: 40%;">
              <h3>PT Stechoq Robotika Indonesia</h3>
              <address>
                Research, Develop, & Build Robotics for medical, educational, and industrial purposes
              </address>
              <div class="socmed">
                <a v-for="(value, key) in contact.social_media" :href="value" :key="key" target="_blank">
                  <i :class="getIconSosmed(key)"></i>
                </a>
              </div>
            </div>
            <div class="contact-info" style="flex: 1 1 auto; max-width: 25%;">
              <h3>Contact</h3>
              <!-- <a>{{ contact.phone }}</a>
              <a>{{ contact.email }}</a> -->
              <div class="flex items-center gap-2">
                <div>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <a>{{ contact.phone }}</a>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div>
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <div>
                  <a>{{ contact.email }}</a>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <a>{{ contact.address }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

// get the social media icon from the name of the api response
function getIconSosmed(name) {
  switch (name.toUpperCase()) {
    case 'INSTAGRAM':
      return 'fa-brands fa-instagram';
    case 'YOUTUBE':
      return 'fa-brands fa-youtube';
    case 'LINKEDIN':
      return 'fa-brands fa-linkedin';
    case 'TWITTER':
      return 'fa-brands fa-twitter';
    case 'FACEBOOK':
      return 'fa-brands fa-facebook';
    case 'GITHUB':
      return 'fa-brands fa-github';
    case 'TIKTOK':
      return 'fa-brands fa-tiktok';
    case 'WHATSAPP':
      return 'fa-brands fa-whatsapp';
    default:
      return '';
  }
}

// get respone api contact information
const contactInfo = ref(null);
async function fetchContactInformation() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/contactInformation');
    contactInfo.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching contact information:', error);
  }
}

onMounted(() => {
  fetchContactInformation();
});

</script>
