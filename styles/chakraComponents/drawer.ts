import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { drawerAnatomy } from '@chakra-ui/anatomy'

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(drawerAnatomy.keys)

const drawerBaseStyle = definePartsStyle({
    overlay: {
        backdropFilter: 'auto',
        backdropBlur: 'sm'
    },
    dialog: {
        bg: 'slate.100',
        _dark: {
            bg: 'slate.800'
        }
    }
})

export const Drawer = defineMultiStyleConfig({ baseStyle: drawerBaseStyle })