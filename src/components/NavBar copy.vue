<template>
  <div
    class="m-0 p-0 position-fixed w-100 nav-wrapper"
    style="z-index: 100"
    :class="{ 'nav-hidden': !showNavbar }"
  >
    <div id="topnav"></div>
    <vue-navigation-bar
      class="bg-white px-2 py-lg-0"
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
      showNavbar: true,
      lastScrollPosition: 0,
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
            arrowColor: '#ffa41c',
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
                text: 'Auto Storage',
                subText: 'Store cars, boats, caravans and trailers.',
                path: './autostorage',
                iconLeft: '<i class="fa fa-car fa-fw"></i>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Rent a Workshop',
                subText:
                  'Hire a multi-purpose tradesman storage or workspace with three-phase power.',
                path: './workshops',
                iconLeft: '<i class="fa fa-wrench fa-fw"></i>'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Mobile Storage Boxes',
                subText: 'Storage to your door, you load it up, we store it.',
                path: './mobilestorage',
                iconLeft: '<i class="fa fa-map-marker fa-fw"></i>'
              }
            ]
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
              }
              // {
              //   type: 'link',
              //   text: 'Pricing',
              //   path: './pricing'
              // },
              // {
              //   type: 'link',
              //   text: 'Specials',
              //   path: './specials'
              // }
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
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // don't show/hide on small screen
      // if (currentScrollPosition < 0 || window.innerWidth < 992) {
      //   return
      // }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 90) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss">
.nav-wrapper {
  box-shadow: 0px 7px 15px #3a15001c;
  transform: translate3d(0, 0, 0);
  transition: 0.75s transform cubic-bezier(0, 0.01, 0, 1);
}

.nav-wrapper.nav-hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.navi {
  position: relative;
  padding: 1rem 0;
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

#topnav {
  height: 2px;
  background-image: var(--gradient);
}

#nav {
  text-align: left;
  padding: 30px;
  background: white;
  font-size: 1.25rem;
  text-transform: uppercase;

  .btn.btn-enquire {
    text-transform: capitalize;
    font-size: 1rem !important;
    background-color: var(--secondary);
    // text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.205);
    // color: var(--dark-color);
    color: white;
    transition: all 0.1s ease;
    i {
      color: white;
      transition: all 0.05s ease;
    }
    &:hover,
    &:focus {
      background: white;
      background-size: 200% 200%;
      color: var(--secondary);
      border: 1px solid var(--secondary);
      // text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.205);
      // animation: jiggle 3s ease-in infinite;
      // transform: scale(1.03);
      transition: transform 0.2s cubic-bezier(0.5, -0.24, 0.5, 3.21);
      i {
        color: var(--secondary);
        transition: all 0.05s ease;
      }
    }
  }

  .vnb {
    padding: 0.5rem 0;
    &__brand-image-wrapper {
      &__link {
        &__image {
          background: rgb(0, 0, 0);
          padding: 2px;
          border-radius: 2px;
        }
      }
    }

    &__menu-options {
      color: rgb(37, 35, 33);
      transition: color 0s;
      &.tippy-active {
        color: var(--primary);
      }
      &--left {
        height: 54px;
      }

      &__option {
        span[aria-expanded='true'] {
          background-color: var(--primary);
        }
        &__link {
          height: 54px;
          padding: 0 1rem;
          &:hover {
            background: var(--dark-color);
            color: var(--primary);
          }
          &:focus {
            outline: none;
          }
        }
      }
    }

    &__sub-menu-options {
      &__option {
        &__link {
          &:hover {
            border-left: 2px solid var(--primary);
          }

          &__text-wrapper {
            &__text {
              font-size: 1rem;
            }

            &__sub-text {
              text-transform: none;
            }
          }
        }
      }
    }

    &__popup {
      &__top {
        &__close-button {
          &__image {
            width: 50px;
            height: 50px;
            right: 100px;
          }
        }
      }

      &__bottom {
        &__menu-options {
          &__option {
            &__link {
              &:hover {
                border-left: 2px solid var(--primary);
              }

              &--no-highlight {
                font-size: 1.25rem !important;
                font-weight: 800;
                &:hover {
                  border-left: 2px solid transparent;
                }
              }
            }
          }
        }

        &__sub-menu-options {
          &__option {
            &__link {
              &.router-link-exact-active {
                color: var(--primary);
                background: #eeeeee;
                border-left: 5px solid var(--primary);
                &:focus {
                  outline: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
