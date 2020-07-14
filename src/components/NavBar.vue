<template>
  <div class="px-2 py-0 navi dark-bg">
    <vue-navigation-bar
      class="dark-bg"
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
        collapseButtonOpenColor: '#ffa41c',
        collapseButtonCloseColor: '#ffa41c',
        // showBrandImageInMobilePopup: true,
        brandImagePath: './',
        brandImage: require('../assets/logo-sm.svg'),
        brandImageAltText: 'brand-image',
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-toward',
        // collapseButtonImageClose: require('../assets/logo-sm.svg'),
        menuOptionsLeft: [
          {
            type: 'link',
            text: 'Home',
            path: './'
          },
          {
            type: 'link',
            text: 'Services',
            arrowColor: '#ffcd60',
            subMenuOptions: [
              {
                type: 'link',
                text: 'Self Storage Units',
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
                subText: 'Storage to your door, you load it up, we store it.',
                path: './mobilestorage',
                iconLeft: '<i class="fa fa-truck fa-fw"></i>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Rent a Workshop',
                subText:
                  'Hire a multi-purpose workspace with single- and triple-phase power, racking and hoist',
                path: './workshops',
                iconLeft: '<i class="fa fa-wrench fa-fw"></i>'
              }
            ]
          },
          {
            type: 'link',
            text: 'Specials',
            path: './specials'
          },
          {
            type: 'link',
            text: 'About',
            arrowColor: '#ffcd60',
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
            text: 'Quote',
            iconLeft: '<i class="fal fa-comment-alt-lines fa-fw"></i>',
            path: '',
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
      if (text === 'Quote') {
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
  height: 60px;
  width: auto;
  margin: auto 0;
  padding: 1rem;
  // background: white !important;
  @media only screen and (max-width: 992px) {
    height: 48px;
    padding: 5px;
  }
}

.logo-link {
  background: transparent !important;
  border-left: none !important;
}

.vnb {
  padding: 0.5rem 0;
}

//no background on active home link
.vnb__menu-options__option__link.router-link-exact-active.router-link-active {
  background: inherit !important;
}

.vnb__sub-menu-options__option__link:hover,
.vnb__popup__bottom__menu-options__option__link:hover,
.vnb__popup__bottom__sub-menu-options__option__link:hover {
  border-left: 2px solid var(--orange-dark);
}

.vnb__popup__bottom__sub-menu-options__option__link.router-link-exact-active.router-link-active {
  background: white;
  color: var(--dark-color);
}

.vnb__menu-options__option__link {
  color: var(--orange-dark);
  &.tippy-active {
    color: var(--orange-dark);
  }
}

.vnb__menu-options__option__link:hover {
  color: var(--orange-light) !important;
}

.vnb__popup__bottom__menu-options__option__link--no-highlight {
  font-size: 1rem !important;
}

#topnav {
  height: 2px;
  background-image: var(--nice-gradient);
}

#nav {
  text-align: left;
  padding: 30px;
  // background: white;

  .vnb__menu-options__option__link,
  .vnb__sub-menu-options__option__link,
  .vnb__popup__bottom__menu-options__option__link {
    font-size: 1.25rem;
  }

  a {
    color: var(--orange-dark);
    text-decoration: none;
    font-size: 1.25rem;
  }

  .vnb__sub-menu-options__option__link,
  .vnb__popup__bottom__sub-menu-options__option__link {
    &.router-link-exact-active {
      color: var(--orange-dark);
      background: #eeeeee;
      border-left: 5px solid var(--orange-dark);
    }
  }
}

.btn.btn-enquire {
  color: inherit;
  text-transform: capitalize;
  font-size: 1.25rem !important;
  background-color: var(--dark-color);
  color: var(--orange-dark);
  &:hover {
    background: white;
    background-size: 200% 200%;
    color: var(--orange-dark);
    border: 1px solid var(--orange-dark);
  }
}

.vnb__popup__top__close-button__image {
  width: 50px;
  height: 50px;
  right: 100px;
}
</style>
