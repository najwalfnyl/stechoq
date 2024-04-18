<script setup>
// const d = new Date();
// const year = d.getFullYear();

import axios from 'axios';
import { ref, onMounted } from 'vue';

const contactInfo = ref(null);

function fillContactInformation(data) {
  contactInfo.value = data;
  console.log(contactInfo.value);
}

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/contactInformation');
    fillContactInformation(response.data);
  } catch (error) {
    console.error('Error fetching contact information:', error);
  }
});

</script>

<template>
  <footer id="footer">
    <div class="main-container">
      <section id="bottom-nav">
        <div id="bottom-menu">
          <div id="bottom-about"> 
            <h3>PT Stechoq Robotika Indonesia</h3>
            <address>
              Research, Develop, & Build Robotics for medical, <br>
              educational, and industrial purposes
            </address>
            <div class="socmed">
              <a href="//www.instagram.com/stechoq/" target="_blank">
                <img src="src\assets\img\icon\instagram.svg" alt="Instagram">
              </a>
              <a href="//www.youtube.com/channel/UCHFzQRs5xuTMc7RinkMVwfA" target="_blank">
                <img src="src\assets\img\icon\youtube.svg" alt="Youtube">
              </a>
              <a href="//www.youtube.com/channel/UCHFzQRs5xuTMc7RinkMVwfA" target="_blank">
                <img src="src\assets\img\icon\linkedin.svg" alt="Linkedin">
              </a>
              <a href="//twitter.com/stechoq/" target="_blank">
                <img src="src\assets\img\icon\twitter.svg" alt="Twitter">
              </a>
            </div>
          </div>
          <contact v-for="(contact,index) in contactInfo" :key="index">
            <h3>Contact</h3>
            <!-- <a>(0274) 282 9384
            </a>
            <a>info@stechoq.com </a>
            <a>Jalan Belimbing Perumahan <br>
              Sidoarum Blok II No.A17, <br>
              Kramat, Sidoarum, Godean, <br>
              Sleman Regency, Special <br>
              Region of Yogyakarta 55564</a> -->
              <a>{{ contact.phone }}
              </a>
              <a>{{ contact.email }}</a>
              <a>{{ contact.address }}</a>
          </contact>
        </div>
      </section>
    </div>
  </footer>
</template>
