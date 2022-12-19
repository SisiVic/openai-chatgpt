<template>
  <div class="IndexChat">
    <section class="IndexChat-conversation">
      <div class="IndexChat-Answer">
        <img src="" alt="">
        <p>Hola</p>
        <div class="IndexChat-icons">
        </div>
      </div>
    </section>
    <section class="IndexChat-input">
      <input type="text" class="IndexChat-text">
      <input type="submit" class="IndexChat-button">
    </section>
  </div>
</template>

<script setup>

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
