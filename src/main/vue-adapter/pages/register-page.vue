<template>
  <HtmlComponent :content="registerController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeRegisterControllerFactory } from "../../factories/controllers/register-controller-factory";

const router = useRouter();
const registerController = makeRegisterControllerFactory();

window.onload = () => {
  registerController.registerUser(registration);
};

function registration() {
  router.push("/login");
}
</script>
