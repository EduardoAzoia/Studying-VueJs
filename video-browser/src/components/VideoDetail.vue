<template>
    <div v-if="video" class="col-md-8">
        <div class="videoWrapper">
            <iframe class="embed-responsive-item" :src="videoUrl" allowfullscreen />
        </div>
        <div class="details">
            <h4>{{ video.snippet.title }}</h4>
            <p>{{video.snippet.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: ['video'],
    computed: {
        videoUrl() {
            const { videoId } = this.video.id;
            return `https://www.youtube.com/embed/${videoId}`;
        }
    },
    methods: {
    }

}
</script>

<style>
.details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>