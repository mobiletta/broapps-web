import React from 'react';
import { storiesOf } from '@storybook/react';
import Foo from './Foo';
storiesOf('Foo', module).add('Foo', () => (
  <div>
    <Foo />
  </div>
));
