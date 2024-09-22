import React from "react"
import Header from "./components/Header"
import { Box } from "@mui/material"

function App() {
  return (
    <>
      <Box sx={{ minHeight: "100vh", fontSize: "calc(10px + 1vmin)" }}>
        <Header />
      </Box>
    </>
  )
}

export default App
