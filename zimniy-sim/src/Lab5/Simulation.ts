import { CashDesk } from "./Classes/CashDesk";
import { Lift } from "./Classes/Lift";
import { Track } from "./Classes/Track";
import { Visitor } from "./Classes/Visitor";

export class Simulation {
  time = 0;

  cashDesk = new CashDesk();
  tracks = [new Track(), new Track()];
  lift = new Lift();

  visitorId = 1;

  runTick() {
    this.time++;

    // 1. Новые посетители
    if (Math.random() < 0.8) { //шанс 70%
      console.log('new visitor')
      this.cashDesk.queue.enqueue(new Visitor(this.visitorId++));
    }

    // 2. Касса
    const afterCash = this.cashDesk.tick();
    if (afterCash) {
      const shortestTrack = this.getShortestTrack();
      shortestTrack.queue.enqueue(afterCash);
    }

    // 3. Трассы
    for (const track of this.tracks) {
      console.log('track size: ', track.queue.size())
      const finished = track.tick();
      if (finished) {
        this.lift.queue.enqueue(finished);
      }
    }

    // 4. Подъем
    this.lift.tick();

    // 5. Проверка перегруза
    this.checkOverload();
  }

  getShortestTrack() {
    return this.tracks.reduce((a, b) =>
      a.queue.size() < b.queue.size() ? a : b
    );
  }

  checkOverload() {
    // Например:
    if (this.cashDesk.queue.size() > 5) {
      console.log(`⚠️ В ${this.time} минут касса перегружена. Нужно открыть вторую кассу!`);
    }
    if (this.tracks.some(t => t.queue.size() > 5)) {
      console.log(`⚠️ В ${this.time} минут трассы перегружены. Нужно добавить трассу!`);
    }
    if (this.lift.queue.size() > 5) {
      console.log(`⚠️ В ${this.time} минут подъемник перегружен. Нужен второй!`);
    }
  }
}