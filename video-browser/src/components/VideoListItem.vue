<template>
    <li 
      class="list-group-item media"
      @click="onVideoSelect"
    >
        <img class="resposive" :src="thumbnailUrl"/>
        <div class="media-body">
          {{ videoTittle }}
        </div>
    </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
    videoTittle() {
      return this.video.snippet.title;
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video);
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}

img {
  margin-right: 15px;
}

</style>