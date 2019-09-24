class Subscriber {
  constructor(callback, context) {
    this.context = context;
    this.callback = callback;
  }

  call(...args) {
    this.callback.call(this.context, ...args);
  }
}

export class EventEmitter {
  subscribers = {};

  createEvent(event) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
  }

  addEventListener(event, callback, context = this) {
    this.createEvent(event);
    const subscriber = new Subscriber(callback, context);
    this.subscribers[event].push(subscriber);
  }

  removeEventListener(event, callback, context = this) {
    this.createEvent(event);
    this.subscribers[event] = this.subscribers[event].filter(
      (subscriber) => {
        return !(
          subscriber.context === context
          && subscriber.callback === callback
        );
      }
    );
  }

  emit(event, ...args) {
    this.createEvent(event);

    this.subscribers[event].forEach(
      (subscriber) => subscriber.call(...args),
    );
  }

  listenTo(target, event, callback) {
    if (target instanceof EventEmitter) {
      target.addEventListener(event, callback, this);
    } else {
      target.addEventListener(event, callback);
    }
  }
}
