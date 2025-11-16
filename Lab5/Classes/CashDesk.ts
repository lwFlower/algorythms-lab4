import { randomInt } from "crypto";
import { Queue } from "../../Lab4/Classes/Queue";

export class CashDesk {
  queue = new Queue<Visitor>();

  current: Visitor | null = null;
  timeLeft = randomInt(1, 3);

  tick() {
    if (!this.current && !this.queue.isEmpty()) {
      this.current = this.queue.dequeue();
      this.timeLeft = randomInt(1, 3);
    }

    if (this.current) {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        const finished = this.current;
        this.current = null;
        return finished;
      }
    }

    return null;
  }
}