import "@fontsource/inter/metadata.json"
import { extendTheme } from "@chakra-ui/react"
import { Modal } from "./chakraComponents/modal"
import { Menu } from "./chakraComponents/menu"
import { Button } from "./chakraComponents/button"
import { Input } from "./chakraComponents/input"
import { Link } from "./chakraComponents/link"
import { Tabs } from "./chakraComponents/tabs"
import { Drawer } from "./chakraComponents/drawer"
import { Heading } from "./chakraComponents/heading"
import { Text } from "./chakraComponents/text"
import { Select } from "./chakraComponents/select"
import { Tooltip } from "./chakraComponents/tooltip"

export const theme = extendTheme({
    fonts: {
        body: "inter, sans-serif",
        heading: "inter, sans-serif",
        mono: "inter, sans-serif"
    },
    colors: {
        primary: "#696cff",
        primaryLight: "#6366f1",
        secondary: "#8592a3",
        success: "#71dd37",
        error: {
            light: "#f43e60",
            dark: "#f12a4f"
        },
        info: "#03c3ec",
        warning: "#ffab00",
        slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
        },
    },
    components: {
        Button,
        Drawer,
        Heading,
        Menu,
        Modal,
        Link,
        Input,
        Tabs,
        Text,
        Tooltip,
        Select
    }
})