<template>
  <div class="px-4 py-0 navi">
    <router-link to="/" class="float-left logo-link">
      <img src="../assets/logo-sm.svg" alt="" class="nav-logo " />
    </router-link>
    <vue-navigation-bar
      :options="navbarOptions"
      @vnb-item-clicked="vnbItemClicked"
    />
  </div>
</template>

<script>
import 'vue-navigation-bar/dist/vue-navigation-bar.css'

export default {
  data() {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        // showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [
          {
            type: 'link',
            text: 'Home',
            path: './'
          },
          {
            type: 'link',
            text: 'Services',
            subMenuOptions: [
              {
                type: 'link',
                text: 'On-site Self Storage',
                subText: 'Hire one of our secure, on-site storage boxes.',
                path: './selfstorage',
                iconLeft: '<i class="fa fa-building fa-fw"></i>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Mobile Storage Boxes',
                subText: 'We deliver the box, you load it up, we store it.',
                path: './locations',
                iconLeft: '<i class="fa fa-truck fa-fw"></i>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Rent a Workspace',
                subText:
                  'Hire a multi-purpose workspace with single- and three-phase power, racking and hoist',
                path: './blog',
                iconLeft: '<i class="fa fa-wrench fa-fw"></i>'
              }
            ]
          },
          {
            type: 'link',
            text: 'About',
            subMenuOptions: [
              {
                type: 'link',
                text: 'FAQ',
                path: './faq'
              },

              {
                type: 'link',
                text: 'Where to find us',
                path: './location'
              },
              {
                type: 'link',
                text: 'Pricing',
                path: './pricing'
              }
            ]
          }
        ],
        menuOptionsRight: [
          {
            isLinkAction: true,
            type: 'button',
            text: 'Make an enquiry',
            iconLeft: '<i class="fal fa-comment-alt-lines fa-fw"></i>',
            // path: '#',
            class: 'btn btn-enquire'
          }
        ]
      }
    }
  },
  methods: {
    show() {
      this.$modal.show('contact-modal')
    },
    // hide() {
    //   this.$modal.hide("contact-modal");
    // },
    vnbItemClicked(text) {
      if (text === 'Make an enquiry') {
        this.$modal.show('contact-modal')
      }
    }
  }
}
</script>

<style lang="scss">
.navi {
  box-shadow: 0px 7px 15px #3a150013;
  position: relative;
}

.nav-logo {
  height: 66px;
  width: auto;
  margin: auto 0;
  padding: 1rem;
  background: white !important;
  @media only screen and (max-width: 992px) {
    height: 48px;
    padding: 5px;
  }
}

.vnb {
  padding: 0.5rem 0;
}

//no background on active home link
.vnb__menu-options__option__link.router-link-exact-active.router-link-active {
  background: white !important;
}

.vnb__sub-menu-options__option__link:hover,
.vnb__popup__bottom__menu-options__option__link:hover,
.vnb__popup__bottom__sub-menu-options__option__link:hover {
  border-left: 2px solid var(--orange-light);
}

.vnb__popup__bottom__menu-options__option__link.vnb__popup__bottom__menu-options__option__link--no-highlight {
  font-size: 1rem !important;
}

#topnav {
  height: 2px;
  background-image: var(--nice-gradient);
}

#nav {
  text-align: left;
  padding: 30px;
  background: white;

  .vnb__menu-options__option__link,
  .vnb__sub-menu-options__option__link,
  .vnb__popup__bottom__menu-options__option__link {
    font-size: 1.5rem;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
    font-size: 1.5rem;
    &.router-link-exact-active {
      color: var(--orange-light);
      background: #f3f3f3;
    }
  }
}

.btn-enquire {
  color: white;
  background: var(--orange-dark);
  border: var(--orange-dark) 0.5px solid;
  text-transform: capitalize;
  font-size: 1.5rem !important;
  // border-radius: 20px;
  // font-weight: 100;
  &:hover {
    background: linear-gradient(to right, #ffb90d, #cc0045, #009980, #ffb90d);
    // color: red;
    background-size: 200% 200%;
    // box-shadow: 0px 2px 6px 1px #ff11001f;
    font-weight: 400;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: gradientSlide 5s linear infinite;
    // animation-fill-mode: forwards;
    // animation-direction: normal;
    -moz-animation: gradientSlide 5s linear infinite;
    animation: gradientSlide 5s linear infinite;
  }
}


</style>
