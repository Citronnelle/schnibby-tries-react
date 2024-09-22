import * as React from "react"
import { NavLink } from "react-router-dom"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Schnibby tries React
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
          >
            Avaleht
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/login"
          >
            Login
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/form"
          >
            Info
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
