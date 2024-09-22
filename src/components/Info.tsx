import React, { ChangeEvent, FormEvent, useState } from "react"
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

const Info = ({ nimi }: { nimi: string }) => {
  const [vormiAndmed, maaraVormiAndmed] = useState({ email: "", teade: "" })

  const tootleMuutust = (event: ChangeEvent<HTMLInputElement>) => {
    maaraVormiAndmed(eelmineVorm => ({
      ...eelmineVorm,
      [event.target.name]: event.target.value,
    }))
  }

  const tootleSaatmist = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(vormiAndmed)
  }

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

        <form onSubmit={tootleSaatmist}>
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
              name="email"
              label="E-posti aadress:"
              type="email"
              variant="outlined"
              fullWidth
              onChange={tootleMuutust}
            />
            <TextField
              sx={{ marginBottom: "10px" }}
              id="teade"
              name="teade"
              label="Kirja sisu:"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              onChange={tootleMuutust}
            />
            <Button
              sx={{ alignSelf: "flex-end" }}
              type="submit"
              variant="contained"
            >
              Saada!
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}

export default Info
