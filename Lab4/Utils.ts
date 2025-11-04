// ====== Функция измерения памяти ======
export function printMemoryUsage(label: string) {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`${label}: ${used.toFixed(2)} MB`);
}