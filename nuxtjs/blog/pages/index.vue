<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the laterst tech news!</h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";
import { reject } from 'q';
export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
          { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: "https://www.canadianlawyermag.com/staticcontent/images/img2974_Hero_LegalTech2019.jpg"},
          { id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: "https://www.canadianlawyermag.com/staticcontent/images/img2974_Hero_LegalTech2019.jpg"},
          { id: '3', title: 'Third Post', previewText: 'This is our third post!', thumbnail: "https://www.canadianlawyermag.com/staticcontent/images/img2974_Hero_LegalTech2019.jpg"}
        ]})
      }, 1500)
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(e)
    })
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>

<style scope>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
