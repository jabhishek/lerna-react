import {ResponsiveValue, TLengthStyledSystem} from "styled-system";

const baseStyles = {
    p: ["med", "large"],
    width: ["100%", "auto"],
    borderRadius: "small",
    color: "primary"
};

const getWidth = (width: any, fullWidth: boolean) => {
    if (fullWidth) {
        return { width: ["100%"] };
    }

    return { width: width || baseStyles.width };
};

export const getStyles = (props: { width: ResponsiveValue<TLengthStyledSystem>; fullWidth: boolean; }) => {
    const {width, fullWidth} = props;
    console.log("props", props);
    return {
        ...baseStyles,
        ...getWidth(width, fullWidth)
    };
};
