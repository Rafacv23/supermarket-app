import React, { useState, useEffect } from "react"
import { obtenerDatos } from "./api/api.js"
import "./styles/App.css"

function App () {
  // Define un estado para almacenar los datos que obtienes
  const [datos, setDatos] = useState([])

  useEffect(() => {
    // Cuando el componente se monte, llama a la función obtenerDatos
    obtenerDatos()
      .then((data) => {
        // Actualiza el estado con los datos obtenidos
        setDatos(data)
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error)
      })
  }, [])

  return (
    <div className="App">
      <h1>Datos de Supabase</h1>
      <ul>
        {datos.map((dato) => (
          <li key={dato.id}>{dato.name} - {dato.description}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
