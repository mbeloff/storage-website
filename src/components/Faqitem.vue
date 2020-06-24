<template>
  <div
    :id="groupId + '-' + item.id"
    class="accordion-item"
    :class="{ 'is-active': item.active }"
  >
    <dt class="accordion-item-title">
      <div role="button" @click="toggle" class="accordion-item-trigger pr-1">
        <div class="d-flex align-items-center">
          <h4 class="accordion-item-title-text">
            {{ item.title }}
          </h4>
          <span class="fa-stack ml-auto">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i
              class="accordion-icon fas fa-chevron-right fa-stack-1x fa-inverse "
            ></i>
          </span>
        </div>
      </div>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="accordion-item-details">
        <div v-html="item.details" class="accordion-item-details-inner"></div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['item', 'multiple', 'groupId'],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach(item => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active
          else item.item.active = false
        })
      }
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition(el) {
      el.style.height = ''
    }
  }
}
</script>

<style></style>
