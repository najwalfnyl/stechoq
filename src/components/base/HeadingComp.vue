<template>
  <section id="headings">
    <div class="main-container">
      <div id="head">
        <h1 id="title-page">
          <slot name="title" />
        </h1>
        <p id="subtitle-page">
          <slot name="subtitle" />
        </p>
        <div class="btn-heading">
          <button type="button" class=" bg-white text-black p-2 flex items-center gap-2 hover:bg-gray-200 hover:bg-opacity-50">
            <img src="src\assets\img\icon\Play.svg" alt="Icon" class="h-5 w-5 ml-2" />
              Play Video
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
