import * as React from 'react';
import {Button} from '../../packages/Button/src';
import {ThemeProvider} from '../../packages/ThemeProvider/src/';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Button", module);
stories.addDecorator(withInfo as any);
stories.addParameters({ info: { inline: true } });

stories.add('default props', () => (
    <ThemeProvider>
        <Button
            onClick={action('onClick')}
            color="primary">Hello</Button>
    </ThemeProvider>
    ));

