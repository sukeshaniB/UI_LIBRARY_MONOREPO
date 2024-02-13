
import { createComponent } from 'my-ui-library';

const template = ({ state, updateState }) =>
  h('div', [
    h('h1', state.count),
    h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add'),
  ]);

createComponent(
  template,
  { count: 0 },
  () => console.log('Component mounted'),
  () => console.log('State updated')
);
