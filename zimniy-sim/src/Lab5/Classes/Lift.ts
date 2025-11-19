import { Queue } from "../../../../Lab4/Classes/Queue";
import type { Visitor } from "./Visitor";

export class Lift {
  queue = new Queue<Visitor>();
  current: Visitor | null = null;
  timeLeft = 0;
  liftTime = 15; //время подъема

  tick() {
    if (!this.current && !this.queue.isEmpty()) {
      this.current = this.queue.dequeue();
      this.timeLeft = this.liftTime;
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