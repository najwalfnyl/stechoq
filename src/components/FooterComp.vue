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
            <a href="#">Visi Misi</a>
            <a href="#">Profil Founder</a>
          </div>
          <div>
            <h3>Product</h3>
            <a href="#">Ventilator ICU</a>
            <a href="#">Automatic Guided Vehicle</a>
            <a href="#">Mini Production System</a>
            <a href="#">Digital Control System</a>
          </div>
          <div class="md:block hidden">
            <h3>Social Media</h3>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
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
