<template>
  <div class="podcast">
    <h4>Podcast</h4>
    <div class="media">
      <div class="media-left">
        <a href="#"><img src="../../assets/play-button.svg" class="play-button"></a>
      </div>
      <div class="media-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis eveniet hic molestiae natus nemo quasi, reprehenderit sit. Ad iste labore, nesciunt optio quam recusandae vero voluptates. Aliquid, fugiat similique?
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'podcast-simple'
  }

</script>

<style>
  .play-button {
    height: 5%;
  }
  .podcast {
    margin-top: 20px;
    background-color: white;
    padding: 10px;
    box-shadow: lightgray;
  }
</style>
