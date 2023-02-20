<template>
  <HtmlComponent :content="gameListController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeGameListControllerFactory } from "../../factories/controllers/gameList-controller-factory";
import { onMounted } from "vue";

const router = useRouter();
const gameListController = makeGameListControllerFactory();

onMounted(() => {
  gameListController.setGameList(gameSelected);
  gameListController.updateHeader();
});

function gameSelected() {
  router.push("/game-view");
}
</script>
