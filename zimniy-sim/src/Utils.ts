// ====== Функция измерения памяти ======
export function printMemoryUsage(label: string) {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`${label}: ${used.toFixed(2)} MB`);
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}