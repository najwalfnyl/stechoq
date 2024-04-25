<template>
    <div>
      <button @click="leftClick">left</button>
      <button @click="rightClick">right</button>
      <Motion
        :values="styleProps"
        tag="div"
        class="carousel-container"
        ref="container"
      >
        <template slot-scope="_styleProps">
          <div
            class="img-wrapper"
            v-for="(style, idx) in _styleProps"
            :key="idx"
            :ref="'box' + idx"
            :style="{
              transform: `translateX(${style.translateX}px) scale(${style.scale})`,
              transformOrigin:
                idx < midIdx
                  ? 'center left'
                  : idx === midIdx
                  ? 'center'
                  : 'center right',
              zIndex: idx < midIdx ? 0 : idx === midIdx ? 1 : midIdx - idx + 1,
            }"
          >
            <img :src="images[idx].url" @load="loadedImgCount++" />
          </div>
        </template>
      </Motion>
    </div>
  </template>
  <script>
  import { Motion } from "vue-motion";
  
  function getWidth(ele) {
    return ele ? ele.clientWidth : 0;
  }
  const getInitialProps = (containerEle) => ({
    left: {
      translateX: () => 0,
      scale: 0.85,
    },
    middle: {
      translateX: (ele) => (getWidth(containerEle) - getWidth(ele)) / 2,
      scale: 1,
    },
    right: {
      translateX: (ele) => getWidth(containerEle) - getWidth(ele),
      scale: 0.85,
    },
  });
  
  export default {
    data() {
      return {
        images: [
          {
            url:
              "https://p1.music.126.net/bUBKITTNPjGwCQIHgEfMeQ==/109951163991946900.jpg",
          },
          {
            url:
              "https://p1.music.126.net/GsPi2mWpUPf96AP91jbFEw==/109951163991276093.jpg",
          },
          {
            url:
              "https://p1.music.126.net/9ca7Dq6piQFgIQhDf-U-nw==/109951163991948354.jpg",
          },
          {
            url:
              "https://p1.music.126.net/erzqsRbQLIA5vb5lM0TSrw==/109951163991284673.jpg",
          },
          {
            url:
              "https://p1.music.126.net/b-ImQI_I85MlDJjfOKLNyw==/109951163989481527.jpg",
          },
          {
            url:
              "https://p1.music.126.net/luglqayZ4bVJRimffJk72A==/109951163991284046.jpg",
          },
          {
            url:
              "https://p1.music.126.net/IdiKVv1W1IwN0s1s2ZOOXg==/109951163991277253.jpg",
          },
          {
            url:
              "https://p1.music.126.net/auTfwjSVNXhEVQ9ywGhreQ==/109951163991950577.jpg",
          },
          {
            url:
              "https://p1.music.126.net/7HqsckYTUG-TJIrRY0I0fw==/109951163991271391.jpg",
          },
        ],
        midIdx: 1,
        loadedImgCount: 0,
      };
    },
    components: {
      Motion,
    },
    methods: {
      leftClick() {
        if (this.midIdx < this.images.length - 2) {
          this.midIdx += 1;
        }
      },
      rightClick() {
        if (this.midIdx > 1) {
          this.midIdx -= 1;
        }
      },
      updateStyleProps() {
        const initialProps = getInitialProps(
          this.$refs.container ? this.$refs.container.$el : null
        );
        return this.images.map((_, idx) => {
          const { translateX, scale } =
            idx < this.midIdx
              ? initialProps.left
              : idx === this.midIdx
              ? initialProps.middle
              : initialProps.right;
          const imgWrapper = this.$refs["box" + idx]
            ? this.$refs["box" + idx][0]
            : null;
          return {
            translateX: translateX(imgWrapper),
            scale: scale,
          };
        });
      },
    },
    computed: {
      styleProps: function () {
        console.log("loadedImgCount: ", this.loadedImgCount);
        if (this.loadedImgCount < this.images.length) {
          return this.images.map((_, idx) => ({ translateX: 0, scale: 1 }));
        }
        return this.updateStyleProps();
      },
    },
  };
  </script>
  <style scoped>
  .box {
    height: 200px;
    width: 200px;
    background-color: steelblue;
  }
  
  .carousel-container {
    height: 200px;
    position: relative;
  }
  .img-wrapper {
    height: 100%;
    font-size: 0;
    position: absolute;
  }
  .img-wrapper img {
    height: 100%;
    width: auto;
  }
  .left {
    display: none;
  }
  </style>
   