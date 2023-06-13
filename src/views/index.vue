<script setup lang="ts">
</script>

<template>
  <div class="home-page">
    <div class="wrapper">
      <div class="wrapper-header">
        <div class="snake-body">
          <div class="snake-body-item"></div>
        </div>
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
      border: 1px solid #000;
      border-radius: 8px;
      padding-top: 25px;
      .wrapper-header{
        width: 440px;
        height: 440px;
        margin: 0 auto;
        border: 1px solid #000;
        border-radius: 8px;
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

