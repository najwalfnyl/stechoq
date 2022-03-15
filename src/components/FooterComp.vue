<script setup>
const d = new Date();
const year = d.getFullYear();
</script>

<template>
  <footer id="footer">
    <div class="container">
      <section id="bottom-nav">
        <div class="grid grid-cols-6">
          <div class="col-span-2">test</div>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
        </div>
      </section>
      <hr />
      <section id="copyright">
        <p>&COPY; {{ year }} &mdash; {{ siteMeta.title }}</p>
      </section>
    </div>
  </footer>
</template>
