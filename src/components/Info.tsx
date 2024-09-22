import React, { useState } from "react"
import { Box, Button, List, ListItem, TextField } from "@mui/material"

const huviHobiMassiiv = [
  "Dungeons & Dragons",
  "Guild Wars 2",
  "CRPG mängud",
  "andmeanalüüs",
  "psühholoogia",
  "anorgaaniline keemia",
  "krimisarjad",
  "rotid",
]

function saada() {
  alert("Tahtsid saata, aga pole implementeeritud... :(")
}

const Info = ({ nimi }: { nimi: string }) => {
  return (
    <>
      <Box sx={{ fontSize: "calc(10px + 2vmin)" }}>{nimi}</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <List
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            margin: "5px",
            padding: "5px",
            height: "100%",
          }}
        >
          {huviHobiMassiiv.map(huviHobi => (
            <ListItem key={huviHobi}>{huviHobi}</ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            margin: "5px",
            padding: "5px",
            height: "100%",
          }}
        >
          <TextField
            sx={{ marginBottom: "10px" }}
            id="email"
            label="E-posti aadress:"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            sx={{ marginBottom: "10px" }}
            id="teade"
            label="Kirja sisu:"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
          <Button
            sx={{ alignSelf: "flex-end" }}
            variant="contained"
            onClick={saada}
          >
            Saada!
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Info
