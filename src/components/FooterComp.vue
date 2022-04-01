<script setup>
const d = new Date();
const year = d.getFullYear();
</script>

<template>
  <footer id="footer">
    <div class="main-container">
      <section id="bottom-nav">
        <div id="bottom-menu">
          <div id="bottom-about">
            <h3>PT Stechoq Robotika Indonesia</h3>
            <address>
              Jl Belimbing A17 Perumahan Sidoarum Blok II, Godean, Kramat,
              Sidoarum, Kabupaten Sleman, Daerah Istimewa Yogyakarta
            </address>
          </div>
          <div>
            <h3>Tentang Kami</h3>
            <router-link to="#">Visi Misi</router-link>
            <router-link to="#">Profil Founder</router-link>
          </div>
          <div>
            <h3>Product</h3>
            <router-link to="#">Ventilator ICU</router-link>
            <router-link to="#">Automatic Guided Vehicle</router-link>
            <router-link to="#">Mini Production System</router-link>
            <router-link to="#">Digital Control System</router-link>
          </div>
          <div class="md:block hidden">
            <h3>Social Media</h3>
            <a href="//twitter.com/stechoq/" target="_blank">Twitter</a>
            <a href="//facebook.com/stechoq" target="_blank">Facebook</a>
            <a href="//www.instagram.com/stechoq/" target="_blank">Instagram</a>
            <a href="//www.youtube.com/channel/UCHFzQRs5xuTMc7RinkMVwfA" target="_blank">YouTube</a>
          </div>
        </div>
      </section>
      <hr class="border" />
      <section id="copyright">
        <p>&COPY; {{ year }} &mdash; {{ siteMeta.title }}</p>
      </section>
    </div>
  </footer>
</template>
