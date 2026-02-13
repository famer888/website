<template>
  <section :class="[bgColor, 'py-[48px]  md:py-[120px]']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3
        class="font-pingfang font-medium tracking-normal text-[#111827] text-center text-[16px] md:text-[56px] leading-[24px] md:leading-[96px] mb-6"
      >
        {{ title }}
      </h3>
      <p
        :class="[
          'font-pingfang font-normal text-left md:text-center text-[16px] md:text-[18px] leading-[26px] md:leading-[26px] tracking-normal text-[#93959C] max-w-[760px] mx-auto mb-12 md:mb-24',
        ]"
      >
        {{ description }}
      </p>

      <!-- PC：三列卡片 -->
      <div
        :class="[
          'hidden md:grid grid-cols-3 gap-6',
          id === 'digital' && 'mb-8',
        ]"
      >
        <div
          v-for="item in items"
          :key="item.title"
          :class="[
            'bg-white rounded-[12px] p-8',
            id === 'unique' ||
            id === 'target' ||
            id === 'optimization' ||
            id === 'browser' ||
            id === 'digital'
              ? 'xl:w-[373px] xl:h-[480px] shadow-[0_2px_24px_0_rgba(0,0,0,0.096)] border-none flex flex-col items-center mx-auto max-w-[90vw]'
              : 'py-28 shadow-[0_5px_8px_-2px_rgba(0,0,0,0.025),0_2px_3px_-1px_rgba(0,0,0,0.01)] border border-[#EEF0F4]',
          ]"
        >
          <SvgIcon
            :name="item.icon"
            class="mt-[22px] w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] mx-auto mb-4 md:mb-8 lg:mb-12 object-contain"
            alt="图标"
          />
          <h4
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[27px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-3 md:mb-6 lg:mb-8 text-center w-full"
          >
            {{ item.title }}
          </h4>
          <p
            class="font-pingfang font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[24px] md:leading-[27px] tracking-normal text-[#626671] text-left w-full"
          >
            {{ item.desc }}
          </p>
        </div>
      </div>

      <!-- H5：横向滑动 + 圆点 -->
      <div :class="['md:hidden', id === 'digital' && 'mb-6']">
        <div
          :ref="scrollRef"
          class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          @scroll.passive="onScroll"
        >
          <div
            v-for="(item, idx) in items"
            :key="item.title"
            :ref="(el) => setCardRef(el, idx)"
            class="w-[260px] h-[266px] snap-center shrink-0 bg-white rounded-[12px] shadow-[0_5px_8px_-2px_rgba(0,0,0,0.025),0_2px_3px_-1px_rgba(0,0,0,0.01)] border border-[#EEF0F4] p-4 py-8 flex flex-col items-center justify-center"
          >
            <SvgIcon
              :name="item.icon"
              class="w-[80px] h-[80px] mx-auto mb-6 object-contain"
              alt="图标"
            />
            <h4
              class="font-pingfang font-medium text-[18px] leading-[27px] tracking-normal text-[#111827] mb-3 text-center w-full"
            >
              {{ item.title }}
            </h4>
            <p
              class="font-pingfang font-normal text-[14px] leading-[21px] tracking-normal text-[#626671] text-left w-full"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
        <div class="flex justify-center gap-2 mt-2">
          <span
            v-for="(_, i) in items"
            :key="i"
            class="w-2 h-2 rounded-full transition-colors"
            :class="currentActiveIndex === i ? 'bg-brand' : 'bg-[#D8DDE6]'"
          />
        </div>
      </div>

      <div v-if="ctaLink" class="flex justify-center md:mt-20">
        <NuxtLink
          :to="ctaLink"
          class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[40px] md:w-[240px] md:h-[60px]"
        >
          {{ ctaText }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import SvgIcon from "~/components/SvgIcon.vue";

const props = defineProps({
  id: String,
  title: String,
  description: String,
  items: Array,
  bgColor: String,
  scrollRef: Object,
  cardRefs: Object,
  activeIndex: Number | Object,
  onScroll: Function,
  setCardRef: Function,
  ctaLink: String,
  ctaText: String,
});

const currentActiveIndex = computed(() => props.activeIndex?.value ?? 0);
</script>
