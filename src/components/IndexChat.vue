<template>
  <div class="IndexChat">
    <section class="IndexChat-conversation">
      <div v-if="currentAnimal" class="IndexChat-Answer">
        <img src="" alt="">
        <p>{{ currentAnimal }}</p>
        <div class="IndexChat-icons">
        </div>
      </div>
      <div v-if="this.$store.state.response" class="IndexChat-Answer IndexChat-chatAnswer">
        <img src="" alt="">
        <p>{{ this.$store.state.response }}</p>
        <div class="IndexChat-icons">
        </div>
      </div>
    </section>
    <section class="IndexChat-input">
      <input type="text" class="IndexChat-text" v-model="text">
      <input type="submit" class="IndexChat-button" @click.prevent="onSubmit">
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      text: '',
      currentAnimal: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('onSubmit', this.text);
      this.currentAnimal = this.text;
      this.text = '';
    }
  }
})

</script>

<style lang="scss" scoped>
.IndexChat {
  height: 100%;
  .IndexChat-conversation {
    height: 90%;
    .IndexChat-Answer {
      width: 60%;
      padding: 15px 0;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 10fr 2fr;
      background-color: rgb(68, 67, 67);

      p {
        margin: 8px;
      }
    }
    
    .IndexChat-chatAnswer {
      background-color: rgb(124, 123, 123);
    }

    .IndexChat-icons {
      width: 20px;
      height: 20px;
      background-color: red;
    }
  }

  .IndexChat-input {
    display: flex;
    justify-content: center;
    height: 10%;

    .IndexChat-text {
      height: 30px;
      width: 70%;
    }
    .IndexChat-button {
      height: 30px;
    }
  }
}

</style>
