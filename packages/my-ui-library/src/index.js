// packages/my-ui-library/index.js

import { init } from 'snabbdom';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h';

const patch = init([classModule, propsModule, eventListenersModule]);

function createComponent(template, initialState, onMount, onUpdate) {
  let state = initialState;

  function updateState(newState) {
    state = { ...state, ...newState };
    render();
    onUpdate && onUpdate();
  }

  function render() {
    const newVNode = template({ state, updateState });
    patch(oldVNode, newVNode);
    oldVNode = newVNode;
  }

  let oldVNode = template({ state, updateState });
  onMount && onMount();
  render();
}

export { createComponent };
