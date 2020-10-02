<template>
  <div class="col-12 pt-5 px-0 px-md-3">
    <h2 class="big-title ml-3 ml-sm-0">
      {{ faqhead }}
    </h2>
    <dl class="accordion box" role="presentation">
      <Faqitem
        v-for="item in getQuestions"
        :multiple="multiple"
        :item="item"
        :groupId="groupId"
        :key="item.id"
      >
      </Faqitem>
    </dl>
  </div>
</template>

<script>
import Faqitem from '@/components/Faqitem.vue'
export default {
  components: {
    Faqitem
  },
  props: {
    content: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    faqhead: {
      type: String
    }
  },
  methods: {
    changeContent(set) {
      this.selectedCategory = set
    }
  },
  data() {
    return {
      groupId: null,
      selectedCategory: this.content,
      set1: [
        {
          id: 1,
          active: true,
          title: 'Who is Gabba Storage?',
          details: `
        <p>Gabba Storage provides various sized storage boxes, both on-site at our Woolloongabba location, and mobile storage boxes that we can deliver to you to pack. We also store vehicles and trailers and rent tradesman sheds / workshop spaces, complete with three phase power, racking or hoists.</p>
      `
        },
        {
          id: 8,
          active: false,
          title: 'What items can I store?',
          details: `
        <p>You can store just about anything with Gabba Storage. We have small and large storage boxes for home & office items, and secure parking bays for cars, boats or trailers.</p>
      `
        },
        {
          id: 2,
          active: false,
          title: 'Do I need my own padlock?',
          details: `
        <p>Yes, you need your own padlock to ensure that no one else has access to your unit and to ensure that your unit is securely locked at all times. Padlocks are available at our facility for your convenience.</p>
      `
        },
        {
          id: 3,
          active: false,
          title: `How soon can I move in?`,
          details: `
        <p>Subject to availability, you may move in on the same day as you make your enquiry (during office opening hours) as long as you have the relevant documentation needed to complete and sign your contract. Payment of a deposit and the first invoice must be made prior to moving in.</p>
      `
        },
        {
          id: 4,
          active: false,
          title: `Do I need insurance?`,
          details: `
            <p>It is highly recommended that you adequately insure any goods you choose to store. While we make every effort to safeguard items store in our facility, some events are out of our control, such as fire or flooding.</p><p>1. Self storage insurance. This is a convenient way to insure your goods in storage.</p><p>

            2. Existing insurance through your home and contents or business insurance. Each insurance company and policy will have different requirements and coverage. Please check with your insurance company whether your existing policy covers your goods while in storage.</p><p>

            3. Self insurance. Self insurance means you accept any loss or damage to your stored goods at your own risk and expense. You will have no claim against the self storage facility if your goods are damaged.</p>
      `
        },
        {
          id: 5,
          active: false,
          title: `Is there a minimum rental period?`,
          details: `
        <p>Gabba Storage has no minimum or maximum rental periods. You can store goods with us for a little as one day. Perfect if you just need some extra space in a pinch while moving into a new home or office.</p>
      `
        },
        {
          id: 6,
          active: false,
          title: `What items cannot be stored?`,
          details: `
            <p>We do not allow the storage of:</p><ul class="list-unstyled col-12">
              <li class="list-item">Hazardous goods, toxic materials</li>
              <li class="list-item">Pollutants, contaminants, waste</li>
              <li class="list-item">Perishable goods, live animals, living plants</li>
              <li class="list-item">Cash and securities, illegal goods</li>
              <li class="list-item">Explosives, firearms, ammunitions</li>
            </ul>
            <p>Please make sure mowers, whipper snippers and the like are emptied of petrol or other fuel, and gas bottles are empty.</p>
      `
        }
        //   {
        //     id: 7,
        //     active: false,
        //     title: 'question',
        //     details: `
        //   <p>answer here</p>
        // `
        //   }
      ]
      //     {
      //       id: 4,
      //       active: false,
      //       title: `How much does storage cost?`,
      //       details: `
      //   <p>The cost depends on the type and size of the storage unit you require, and the rental period. Get in touch for a quote today.</p>
      // `
      //     },
      //     {
      //       id: 5,
      //       active: false,
      //       title: `What size unit do I need?`,
      //       details: `
      //   <p>There are a number of things you may need to conside when estimating how much space you need, these include</p>
      //   <ul><li>How many items you need to store</li><li>How stackable are they</li><li>Item dimensions</li><li>How frequently you need to access your items - You may need to leave walkway space in the unit to access everything</li></ul>
      // `
      //     },
      //     {
      //       id: 6,
      //       active: false,
      //       title: `Do I pay weekly or monthly?`,
      //       details: `
      //   <p></p>
      // `
      //     },
      //     {
      //       id: 8,
      //       active: false,
      //       title: `What payment methods are available?`,
      //       details: `<p>You can pay via direct debit as well as credit/debit card.</p>`
      //     },
      //     {
      //       id: 11,
      //       active: false,
      //       title: `Do you offer any discounts?`,
      //       details: `
      //          <p>We are currently offering up the the first 2 months free.</p>
      //         `
      //     }
      //   ]
    }
  },
  mounted() {
    this.groupId = this.$el.id
  },
  computed: {
    getQuestions: function() {
      if (this.selectedCategory == 'set1') {
        return this.set1
      } else if (this.selectedCategory == 'set2') {
        return this.set2
      } else if (this.selectedCategory == 'set3') {
        return this.set3
      } else {
        return this.set1
      }
    }
  }
}
</script>

<style lang="scss">
$browser-context: 16;
$red: #cc4b37;

@function em($pixels, $context: $browser-context) {
  @return #{$pixels/$context}em;
}

// .btn-action-delete {
//   color: $red;
//   cursor: pointer;
// }

.accordion {
  padding: 0;

  div:not(:last-child) {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }

  div:last-child .accordion-item-details {
    border-radius: 5px;
  }

  dd {
    margin-left: 0;
  }
}

.accordion-item-trigger,
.accordion-item-details-inner {
  padding: 0.75rem 1rem;
}

.accordion-item-title {
  position: relative;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0;
    // padding-right: 1.25rem;
  }
}

.accordion-item-trigger {
  width: 100%;
  text-align: left;
  // background-color: transparent;
  border: none;
}

.accordion-item-title-text {
  padding-right: 1rem;
}

.accordion-icon {
  transition: transform 0.5s ease;
  transform: rotate(0deg);
  .is-active & {
    transform: rotate(90deg);
  }
}

.is-active {
  .accordion-item-trigger {
    background: var(--primary);
    color: white;
  }
  .fa-stack-1x {
    color: var(--primary);
  }
}

.accordion-item-details {
  overflow: hidden;
  background-color: whitesmoke;
  margin: 0;
  p {
    margin-bottom: 0;
  }
}

.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.5s ease;
}
.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}

.vnb__collapse-button {
  margin-right: 0 !important;
}
</style>
