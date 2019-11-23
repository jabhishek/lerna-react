import * as React from 'react';
import {Button} from '../../packages/Button/src';
import {ThemeProvider} from '../../packages/ThemeProvider/src/';
import {storiesOf} from '@storybook/react';
import {withInfo} from "@storybook/addon-info";
import {action} from "@storybook/addon-actions";
import {SyntheticEvent} from "react";

const stories = storiesOf("Button", module);
const withTheme = (storyFn: any) => <ThemeProvider>
    <div style={ {display: 'flex', flexDirection: 'column', alignItems: 'flex-start'} }>
        {storyFn()}
    </div>
</ThemeProvider>;

stories.addDecorator(withInfo as any);
stories.addDecorator(withTheme);
stories.addParameters({info: {inline: true}});

const onSubmit = (e: SyntheticEvent<any>) => {
    e.preventDefault();
    action('onSubmit')();
};

stories
    .add('With default props', () => (
        <React.Fragment>
            <Button
                onClick={action('onClick')}
                color="primary"
            >
                Primary
            </Button>
            <Button
                onClick={action('onClick')}
                color="primary"
                fullWidth
            >
                Full Width
            </Button>
            <Button
                onClick={action('onClick')}
                color="secondary"
                width={['100%']}
            >
                Secondary
            </Button>
            <Button
                onClick={action('onClick')}
                color="white"
                width={100}
                height={50}
                backgroundColor="black"
                borderRadius={10}
            >
                Custom
            </Button>
        </React.Fragment>
    ))
    .add('Inside form', () => (
        <form onSubmit={onSubmit}>
            <Button
                onClick={action('onClick')}
                color="primary"
                type="submit"
            >
                I am inside form
            </Button>
        </form>
    ));

