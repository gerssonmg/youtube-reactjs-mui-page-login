import './App.css'
import Login from './Login'
import TableComponent from './tabela/TableComponent'
import DarkModeCustom from './tabela/darkmode/DarkModeCustom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     // mode: 'light',
//   },
// });

function App() {

  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <DarkModeCustom />
        <TableComponent />
        <Login />

      </ThemeProvider>
    </ColorModeContext.Provider>


  )
}

export default App
