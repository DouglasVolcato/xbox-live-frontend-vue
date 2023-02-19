<template>
  <HtmlComponent :content="gameEditionAdminController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeGameEditionAdminControllerFactory } from "../../factories/controllers/gameEditionAdmin-controller-factory";

const router = useRouter();
const gameEditionAdminController = makeGameEditionAdminControllerFactory();

window.onload = () => {
  gameEditionAdminController.getGameInfo();
  gameEditionAdminController.updateGame(navigateToGameList);
  gameEditionAdminController.deleteGame(navigateToGameList);
};

function navigateToGameList() {
  router.push("/games-admin");
}
</script>
