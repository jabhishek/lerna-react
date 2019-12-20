import {ResponsiveValue, TLengthStyledSystem} from "styled-system";

const baseStyles = {
    p: ["med", "large"],
    width: ["100%", "auto"],
    borderRadius: "small",
    color: "primary",
    cursor: "pointer",
};

const getWidth = (width: ResponsiveValue<TLengthStyledSystem>, fullWidth: boolean) => {
    if (fullWidth) {
        return { width: ["100%"] };
    }

    return { width: width || baseStyles.width };
};

const getDisabledStyles = () => {
    return {
        cursor: 'not-allowed'
    }
};

export const getStyles = (props: { width: ResponsiveValue<TLengthStyledSystem>; fullWidth: boolean; isDisabled?: boolean}) => {
    const {width, fullWidth, isDisabled} = props;
    console.log("props", props);
    return {
        ...baseStyles,
        ...getWidth(width, fullWidth),
        ...( !!isDisabled && getDisabledStyles() ),
    };
};
