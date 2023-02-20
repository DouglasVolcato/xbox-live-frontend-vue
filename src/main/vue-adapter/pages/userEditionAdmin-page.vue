<template>
  <HtmlComponent :content="userEditionAdminController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeUserEditionAdminControllerFactory } from "../../factories/controllers/userEditionAdmin-controller-factory";
import { onMounted } from "vue";

const router = useRouter();
const userEditionAdminController = makeUserEditionAdminControllerFactory();

onMounted(() => {
  userEditionAdminController.getUserInfo();
  userEditionAdminController.updateUser(navigateToUsersList);
  userEditionAdminController.deleteUser(navigateToUsersList);
});

function navigateToUsersList() {
  router.push("/users-admin");
}
</script>
