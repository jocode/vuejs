import { createRouter, createWebHashHistory } from "vue-router";

import NoPageFound from "../modules/shared/pages/NoPageFound";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },

  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import("../modules/pokemon/layouts/PokemonLayout"),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage"
          ), // LazyLoad
      },
      {
        path: "pokemonid/:id",
        name: "pokemon-id",
        component: () => import("../modules/pokemon/pages/PokemonPage"),
        props: (route) => {
          // console.log(route)
          const pokemonId = Number(route.params.pokemonId);
          return isNaN(pokemonId) ? { pokemonId: 1 } : { pokemonId };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-about" },
      },
    ],
  },

  {
    path: "/dbz",
    name: "dbz",
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "DragonBallLayout" */ "../modules/dbz/layouts/DragonBallLayout"
      ),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () => import("../modules/dbz/pages/Characters"),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () => import("../modules/dbz/pages/About"),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: NoPageFound,
    // redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // Short for `routes: routes`
});

// Guard Global - Síncrono
/* router.beforeEach((to, from, next) => {
  // console.log({ to, from, next });
  const random = Math.random() * 100;

  if (random > 50) {
    console.log('Autenticado')
    next()
  } else {
    console.log('No Autenticado - Bloqueado por el beforeEach Guard')
    next({ name: 'pokemon-home' })
  }
}); */


// Guard Global - Asíncrono
/* const canAccess = () => {
  return new Promise((resolve) => {

    const random = Math.random() * 100;

    if (random > 50) {
      console.log("Autenticado");
      resolve(true)
    } else {
      console.log("No Autenticado - Bloqueado por el beforeEach Guard");
      resolve(false)
    }

  });
};

router.beforeEach( async (to, from, next) => {

  const authorized = await canAccess();

  authorized
    ? next()
    : next({ name: 'pokemon-home' });

}) */



export default router;
