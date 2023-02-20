<template>
  <HtmlComponent :content="loggedUserController.renderPage()" />
  <RouteComposer />
</template>

<script setup>
import HtmlComponent from "../helpers/htmlComponent-helper.vue";
import RouteComposer from "../helpers/routeComposer-helper.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { makeLoggedUserControllerFactory } from "../../factories/controllers/loggedUser-controller-factory";

const router = useRouter();
const loggedUserController = makeLoggedUserControllerFactory();

onMounted(() => {
  loggedUserController.getUserInfo();
  loggedUserController.updateUser(updateUser);
  loggedUserController.deleteUser(deleteUser);
  loggedUserController.getProfileInfo();
  loggedUserController.updateProfile(updateProfile);
  loggedUserController.deleteProfile(deleteProfile);
  loggedUserController.logout(logout);
});

function updateUser() {
  router.push("/logged-user");
}

function updateProfile() {
  router.push("/logged-user");
}

function deleteProfile() {
  router.push("/profile-list");
}

function deleteUser() {
  router.push("/login");
}

function logout() {
  router.push("/login");
}
</script>
