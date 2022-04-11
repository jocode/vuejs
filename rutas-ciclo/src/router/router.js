import { createRouter, createWebHashHistory } from "vue-router";

import NoPageFound from "../modules/shared/pages/NoPageFound";

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
        path: "pokemonid/:pokemonId",
        name: "pokemon-id",
        component: () => import("../modules/pokemon/pages/PokemonPage"),
        props: (route) => {
          // console.log(route)
          const pokemonId = Number(route.params.pokemonId);
          return isNaN(pokemonId) ? { pokemonId: 1 } : { pokemonId };
        },
      },
      {
        path: '',
        redirect: { name: 'pokemon-about' }
      }
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

export default router;
