<template>
  <HtmlComponent :content="gameViewController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import { onMounted } from "vue";
import { makeGameViewControllerFactory } from "../../factories/controllers/gameView-controller-factory";
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";

const gameViewController = makeGameViewControllerFactory();

onMounted(() => {
  gameViewController.setGameInfo();
  gameViewController.favoriteGame();
  gameViewController.updateHeader();
});
</script>
