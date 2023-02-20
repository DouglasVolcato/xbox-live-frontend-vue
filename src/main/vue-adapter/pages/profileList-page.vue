<template>
  <HtmlComponent :content="profileListController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeProfileListControllerFactory } from "../../factories/controllers/profileList-controller-factory";

const router = useRouter();
const profileListController = makeProfileListControllerFactory();

onMounted(() => {
  profileListController.updateProfileCards(profileSelected);
  profileListController.unlockAdminMenu(adminPageNavigation);
});

function profileSelected() {
  router.push("/home-page");
}

function adminPageNavigation() {
  router.push("/home-admin");
}
</script>
