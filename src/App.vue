<template>
  <div>
    <!-- Header -->
  <div class="header">
      <div class="search__container">
          
          <input class="search__input" type="text" placeholder="Search for photo">
      </div>
  </div>

  <!-- Photo Grid -->
  <div class="row"> 
      <section id="photos">
          <img src="https://www.w3schools.com/w3images/wedding.jpg" >
          <img src="https://www.w3schools.com/w3images/underwater.jpg" >
          <img src="https://www.w3schools.com/w3images/wedding.jpg" >
          <img src="https://www.w3schools.com/w3images/underwater.jpg" >
          <img src="https://www.w3schools.com/w3images/wedding.jpg" >
          <img src="https://www.w3schools.com/w3images/wedding.jpg" >
          <img src="https://www.w3schools.com/w3images/underwater.jpg" >
          <img src="https://www.w3schools.com/w3images/wedding.jpg" >
          <img src="https://www.w3schools.com/w3images/wedding.jpg" >
      </section>

  </div>
  </div>
  
</template>

<script>

export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      images: [],
      clientID: this.$cliend_id
    };
  },
  mounted() {
    this.getImages();
  },
  methods: {
    getImages() {
      //this.processingList = true;
      //this.moreText = "Loading...";
      const that = this;
      this.$store
        .dispatch("images/fetchUnsplashPhotos", {
          cliend_id: this.clientID
        })
        .then(result => {
          that.allImages = result.data;
          console.log(allImages);
        });
    }
  }
};
</script>
<style lang="scss">
@import "App.scss";
</style>
