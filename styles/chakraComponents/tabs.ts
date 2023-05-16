import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { tabsAnatomy } from '@chakra-ui/anatomy'

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

const tabsBaseStyle = definePartsStyle({
    root: {
        w: 'full',
        rounded: 'md',
        p: '1'
    },
    tablist: {
        py: '1',
        px: '2',
        gap: '2',
        bg: 'slate.100',
        rounded: 'md',
        _dark: {
            bg: 'slate.800',
        }
    },
    tabpanels: {
        mt: '2',
        rounded: 'md',
        border: '1px',
        borderColor: 'slate.300',
        _dark: {
            borderColor: 'slate.700',
        }
    }
})

const tabsCustomVariant = definePartsStyle(() => {
    return {
        tab: {
            w: 'full',
            color: 'slate.400',
            fontWeight: '500',
            fontSize: 'sm',
            rounded: 'md',
            textTransform: 'capitalize',
            _selected: {
                fontWeight: '600',
                bg: 'slate.50',
                color: 'slate.900',
                shadow: 'sm',
                _dark: {
                    bg: 'slate.900',
                    color: 'slate.100',
                }
            }
        }
    }
})

const variants = {
    primary: tabsCustomVariant
}

export const Tabs = defineMultiStyleConfig({ baseStyle: tabsBaseStyle, variants })