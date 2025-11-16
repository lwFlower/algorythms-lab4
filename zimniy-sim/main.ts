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

  chart.update();
}, 200); // скорость симуляции: 1 тик каждые 200 мс

toggleButton.onclick = () => {
  simRunning = !simRunning;

  toggleButton.textContent = simRunning ? "Пауза" : "Продолжить";
};