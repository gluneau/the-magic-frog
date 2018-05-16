<template>
  <b-col sm="12" md="6">
    <div class="archivedStory">
      <h3>
        <a href="#" v-b-modal="'archivedStoryModal' + meta.storyNumber">
          The Magic Story #{{ meta.storyNumber }}
        </a>
      </h3>
      <a href="#" v-b-modal="'archivedStoryModal' + meta.storyNumber" class="cover" :style="'background-image: url(' + image + ')'"></a>
      <audio controls v-if="hasAudio">
        <source :src="'/audio/the-magic-story-' + meta.storyNumber + '.mp3'" type="audio/mpeg">
        Your browser does not support the audio element. :(
        You can download the mp3 file here: <a href="">https://the-magic-frog.com/audio/the-magic-story-{{ meta.storyNumber }}.mp3</a>
      </audio>
      <div class="no-audio" v-else>The audio version will be available once the story is completed!</div>
    </div>

    <b-modal :id="'archivedStoryModal' + meta.storyNumber" :title="'The Magic Story #' + meta.storyNumber" size="lg" hide-footer>
      <h1 class="mb-5">{{ meta.startPhrase }}</h1>
      <StoryPart v-for="(part, index) in meta.commands" :key="index" :part="part" />
    </b-modal>
  </b-col>
</template>

<script>
  import StoryPart from '~/components/StoryPart'
  import axios from 'axios'

  export default {
    components: {
      StoryPart
    },
    props: ['story'],
    data() {
      return {
        hasAudio: false
      }
    },
    computed: {
      meta() {
        return JSON.parse(this.story.json_metadata);
      },
      image() {
        let image = null;
        this.meta.commands.forEach(command => {
          if (command.hasOwnProperty('image') && command.image) {
            image = command.image;
          }
        });

        return image || 'https://steemitimages.com/DQmeK9D1q35gERzGWfQBD9MKGzuU5wjDNSM1q561dbGxdmL/avatar.png';
      }
    },
    mounted() {
      axios.get('/audio/the-magic-story-' + this.meta.storyNumber + '.mp3').then(res => {
        this.hasAudio = res.status === 200;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
</script>

<style lang="sass">
  .archivedStory
    border: solid 1px #ccc
    border-radius: 4px
    overflow: hidden
    h3
      margin: 15px 0
      a
        color: #000
        &:hover
          text-decoration: none
    .cover
      display: block
      height: 500px
      background-position: center center
      background-size: cover
      border-top: solid 1px #ccc
      border-bottom: solid 1px #ccc
    audio
      width: 100%
      float: left
    .no-audio
      text-align: center
      padding: 6px 5px
      vertical-align: middle
      color: #aaa
      font-size: 13px

  @media (max-width: 991px)
    .archivedStory
      .cover
        height: 350px

  @media (max-width: 786px)
    .archivedStory
      .cover
        height: 250px
</style>