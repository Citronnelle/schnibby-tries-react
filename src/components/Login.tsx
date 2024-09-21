import { FormEvent, useState, useEffect, ChangeEvent } from "react"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" })
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Hoiame ära sündmuse vaikekäitumise, s.t väldime lehe värskendamist vormi postitamisel
    event.preventDefault()

    console.log(form)
    //console.log({ username, password });
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }))
  }

  useEffect(() => {
    console.log("Esitab igal korral")
  })

  useEffect(() => {
    // React.StrictMode puhul esitab kahel korral
    console.log("Esitab ainult ühel-kahel korral")
  }, [])

  /*
  useEffect(() => {
    // React.StrictMode puhul esitab kahel korral
    console.log("Esitab ainult kasutajanime muutumisel");
  }, [username]);
    */

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            Login
          </Typography>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            //onChange={(event) => setUsername(event.target.value)}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            //onChange={(event) => setPassword(event.target.value)}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  )
}
