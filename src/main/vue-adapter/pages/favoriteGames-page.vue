<template>
  <HtmlComponent :content="favoriteGamesController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeFavoriteGamesControllerFactory } from "../../factories/controllers/favoriteGames-controller-factory";

const router = useRouter();
const favoriteGamesController = makeFavoriteGamesControllerFactory();

window.onload = () => {
  favoriteGamesController.setGameList(gameSelected);
  favoriteGamesController.updateHeader();
};

function gameSelected() {
  router.push("/game-view");
}
</script>
