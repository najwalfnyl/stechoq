<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

// get the social media icon from the name of the api response
function getIconSosmed(name) {
  switch(name.toUpperCase()) {
    case 'INSTAGRAM':
      return 'src/assets/img/icon/instagram.svg';
    case 'YOUTUBE' : 
      return 'src/assets/img/icon/youtube.svg' ;
    case 'LINKEDIN' : 
      return 'src/assets/img/icon/linkedin.svg' ;
    case 'TWITTER' :
      return 'src/assets/img/icon/twitter.svg' ;
    case 'FACEBOOK' :
      return 'src/assets/img/icon/facebook.svg' ;
    case 'GITHUB' :
      return 'src/assets/img/icon/github.svg' ;
    case 'TIKTOK' :
      return 'src/assets/img/icon/tiktok.svg' ;
    default : 
      return '' ;
  }
}

// get api contact information
const contactInfo = ref(null);
async function fetchContactInformation() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/contactInformation');
    contactInfo.value = response.data;
    // console.log(response.data);
  } catch (error) {
    console.error('Error fetching contact information:', error);
  }
}

onMounted(fetchContactInformation);

</script>

<template>
  <footer id="footer">
    <div class="main-container">
      <section id="bottom-nav">
        <div id="bottom-menu">
          <div v-for="(contact, index) in contactInfo" :key="index" class="contact-container">
            <div id="bottom-about"> 
              <h3>PT Stechoq Robotika Indonesia</h3>
              <address>
                Research, Develop, & Build Robotics for medical, educational, and industrial purposes
              </address>
              <div class="socmed">
                <a v-for="(value, key) in contact.social_media" :href="value" :key="key" target="_blank">
                  <img :src="getIconSosmed(key)" :alt="key">
                </a>
              </div>              
            </div>
            <div class="contact-info">
              <h3>Contact</h3>
              <a>{{ contact.phone }}</a>
              <a>{{ contact.email }}</a>
              <a>{{ contact.address }}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<style scoped>
.contact-container {
  display: flex;
}

.contact-info {
  margin-left: auto; 
}
</style>
