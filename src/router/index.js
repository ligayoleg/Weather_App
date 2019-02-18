import Vue from "vue";
import Router from "vue-router";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ShowWeather from "@/components/ShowWeather";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/showWeather",
      name: "Show Weather",
      component: ShowWeather
    }
  ]
});
