<template>
  <HtmlComponent :content="homeController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import { makeHomePageControllerFactory } from "../../factories/controllers/homePage-controller-factory";
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();
const homeController = makeHomePageControllerFactory();

onMounted(() => {
  homeController.setGameList(gameSelected);
  homeController.updateHeader();
});

function gameSelected() {
  router.push("/game-view");
}
</script>
