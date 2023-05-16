import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: "500",
        textTransform: "capitalize",
        _active: {
            scale: 0.95
        },
        _focus: {
            ring: '2',
            ringOffset: '2px',
            _dark: {
                ringOffsetColor: 'slate.900'
            }
        }
    },
    variants: {
        primary: {
            paddingX: "6",
            bg: "primary",
            color: "slate.100",
            _hover: {
                bg: "primaryLight",
            },
            _focus: {
                ringColor: 'primaryLight',
            },
        },
        secondary: {
            paddingX: "6",
            bg: "slate.900",
            color: "slate.100",
            _hover: {
                bg: "slate.700",
            },
            _focus: {
                ringColor: 'slate.400',
            },
            _dark: {
                bg: "slate.50",
                color: "slate.900",
                _hover: {
                    bg: "slate.200",
                }
            },

        },
        error: {
            paddingX: "6",
            bg: "error.light",
            color: "slate.100",
            _hover: {
                bg: "error.dark",
            },
            _focus: {
                ringColor: 'error.light',
            },

        },
        outline: {
            bg: "transparent",
            border: '1px',
            borderColor: 'slate.200',
            _hover: {
                bg: 'slate.100'
            },
            _focus: {
                ringColor: 'slate.400',
            },
            _dark: {
                borderColor: 'slate.600',
                _hover: {
                    bg: 'slate.700'
                },
            }
        },
        ghost: {
            fontSize: 'sm',
            _focus: {
                ringColor: 'slate.400',
            },
            _hover: {
                bg: 'slate.100'
            },
            _dark: {
                color: 'slate.400',
                _hover: {
                    bg: 'slate.800'
                },
            }
        }
    }
}