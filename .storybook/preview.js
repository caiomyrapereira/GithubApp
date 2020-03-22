import { configure } from '@storybook/react';

const loaderFn = () => [
  require('../src/Components/Actions/actions.stories.js'),
  require('../src/Components/Repository/repository.stories.js'),
  require('../src/Components/Actions/style.css'),
  require('../src/Components/Repository/style.css')


];

configure(loaderFn, module);

