<template>
  <p>Teste</p>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { makeRouteComposerFactory } from "../../factories/routes/route-composer-factory";
const router = useRouter();
const routes = makeRouteComposerFactory();

onMounted(() => {
  routes.compose(setRoute);
});

function setRoute(route) {
  router.push(route);
}
</script>
