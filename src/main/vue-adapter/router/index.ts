import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/login-page.vue";
import FavoriteGames from "../pages/favoriteGames-page.vue";
import GameList from "../pages/gameList-page.vue";
import GameView from "../pages/gameView-page.vue";
import Homepage from "../pages/home-page.vue";
import LoggedUser from "../pages/loggedUser-page.vue";
import ProfileCreation from "../pages/profileCreation-page.vue";
import ProfileList from "../pages/profileList-page.vue";
import Register from "../pages/register-page.vue";
import GamesAdmin from "../pages/gamesAdmin-page.vue";
import HomeAdmin from "../pages/homeAdmin-page.vue";
import GameCreationAdmin from "../pages/gameCreationAdmin.vue";
import UsersAdmin from "../pages/usersAdmin-page.vue";
import GameEditionAdmin from "../pages/gameEditionAdmin.vue";
import UserEditionAdmin from "../pages/userEditionAdmin-page.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "Login",
    component: Login,
  },
  { path: "/register", name: "Register", component: Register },
  { path: "/profile-list", name: "ProfileList", component: ProfileList },
  {
    path: "/profile-creation",
    name: "ProfileCreation",
    component: ProfileCreation,
  },
  { path: "/logged-user", name: "LoggedUser", component: LoggedUser },
  { path: "/favorite-games", name: "FavoriteGames", component: FavoriteGames },
  { path: "/game-list", name: "GameList", component: GameList },
  { path: "/game-view", name: "GameView", component: GameView },
  { path: "/home-page", name: "Homepage", component: Homepage },
  { path: "/home-admin", name: "HomeAdmin", component: HomeAdmin },
  { path: "/games-admin", name: "GamesAdmin", component: GamesAdmin },
  { path: "/users-admin", name: "UsersAdmin", component: UsersAdmin },
  {
    path: "/game-creation-admin",
    name: "GameCreationAdmin",
    component: GameCreationAdmin,
  },
  {
    path: "/game-edition-admin",
    name: "GameEditionAdmin",
    component: GameEditionAdmin,
  },
  {
    path: "/user-edition-admin",
    name: "UserEditionAdmin",
    component: UserEditionAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
