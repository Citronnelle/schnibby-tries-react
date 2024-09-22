import React, { ChangeEvent, FormEvent, useState } from "react"
import { Box, Button, Grid2, List, ListItem, TextField } from "@mui/material"

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
      <Box
        sx={{
          padding: 7,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        <Grid2
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ justifyContent: "center" }}
        >
          <Grid2 size={{ xs: 12 }}>
            <Box
              sx={{
                fontSize: "calc(10px + 2vmin)",
                textAlign: "center",
                marginBottom: 2,
              }}
            >
              {nimi}
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <List
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {huviHobiMassiiv.map(huviHobi => (
                <ListItem key={huviHobi}>{huviHobi}</ListItem>
              ))}
            </List>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <form onSubmit={tootleSaatmist}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  id="email"
                  name="email"
                  label="E-posti aadress:"
                  type="email"
                  variant="outlined"
                  fullWidth
                  onChange={tootleMuutust}
                />
                <TextField
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
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default Info
