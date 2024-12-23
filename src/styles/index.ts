import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material/styles'

const options: ThemeOptions = {
    palette: {
        mode: 'dark'
    }
}

export default responsiveFontSizes(createTheme(options))