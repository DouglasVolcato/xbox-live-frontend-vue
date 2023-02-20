<template>
  <HtmlComponent :content="usersAdminController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeUsersAdminControllerFactory } from "../../factories/controllers/usersAdmin-controller-factory";
import { onMounted } from "vue";

const router = useRouter();
const usersAdminController = makeUsersAdminControllerFactory();

onMounted(() => {
  usersAdminController.setUserList(navigateToUserEditon);
});

function navigateToUserEditon() {
  router.push("/user-edition-admin");
}
</script>
