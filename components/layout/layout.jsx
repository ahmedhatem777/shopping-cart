import Navbar from "../nav-bar/nav-bar";
import Footer from "../footer/footer";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';

//MUI Theme
const myTheme = createTheme({
    palette: {
      type: 'light',
      // Smoky Black
      primary: {
        main: '#14110F',
      },
      // Red
      secondary: {
        main: '#9F2042',
      },
      // Lilac
      info: {
        main: '#CB9CF2',
      },
      // Beige-ish
      warning: {
        main: '#D9C5B2',
      },
      // Blue
      success: {
        main: '#016FB9',
      },
    },
    shape: {
      borderRadius: 0,
    },
    typography: {
        fontFamily: [
          'Secular One',
          'sans-serif',
        ].join(','),
    },
    props: {
      MuiAppBar: {
        color: 'primary',
      },
    },
    spacing: 8,
});

export default function Layout({ children }) {
  return (
    <>
    <ThemeProvider theme={myTheme}>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </ThemeProvider>
      
    </>
  )
}
