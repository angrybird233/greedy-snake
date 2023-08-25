<script lang="ts">
// import { ref, reactive, onMounted, defineComponent } from 'vue';
// import Food from '../controller/Food'
// import Snake from '../controller/Snake'
// import Game from '../controller/Game'
export default defineComponent({
  setup() {
    // const foodRef = ref(null)
    // const snakeRef = ref(null)
    // const snakePostions = reactive([])

    // function resetFood() {
    //   const food = new Food(foodRef.value);
    //   food.setRandomPosition()
    // }
    
    // const game = new Game();
    // game.start();
    
    // const snake = new Snake(snakeRef);
    // setInterval(() => {
    //   snake.move();
    //   console.log(snake.headPos);

    // },800)

    // onMounted(() => {
    //   resetFood()
    // })
    return {
      // foodRef,
      // snakePostions
    }
  }
})
</script>

<template>
  <div class="home-page">
    <div class="wrapper">
      <div class="wrapper-header">
        <div class="snake-body" ref="snakeRef">
          <div class="snake-body-item" v-for="(item,index) in snakePostions" :key="index"></div>
        </div>
        <div class="food" ref="foodRef"></div>
        <!-- <div class="reset">重新开始</div> -->
      </div>
      <div class="wrapper-footer">
        <div class="score">分数：0 分</div>
        <div class="game-level">难度等级：1 级</div>
      </div>
      <div class="action-buttons">
        <button class="button-top">↑</button>
        <button class="button-bottom">↓</button>
        <button class="button-left">←</button>
        <button class="button-right">→</button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .home-page {
    color: #000;
    width: 100%;
    padding-top: 40px;
    overflow: hidden;
    .wrapper{
      width: 500px;
      height: 750px;
      border: 10px solid rgb(7, 201, 223);
      border-radius: 8px;
      padding-top: 25px;
      .snake-body{
        display: flex;
        position: absolute;
        top: 0;
        left:0;
      }
      .wrapper-header{
        width: 440px;
        height: 440px;
        margin: 0 auto;
        border: 1px solid rgb(7, 201, 223);
        position: relative;
        .snake-body-item{
          width: 20px;
          height: 20px;
          border: 1px solid #fff;
          background: #000;
        }
        .food{
          width: 20px;
          height: 20px;
          background: #f00;
          position: absolute;
          top: 100px;
          left: 100px;
          animation: blink 1s linear infinite;
        }

        @keyframes blink {
          0%{
            opacity: 1;
          }
          50%{
            opacity: 0;
          }
          100%{
            opacity: 1;
          }
        }
      }
      .wrapper-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        padding: 25px;
        font-weight: 600;
      }
      .action-buttons{
        font-size: 20px;
        height: 200px;
        position: relative;
        border-top: 1px solid #000;
        button{ 
          width: 60px;
          height: 60px;
          border: 1px solid #000;
          background: transparent;
          outline: none;
          position: absolute;
        }
        button:active{
          background: #23a2e2;
          color: #fff;
        }
        .button-left{
          top: 70px;
          left: 100px;
        }
        .button-right{
          top: 70px;
          left: 300px;
        }
        .button-top {
          top: 20px;
          left: 200px;
        }
        .button-bottom {
          top: 110px;
          left: 200px;
        }
      }
    }
  }
</style>

