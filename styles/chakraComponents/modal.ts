import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { modalAnatomy } from '@chakra-ui/anatomy'

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(modalAnatomy.keys)

const modalBaseStyle = definePartsStyle({
    overlay: {
        backdropFilter: 'auto',
        backdropBlur: 'sm'
    },
    dialog: {
        bg: 'slate.100',
        _dark: {
            bg: 'slate.800'
        }
    },
    header: {
        textTransform: "capitalize"
    },
    closeButton: {
        bg: 'slate.50',
        transform: 'auto',
        translateY: '-140%',
        translateX: '40%',
        _dark: {
            bg: 'slate.800'
        }
    }
})

export const Modal = defineMultiStyleConfig({ baseStyle: modalBaseStyle })