<template>
  <section :class="[bgColor, 'py-12 sm:py-14 lg:py-16']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3
        :class="[
          'font-pingfang font-medium tracking-normal text-[#111827] text-center',
          id === 'target'
            ? 'text-[22px] sm:text-[26px] md:text-[32px] leading-[28px] sm:leading-[32px] md:leading-[34px] mb-2'
            : id === 'optimization' || id === 'browser'
              ? 'text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[34px] mb-2'
              : id === 'digital'
                ? 'text-[22px] sm:text-[24px] md:text-[28px] leading-[32px] sm:leading-[36px] md:leading-[40px] mb-2'
                : 'text-[28px] sm:text-[32px] md:text-[48px] leading-[40px] sm:leading-[46px] md:leading-[62px] mb-6',
        ]"
      >
        {{ title }}
      </h3>
      <p
        :class="[
          'font-pingfang font-normal tracking-normal text-[#A2A3A5] text-center mx-auto',
          id === 'target'
            ? 'text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] max-w-[760px] mb-8'
            : id === 'optimization'
              ? 'text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[22px] max-w-[760px] mb-8'
              : id === 'browser'
                ? 'text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[22px] max-w-[760px] mb-8'
                : id === 'digital'
                  ? 'text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] max-w-[760px] mb-8'
                  : 'text-[12px] sm:text-[14px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[38px] max-w-4xl mb-12',
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
            'bg-white rounded-[12px] shadow-[0_5px_8px_-2px_rgba(0,0,0,0.025),0_2px_3px_-1px_rgba(0,0,0,0.01)] border border-[#EEF0F4] p-8',
            id === 'unique' ||
            id === 'target' ||
            id === 'optimization' ||
            id === 'browser'
              ? 'py-32 flex flex-col items-center justify-center'
              : 'py-28',
          ]"
        >
          <SvgIcon
            :name="item.icon"
            class="w-[160px] h-[160px] mx-auto mb-4 object-contain"
            alt="图标"
          />
          <h4
            class="font-pingfang font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[27px] sm:leading-[30px] md:leading-[36px] tracking-normal text-[#111827] mb-3 text-center w-full"
          >
            {{ item.title }}
          </h4>
          <p
            class="font-pingfang font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[24px] md:leading-[27px] tracking-normal text-[#A2A3A5] text-left w-full"
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
            class="snap-center shrink-0 w-[78%] bg-white rounded-[12px] shadow-[0_5px_8px_-2px_rgba(0,0,0,0.025),0_2px_3px_-1px_rgba(0,0,0,0.01)] border border-[#EEF0F4] p-8 py-12 flex flex-col items-center justify-center min-h-[400px]"
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
              class="font-pingfang font-normal text-[14px] leading-[21px] tracking-normal text-[#A2A3A5] text-left w-full"
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

      <div v-if="ctaLink" class="flex justify-center">
        <NuxtLink
          :to="ctaLink"
          class="register-btn inline-flex items-center justify-center text-white rounded-full font-pingfang font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-normal transition-colors shadow-lg hover:shadow-xl w-[160px] h-[44px] sm:w-[180px] sm:h-[48px]"
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
  cardRefs: Array,
  activeIndex: Object,
  onScroll: Function,
  setCardRef: Function,
  ctaLink: String,
  ctaText: String,
});

const currentActiveIndex = computed(() => props.activeIndex?.value ?? 0);
</script>
