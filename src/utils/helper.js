// function vite assets resolver
const assetsImg = function resolver(file) {
  return new URL(`/src/assets/img/${file}`, import.meta.url).href;
};

const assetsImgs = function resolver(file) {
  return new URL(`/src/assets/img/${file}`, import.meta.url).href;
};

// function date utc formatter
const formatDate = function formatDate(date) {
  const dateString = new Intl.DateTimeFormat('en-ID', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date(date));
  return dateString;
};

export { assetsImg, assetsImgs, formatDate };
