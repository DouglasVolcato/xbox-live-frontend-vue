<template>
  <HtmlComponent :content="gamesAdminController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeGamesAdminControllerFactory } from "../../factories/controllers/gamesAdmin-controller-factory";
import { onMounted } from "vue";

const router = useRouter();
const gamesAdminController = makeGamesAdminControllerFactory();

onMounted(() => {
  gamesAdminController.setGameList(gamePageNavitation);
});

function gamePageNavitation() {
  router.push("/game-edition-admin");
}
</script>
