import Chart from 'chart.js/auto';
import { Simulation } from './src/Lab5/Simulation';

const ctx = document.getElementById('queueChart') as HTMLCanvasElement;
const toggleButton = document.getElementById('toggleSim') as HTMLButtonElement;

// состояние симуляции
let simRunning = true;

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [] as number[], // время
    datasets: [
      {
        label: 'Очередь в кассу',
        data: [] as number[],
        borderWidth: 2
      },
      {
        label: 'Очередь на подъемник',
        data: [] as number[],
        borderWidth: 2
      },
      {
      label: 'Очередь на трассу 1',
      data: [] as number[],
      borderWidth: 2
      },
      {
        label: 'Очередь на трассу 2',
        data: [] as number[],
        borderWidth: 2
      }
    ]
  },
  options: {
    animation: false,
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'минуты' } },
      y: { title: { display: true, text: 'размер очереди' } }
    }
  }
});

const sim = new Simulation();

// обновление графика раз в тик
setInterval(() => {
  if (!simRunning) return;
  sim.runTick();

  // добавляем время
  (chart.data.labels as number[]).push(sim.time);

  // добавляем данные
  (chart.data.datasets[0].data as number[]).push(sim.cashDesk.queue.size());
  (chart.data.datasets[1].data as number[]).push(sim.lift.queue.size());
  (chart.data.datasets[2].data as number[]).push(sim.tracks[0].queue.size());
  (chart.data.datasets[3].data as number[]).push(sim.tracks[1].queue.size());

  chart.update();
}, 300); // скорость симуляции

toggleButton.onclick = () => {
  simRunning = !simRunning;

  toggleButton.textContent = simRunning ? "Пауза" : "Продолжить";
};

const checkButton = document.getElementById('checkOverload') as HTMLButtonElement;
const warningsDiv = document.getElementById('warnings') as HTMLDivElement;

checkButton.onclick = () => {
  const warnings: string[] = [];

  if (sim.cashDesk.queue.size() > 5) {
    warnings.push(`⚠️ Касса перегружена: ${sim.cashDesk.queue.size()} человек`);
  }

  sim.tracks.forEach((track, index) => {
    if (track.queue.size() > 5) {
      warnings.push(`⚠️ Трасса ${index + 1} перегружена: ${track.queue.size()} человек`);
    }
  });

  if (sim.lift.queue.size() > 5) {
    warnings.push(`⚠️ Подъемник перегружен: ${sim.lift.queue.size()} человек`);
  }

  if (warnings.length === 0) {
    warningsDiv.textContent = "Все в норме 👍";
  } else {
    warningsDiv.innerHTML = warnings.join("<br>");
  }
};