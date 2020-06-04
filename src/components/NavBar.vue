<template>
  <div class="px-4 py-2">
    <router-link to="/" class="float-left">
      <img src="../assets/logo-sm.svg" alt="" class="nav-logo " />
    </router-link>

    <vue-navigation-bar :options="navbarOptions" />
  </div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";

export default {
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        // brandImagePath: "../",
        // brandImage: require("../src/assets/images/logo-sm.svg"),
        brandImageAltText: "brand-image",
        // collapseButtonImageOpen: require("../src/assets/images/collapse-menu-dark.png"),
        // collapseButtonImageClose: require("../src/assets/images/times.png"),
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsLeft: [
          {
            type: "link",
            text: "Home",
            path: "./"
          },
          {
            type: "link",
            text: "Services",
            subMenuOptions: [
              {
                type: "link",
                text: "On-site Self Storage",
                subText: "You're a presentation tool!",
                path: "./self-storage",
                iconLeft: '<i class="fa fa-building fa-fw"></i>'
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Portable Storage Boxes",
                subText: "You're a presentation tool!",
                path: "./locations",
                iconLeft: '<i class="fa fa-truck fa-fw"></i>'
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Rent a Workspace",
                subText:
                  "I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.",
                path: "./blog",
                iconLeft: '<i class="fa fa-wrench fa-fw"></i>'
              }
            ]
          },
          {
            type: "link",
            text: "Contact",
            subMenuOptions: [
              {
                type: "link",
                text: "Customer Service",
                path: "./customer-service"
              },
              {
                type: "link",
                text: "Accounting",
                path: "./accounting"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Reception",
                path: "./reception",
                iconLeft:
                  '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>'
              }
            ]
          },
          {
            type: "link",
            text: "Pricing",
            path: "./pricing",
            iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>'
          }
        ]
        // menuOptionsRight: [
        //   {
        //     type: "button",
        //     text: "Signup",
        //     path: "./signup",
        //     class: "button-red"
        //   },
        //   {
        //     type: "button",
        //     text: "Login",
        //     path: "./login",
        //     iconRight:
        //       '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
        //   }
        // ]
      }
    };
  }
};
</script>

<style lang="scss">
.nav-logo {
  height: 50px;
  width: 50px;
}
</style>
