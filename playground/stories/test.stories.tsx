import * as React from 'react';
import {Button} from '../../packages/button/src';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Button", module);
stories.addDecorator(withInfo as any);
stories.addParameters({ info: { inline: true } });

stories.add('default props', () => (
        <Button onClick={action('onClick')} text="Hello" />
    ));

