import { configure } from '@storybook/react';

function loadStories() {
    const req = require.context('../stories', true, /\.stories\.tsx$/);
    console.log('req.keys()', req.keys());
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
