<template>
  <div class="w-full h-[300px] md:h-[560px] flex flex-col px-2 md:px-4 pt-2 md:pt-4 pb-2 md:pb-6 bg-[#F9FAFD]">
    <div class="bg-white rounded-lg shadow-md w-full h-full overflow-auto">
      <!-- 标题 -->
      <div class="px-3 md:px-6 pt-2 md:pt-6 pb-1 md:pb-4 sticky top-0 bg-white z-10">
        <h3 class="text-sm md:text-xl font-bold text-gray-900">Daily Ad Impressions</h3>
      </div>
      
      <!-- 表格 -->
      <div class="px-3 md:px-6 pb-2 md:pb-6">
        <table class="w-full">
          <thead class="sticky top-[45px] md:static z-10">
            <tr class="bg-[#CEF7FF]">
              <th class="text-left py-1 md:py-3 px-1.5 md:px-4 text-[10px] md:text-sm font-semibold text-gray-700">#</th>
              <th class="text-left py-1 md:py-3 px-1.5 md:px-4 text-[10px] md:text-sm font-semibold text-gray-700">Country</th>
              <th class="text-left py-1 md:py-3 px-1.5 md:px-4 text-[10px] md:text-sm font-semibold text-gray-700">Daily Ad Impressions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in tableData"
              :key="index"
              :class="index % 2 === 0 ? 'bg-white' : 'bg-[#CEF7FF]'"
              class="border-b border-gray-200"
            >
              <td class="py-1 md:py-3 px-1.5 md:px-4 text-[10px] md:text-sm text-gray-700">{{ row.rank }}</td>
              <td class="py-1 md:py-3 px-1.5 md:px-4 text-[10px] md:text-sm text-gray-700">{{ row.country }}</td>
              <td class="py-1 md:py-3 px-1.5 md:px-4 text-[10px] md:text-sm text-gray-700">{{ formatNumber(row.impressions) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  { rank: 1, country: 'United States', impressions: 1060000000 },
  { rank: 2, country: 'United Kingdom', impressions: 202400000 },
  { rank: 3, country: 'Germany', impressions: 149800000 },
  { rank: 4, country: 'France', impressions: 131700000 },
  { rank: 5, country: 'Canada', impressions: 119300000 },
  { rank: 6, country: 'Italy', impressions: 93500000 },
  { rank: 7, country: 'Japan', impressions: 79200000 },
  { rank: 8, country: 'Brazil', impressions: 68100000 },
  { rank: 9, country: 'Australia', impressions: 64000000 },
  { rank: 10, country: 'Poland', impressions: 61700000 },
  { rank: 11, country: 'Russian Federation', impressions: 58700000 },
  { rank: 12, country: 'India', impressions: 55700000 },
  { rank: 13, country: 'Spain', impressions: 53200000 },
  { rank: 14, country: 'Mexico', impressions: 52700000 },
  { rank: 15, country: 'Philippines', impressions: 48300000 }
]

const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + ' billion'
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + ' million'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + ' thousand'
  }
  return num.toString()
}
</script>

