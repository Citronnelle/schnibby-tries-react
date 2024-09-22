import React from "react"
import { Box, Typography } from "@mui/material"

const Hello = ({ nimi }: { nimi: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        textAlign: "center",
        padding: 7,
        paddingTop: "30vh",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
      >
        Tere, {nimi ? nimi : "maailm"!}
      </Typography>
    </Box>
  )
}

export default Hello
