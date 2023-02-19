<template>
  <HtmlComponent :content="homeAdminController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeHomeAdminControllerFactory } from "../../factories/controllers/homeAdmin-controller-factory";

const router = useRouter();
const homeAdminController = makeHomeAdminControllerFactory();

window.onload = () => {
  homeAdminController.validateAdmin(validateAdmin);
};

function validateAdmin(result) {
  if (!result) {
    router.push("/login");
  }
}
</script>
