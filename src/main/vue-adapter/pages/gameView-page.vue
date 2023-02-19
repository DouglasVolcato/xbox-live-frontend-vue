<template>
  <HtmlComponent :content="gameViewController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";

const gameViewController = makeGameViewControllerFactory();

window.onload = () => {
  gameViewController.setGameInfo();
  gameViewController.favoriteGame();
  gameViewController.updateHeader();
};
</script>
