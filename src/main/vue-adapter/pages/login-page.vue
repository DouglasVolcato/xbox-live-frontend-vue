<template>
  <HtmlComponent :content="loginController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import { makeLoginControllerFactory } from "../../factories/controllers/login-controller-factory";
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();
const loginController = makeLoginControllerFactory();

onMounted(() => {
  loginController.makeLogin(login);
});

function login() {
  router.push("/profile-list");
}
</script>
