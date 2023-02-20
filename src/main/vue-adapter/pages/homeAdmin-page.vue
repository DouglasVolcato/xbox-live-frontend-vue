<template>
  <HtmlComponent :content="homeAdminController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeHomeAdminControllerFactory } from "../../factories/controllers/homeAdmin-controller-factory";
import { onMounted } from "vue";

const router = useRouter();
const homeAdminController = makeHomeAdminControllerFactory();

onMounted(() => {
  homeAdminController.validateAdmin(validateAdmin);
});

function validateAdmin(result) {
  if (!result) {
    router.push("/login");
  }
}
</script>
