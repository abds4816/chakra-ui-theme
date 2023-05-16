import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { menuAnatomy } from '@chakra-ui/anatomy'

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(menuAnatomy.keys)

const menuBaseStyle = definePartsStyle({
    list: {
        minW: '52',
        p: '1',
        bg: 'slate.50',
        _dark: {
            bg: 'slate.800'
        }
    },
    item: {
        rounded: 'md',
        _notLast: {
            mb: '1'
        },
        bg: 'slate.50',
        _hover: {
            bg: 'slate.100'
        },
        _dark: {
            bg: 'slate.800',
            _hover: {
                bg: 'slate.700',
            }
        }
    }
})

export const Menu = defineMultiStyleConfig({ baseStyle: menuBaseStyle })