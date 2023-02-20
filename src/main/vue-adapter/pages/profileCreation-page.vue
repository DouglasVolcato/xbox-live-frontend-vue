<template>
  <HtmlComponent :content="profileCreationController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeProfileCreationControllerFactory } from "../../factories/controllers/profileCreation-controller-factory";
import { onMounted } from "vue";

const router = useRouter();
const profileCreationController = makeProfileCreationControllerFactory();

onMounted(() => {
  profileCreationController.createProfile(createProfile);
});

function createProfile() {
  router.push("/profile-list");
}
</script>
