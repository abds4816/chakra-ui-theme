import { ComponentStyleConfig } from '@chakra-ui/react';

export const Heading: ComponentStyleConfig = {
    baseStyle: {
        color: 'slate.800',
        textTransform: 'capitalize',
        _dark: {
            color: 'slate.100'
        }
    },
    defaultProps: {
        size: 'lg'
    }
}