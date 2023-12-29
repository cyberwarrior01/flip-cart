import Navbar from "./components/header/navbar"
import {Box} from '@mui/material'
import Home from "./components/pages/home/home"
import DataProvider from "./context/DataProvider"
// import DataProvider from "./context/DataProvider"

function App() {

  return (
      <>
      <DataProvider>
      <Navbar/>
      <Box>
        <Home/>
      </Box>
      </DataProvider>
      </>                                                        )
}

export default App
