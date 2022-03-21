<template>
  <section id="headings" class="my-8 pb-8">
    <div class="container">
      <div class="grid grid-cols-2 gap-32">
        <h1 class="text-6xl font-bold text-gray-900 py-6">
          <slot name="title" />
        </h1>
        <p class="text-xl flex items-center p-6">
          <slot name="subtitle" />
        </p>
      </div>
    </div>
  </section>
</template>
