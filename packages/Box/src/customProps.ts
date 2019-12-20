import {system} from "styled-system";
import * as CSS from 'csstype';

export interface ICustomProps {
    cursor?: CSS.CursorProperty;
}

export const props = {
    cursor: true,
};

export const customProps = system(props);
