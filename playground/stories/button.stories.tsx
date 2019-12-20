import * as React from 'react';
import {Button} from '@avj/button';
import {ThemeProvider, Box} from '@avj/core';
import {storiesOf} from '@storybook/react';
import {withInfo} from "@storybook/addon-info";
import {action} from "@storybook/addon-actions";
import {SyntheticEvent} from "react";

export const TestComponent = ({ text }: { text: string }) => {
    return <div>{text}</div>
}

const stories = storiesOf("Button", module);
const withTheme = (storyFn: any) => <ThemeProvider>
        {storyFn()}
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
        <div style={ {display: 'flex', flexDirection: 'column', alignItems: 'flex-start'} }>
            <Button
                onClick={action('onClick')}
            >
                Default
            </Button>
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
            >
                Secondary
            </Button>
            <Button
                onClick={action('onClick')}
                color="white"
                width={100}
                backgroundColor="black"
                borderRadius={10}
            >
                Custom
            </Button>
            <Button isDisabled>
                Disabled
            </Button>
        </div>
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
    ))
    .add('TestComponent', () => (
        <TestComponent text="Abhi"/>
    ))
    .add('Box', () => (
        <Box p={10} width={100} borderRadius={4} borderColor="secondary" borderStyle="solid" borderWidth={1}>
            Hello
        </Box>
    ));

