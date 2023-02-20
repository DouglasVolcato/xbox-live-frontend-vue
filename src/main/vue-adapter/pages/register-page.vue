<template>
  <HtmlComponent :content="registerController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeRegisterControllerFactory } from "../../factories/controllers/register-controller-factory";
import { onMounted } from "vue";

const router = useRouter();
const registerController = makeRegisterControllerFactory();

onMounted(() => {
  registerController.registerUser(registration);
});

function registration() {
  router.push("/login");
}
</script>
