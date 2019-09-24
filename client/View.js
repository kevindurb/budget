import { EventEmitter } from './EventEmitter.js';
import { div } from '/dom.js';

export class View extends EventEmitter {
  events = {}

  constructor(model, $el = div()) {
    super();

    this.$el = $el;
    this.model = model;

    this.onEvent = this.onEvent.bind(this);

    this.registerEvents();

    this.initialize();
  }

  initialize() {}

  registerEvents() {
    const events = this.getEvents();
    const descriptors = Object.keys(events);

    descriptors.forEach((descriptor) => {
      const [event] = descriptor.split(' ');
      this.$el.addEventListener(event, this.onEvent);
    });
  }

  onEvent(event) {
    const events = this.getEvents();
    const descriptors = Object.keys(events);

    descriptors.forEach((descriptor) => {
      const [eventType, selector] = descriptor.split(' ');

      if (event.type === eventType && event.target.matches(selector)) {
        const fnName = events[descriptor];

        this[fnName](event);
      }
    });
  }
}
