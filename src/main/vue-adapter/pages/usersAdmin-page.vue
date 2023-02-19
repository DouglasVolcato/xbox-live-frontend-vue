<template>
  <HtmlComponent :content="usersAdminController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { makeUsersAdminControllerFactory } from "../../factories/controllers/usersAdmin-controller-factory";

const router = useRouter();
const usersAdminController = makeUsersAdminControllerFactory();

window.onload = () => {
  usersAdminController.setUserList(navigateToUserEditon);
};

function navigateToUserEditon() {
  router.push("/user-edition-admin");
}
</script>
