import { randomInt } from "crypto";
import { Queue } from "../../Lab4/Classes/Queue";

export class Track {
  queue = new Queue<Visitor>();
  current: Visitor | null = null;
  timeLeft = 0;

  slideTime = 2; //время съезда

  tick() {
    if (!this.current && !this.queue.isEmpty()) {
      this.current = this.queue.dequeue();
      this.timeLeft = this.slideTime;
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