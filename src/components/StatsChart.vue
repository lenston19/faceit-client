<template>
  <q-tabs v-model="selectedStat" dense>
    <q-tab
      v-for="(value, key) in faceitStats[0]"
      :key="key + value"
      :name="key"
      :label="key"
    />
  </q-tabs>
  <Line
    v-if="faceitStats"
    :chart-options="{
      responsive: true,
    }"
    :chart-data="chartData"
    chart-id="stats-chart"
    dataset-id-key="label"
    :width="400"
    :height="200"
  />
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Plugin,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

const props = defineProps<{
  gameId: string;
  playerId: string;
}>();

const selectedStat = ref();
const faceitStats = ref([]);

const chartData = computed(() => {
  return {
    labels: Array.from(
      { length: faceitStats.value.length },
      (v, i) => `Матч №${i + 1}`
    ),
    datasets: [
      {
        label: selectedStat.value,
        borderColor: '#ffc200',
        backgroundColor: '#000',
        data: faceitStats.value.map((s) => s[selectedStat.value]),
      },
    ],
  };
});

onMounted(async () => {
  const { data } = await axios.get(
    `https://open.faceit.com/data/v4/players/${props.playerId}/stats/${props.gameId}`,
    {
      headers: { Authorization: 'Bearer 882ab0ea-ff0c-4f70-99f1-215836754927' },
    }
  );
  if (data.segments.length > 0) {
    faceitStats.value = data.segments.map((seg) => seg.stats);
    selectedStat.value = Object.keys(faceitStats.value[0])[0];
  }
});
</script>
