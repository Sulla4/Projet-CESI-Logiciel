import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue'
import Restaurant from "./pages/Restaurant";
import UserSettings from "./pages/UserSettings";
import Order from "./pages/Order";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardRestaurant = () => import("./components/BoardRestaurant.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home },
    {
        path: '/restaurant/:id',
        name: 'restaurant',
        component: Restaurant
    },
    {
        path: '/user-settings',
        name: 'userSettings',
        component: UserSettings
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    },
    {
        path: "/login",
        name: 'login',
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    {
        path: "/restaurantUser",
        name: "restaurantUser",
        // lazy-loaded
        component: BoardRestaurant,
    },
    {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: BoardUser,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const VueApp = createApp(App);

VueApp.use(router);
VueApp.use(store);
VueApp.component("font-awesome-icon", FontAwesomeIcon);

VueApp.mount('#app');
