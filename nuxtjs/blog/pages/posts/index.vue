<template>
  <div class="posts-page">
    <section class="featured-posts">

      <PostPreview
        id="1"
        thumbnail="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
        title="Hello there"
        previewText="This is my first post"
      />
      <PostPreview
        id="2"
        thumbnail="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
        title="Hello there 2"
        previewText="This is my second post"
      />
      <PostPreview
        id="3"
        thumbnail="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
        title="Hello there 3"
        previewText="This is my third post"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview";
export default {
  components: {
    PostPreview
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
