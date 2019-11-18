import * as React from 'react';
import {Button} from '../../packages/button/src';
import { storiesOf } from '@storybook/react';
import {SyntheticEvent} from "react";

const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    console.log('clicked', e);
}

storiesOf('Input', module)
    .add('with text', () => (
        <Button onClick={onClick} text="Hello" />
    ));
