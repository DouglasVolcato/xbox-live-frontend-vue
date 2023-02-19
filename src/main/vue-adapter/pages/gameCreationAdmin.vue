<template>
  <HtmlComponent :content="gameCreationAdminController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeGameCreationAdminControllerFactory } from "../../factories/controllers/gameCreationAdmin-controller-factory";

const router = useRouter();
const gameCreationAdminController = makeGameCreationAdminControllerFactory();

window.onload = () => {
  gameCreationAdminController.createGame(navigateToGameList);
};

function navigateToGameList() {
  router.push("/games-admin");
}
</script>
