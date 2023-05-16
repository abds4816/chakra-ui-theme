import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { selectAnatomy } from '@chakra-ui/anatomy'

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(selectAnatomy.keys)

const selectBaseStyle = definePartsStyle({
    field: {
        color: 'slate.600',
        border: '1px dashded',
        borderRadius: 'full',
        _dark: {
            color: 'slate.300',
        }
    }
})

export const Select = defineMultiStyleConfig({ baseStyle: selectBaseStyle })