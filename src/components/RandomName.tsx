import React from "react"

const RandomName = () => {
  const nimeMassiiv = [
    "Mari",
    "Jüri",
    "Kadri",
    "Mati",
    "Taavi",
    "Maali",
    "Juuli",
    "August",
  ]

  const juhuslikIndeks = Math.floor(Math.random() * nimeMassiiv.length)
  return nimeMassiiv[juhuslikIndeks]
}

export default RandomName
