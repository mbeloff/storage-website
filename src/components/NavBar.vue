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
        // showBrandImageInMobilePopup: true,
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
                subText: "Hire one of our secure, on-site storage boxes.",
                path: "./self-storage",
                iconLeft: '<i class="fa fa-building fa-fw"></i>'
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Portable Storage Boxes",
                subText: "We deliver the box, you load it up, we store it.",
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
                  "Hire a multi-purpose workspace with single- and three-phase power, racking and hoist",
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
                text: "Where to find us",
                path: "./location"
              },
              {
                type: "link",
                text: "Make an enquiry",
                path: "./accounting"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "1800 24 68 69",
                path: "./reception",
                iconLeft: '<i class="fa fa-phone-rotary fa-fw"></i>'
              }
            ]
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
