<script setup>
const d = new Date();
const year = d.getFullYear();
</script>

<template>
  <footer id="footer">
    <div class="main-container">
      <section id="bottom-nav">
        <div id="bottom-menu">
          <div class="order-last md:order-first col-span-2">
            <h3 class="font-medium text-2xl">PT Stechoq Robotika Indonesia</h3>
            <address class="not-italic my-2">
              Jl Belimbing A17 Perumahan Sidoarum Blok II, Godean, Kramat,
              Sidoarum, Kabupaten Sleman, Daerah Istimewa Yogyakarta
            </address>
          </div>
          <div class="text-sm">
            <h3 class="font-medium text-xl">Tentang Kami</h3>
            <a class="block my-2" href="#">Visi Misi</a>
            <a class="block my-2" href="#">Profil Founder</a>
          </div>
          <div class="text-sm">
            <h3 class="font-medium text-xl">Product</h3>
            <a class="block my-2" href="#">Ventilator ICU</a>
            <a class="block my-2" href="#">Automatic Guided Vehicle</a>
            <a class="block my-2" href="#">Mini Production System</a>
            <a class="block my-2" href="#">Digital Control System</a>
          </div>
          <div class="md:block hidden text-sm">
            <h3 class="font-medium text-xl">Social Media</h3>
            <a class="block my-2" href="#">Twitter</a>
            <a class="block my-2" href="#">Facebook</a>
            <a class="block my-2" href="#">Instagram</a>
            <a class="block my-2" href="#">YouTube</a>
          </div>
        </div>
      </section>
      <hr class="border" />
      <section id="copyright">
        <p class="font-medium py-4">&COPY; {{ year }} &mdash; {{ siteMeta.title }}</p>
      </section>
    </div>
  </footer>
</template>
