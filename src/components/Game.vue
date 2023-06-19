<template>
  <canvas ref="canvas" width="400" height="400"></canvas>
</template>

<script>
import { ref, onMounted, watch, reactive } from "vue";

export default {
  setup() {
    const canvas = ref(null);
    const context = ref(null);
    const gameState = reactive({
      snake: [{ x: 8, y: 8 }],
      food: { x: 1, y: 1 },
      direction: "right",
      score: 0,
      gameover: false,
    });

    function drawSnake() {
      const { snake } = gameState;
      snake.forEach((segment) => {
        context.value.fillRect(segment.x * 20, segment.y * 20, 20, 20);
      });
    }

    function drawFood() {
      const { food } = gameState;
      context.value.fillRect(food.x * 20, food.y * 20, 20, 20);
    }

    function drawScore() {
      context.value.fillStyle = "black";
      context.value.font = "20px Arial";
      context.value.fillText(gameState.score, 20, 30);
    }

    function moveSnake() {
      const { snake, direction } = gameState;
      const head = { ...snake[0] };
      switch (direction) {
        case "left":
          head.x--;
          break;
        case "right":
          head.x++;
          break;
        case "up":
          head.y--;
          break;
        case "down":
          head.y++;
          break;
      }
      snake.unshift(head);
      if (head.x === gameState.food.x && head.y === gameState.food.y) {
        gameState.score++;
        generateFood();
      } else {
        snake.pop();
      }
    }

    function generateFood() {
      gameState.food = {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      };
    }

    function gameLoop() {
      context.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
      drawSnake();
      drawFood();
      drawScore();
      moveSnake();

      const { snake } = gameState;
      const head = snake[0];
      if (
        head.x < 0 ||
        head.x >= 500 ||
        head.y < 0 ||
        head.y >= 500 ||
        snake.some((segment, index) => index > 0 && segment.x === head.x && segment.y === head.y)
      ) {
        gameState.gameover = true;
      }
    }

    function keyDownHandler(event) {
      switch (event.key) {
        case "ArrowLeft":
          gameState.direction = "left";
          break;
        case "ArrowRight":
          gameState.direction = "right";
          break;
        case "ArrowUp":
          gameState.direction = "up";
          break;
        case "ArrowDown":
          gameState.direction = "down";
          break;
      }
    }

    onMounted(() => {
      context.value = canvas.value.getContext("2d");
      console.log(context);
      generateFood();
      window.addEventListener("keydown", keyDownHandler);
      setInterval(gameLoop, 500);
    });

    watch(() => gameState.gameover, (gameover) => {
      if (gameover) {
        window.removeEventListener("keydown", keyDownHandler);
        alert("Game Over!");
      }
    });

    return {
      canvas,
    }
  }
}
  </script>