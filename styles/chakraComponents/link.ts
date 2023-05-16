import { ComponentStyleConfig } from "@chakra-ui/react";

export const Link: ComponentStyleConfig = {
    baseStyle: {
        textTransform: 'capitalize',
        _hover: {
            textDecoration: 'none',
        }
    },
    variants: {
        primary: {
            color: 'primary',
            _hover: {
            }
        },
        secondary: {
            fontWeight: '600',
            textDecoration: 'underline',
        }
    }
}