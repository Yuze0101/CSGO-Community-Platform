<template>
  <ul class="list">
      <li class="list-item">
          <img class="icon" src="../assets/icons/user.png">
      </li>
      <li class="list-item">
          <img class="icon" src="../assets/icons/user.png">
      </li>
      <li class="list-item">
          <img class="icon" src="../assets/icons/user.png">
      </li>
      <li class="list-item">
          <img class="icon" src="../assets/icons/user.png">
      </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
    .list,.list-item {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .list-item{
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .list-item:first-child {
        border-bottom:1px solid rgba(255, 255, 255, 0.5) ;
    }
</style>