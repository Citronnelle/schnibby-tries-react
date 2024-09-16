import { FormEvent, useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export default function MyForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
