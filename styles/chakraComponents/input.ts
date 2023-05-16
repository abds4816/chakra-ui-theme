import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { inputAnatomy } from '@chakra-ui/anatomy'

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(inputAnatomy.keys)

const inputBaseStyle = definePartsStyle({
    field: {
        _focus: {
            border: 'none',
            _placeholder: {
                ps: '2',
            }
        },
        _placeholder: {
            transition: 'all .2s',
            fontSize: 'xs',
            textTransform: 'capitalize'
        }
    },
    element: {
        color: 'slate.400',
        _dark: {
            color: 'slate.600'
        }
    }
})

export const Input = defineMultiStyleConfig({ baseStyle: inputBaseStyle })