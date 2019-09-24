export class EventEmitter {
  subscribers = {};

  addEventListener(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    this.subscribers[event].push(callback);
  }

  removeEventListener(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    this.subscribers[event] = this.subscribers[event].filter(
      (subscriber) => subscriber !== callback,
    );
  }

  emit(event, data) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    this.subscribers[event].forEach(
      (subscriber) => subscriber(data, event),
    );
  }

  listenTo(target, event, callback) {
    target.addEventListener(event, callback);
  }
}
