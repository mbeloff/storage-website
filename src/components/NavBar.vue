<template>
  <div
    class="m-0 p-0 position-fixed w-100 nav-wrapper"
    style="z-index: 100"
    :class="{ 'nav-hidden': !showNavbar }"
  >
    <div id="topnav"></div>
    <vue-navigation-bar
      class="bg-white px-2 py-lg-0 container"
      :options="navbarOptions"
      @vnb-item-clicked="vnbItemClicked"
    >
      <template v-slot:custom-section>
        <div v-if="$store.state.global.phone" class="custom-section-content">
          <a class="mb-0" :href="`tel:${$store.state.global.phone}`">
            {{ $store.state.global.phone }}
          </a>
        </div>
      </template>
    </vue-navigation-bar>
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
        showBrandImageInMobilePopup: true,
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
            arrowColor: '#e08600',
            subMenuOptions: [
              {
                type: 'link',
                text: 'Self Storage Units',
                subText: 'Secure, on-site storage containers.',
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
              }
              // {
              //   type: 'hr'
              // },
              // {
              //   type: 'link',
              //   text: 'Rent a Workshop',
              //   subText:
              //     'Hire a multi-purpose tradesman storage or workspace with three-phase power.',
              //   path: './workshops',
              //   iconLeft: '<i class="fa fa-wrench fa-fw"></i>'
              // },
              // {
              //   type: 'hr'
              // },
              // {
              //   type: 'link',
              //   text: 'Mobile Storage Boxes',
              //   subText: 'Storage to your door, you load it up, we store it.',
              //   path: './mobilestorage',
              //   iconLeft: '<i class="fa fa-map-marker fa-fw"></i>'
              // }
            ]
          },
          {
            type: 'link',
            text: 'About',
            arrowColor: '#e08600',
            subMenuOptions: [
              {
                type: 'link',
                text: 'FAQ',
                path: './faq'
              },

              {
                type: 'link',
                text: 'About Us',
                path: './about'
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

.nav-wrapper {
  box-shadow: 0px 7px 15px #3a15001c;
  transform: translate3d(0, 0, 0);
  transition: 0.5s transform cubic-bezier(0, 0.01, 0, 1);
}

.nav-wrapper.nav-hidden {
  transform: translate3d(0, -100%, 0);
  transition: 1s transform cubic-bezier(0, 0.01, 0, 1);
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
    text-align: left;
    padding: 0.5rem;
    &__brand-image-wrapper {
      padding-left: 0;
      &__link {
        &__image {
          background: rgb(0, 0, 0);
          padding: 2px;
          border-radius: 2px;
        }
      }
    }
    .custom-section-content {
      text-transform: none;
      text-align: right;
      margin-left: auto;
      font-size: 1.3rem;
      font-weight: 800;
    }
    &__menu-options {
      color: rgb(37, 35, 33);
      transition: color 0s;
      // &.tippy-active {
      //   color: var(--primary);
      // }
      &--left {
        height: 54px;
        padding-left: 1rem;
        hr {
          margin: 0 0;
        }
      }
      &--right {
        margin-left: 1rem;
        padding-right: 0;
      }
      &__option {
        margin-right: 0;
        span[aria-expanded='true'] {
          background-color: var(--primary);
          svg {
            fill: var(--dark-color) !important;
          }
        }
        &__link {
          height: 54px;
          padding: 0 1rem;
          margin: 0;

          &:hover {
            background: var(--primary) !important;
            // color: var(--primary);
          }
          &:focus {
            outline: none;
            svg {
              fill: var(--dark-color) !important;
            }
          }
        }
      }
    }

    &__sub-menu-options {
      padding: 0 0;
      &__option {
        &__link {
          &.router-link-active {
            color: var(--primary);
            background: #eeeeee;
            border-left: 5px solid var(--primary);
            &:hover {
              border-left: 5px solid var(--primary);
            }
          }

          &:hover {
            border-left: 2px solid var(--primary);
            background: rgb(243, 239, 237);
          }
          &:focus {
            outline: none;
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
      box-shadow: 0 5px 40px rgba(0, 0, 0, 0.664);
      border-radius: 6px;
      &__top {
        background: var(--dark-color);
        padding: 1rem;
        border: none;
        &__image {
          max-height: 40px;
          margin-bottom: 0;
        }
        &__close-button {
          &__image {
            width: 50px;
            height: 50px;
            right: 100px;
          }
        }
      }

      &__bottom {
        position: relative;
        &__custom-section {
          position: absolute;
          top: -4rem;
          left: 50px;
          color: var(--primary);
          p {
            font-size: 1.5rem;
          }
        }
        &__menu-options {
          &__option {
            &__link {
              &:last-of-type,
              :last-of-type {
                color: var(--secondary);
                font-weight: bold;
              }
              &:hover {
                border-left: 2px solid var(--primary);
              }
              // gradient underline styles below
              &--no-highlight {
                font-size: 1.1rem !important;
                color: var(--secondary);
                font-weight: 800;
                position: relative;
                display: inline-block;
                &:hover {
                  border-left: 2px solid transparent;
                }
                &::after {
                  bottom: 0rem;
                  left: 1.25rem;
                  width: 50%;
                  position: absolute;
                  width: 50%;
                  content: '';
                  height: 1px;
                  background: var(--primary-light);
                  background-image: var(--gradient);
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
              &__sub-text {
                text-transform: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
