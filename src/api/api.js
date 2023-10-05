// Importa las bibliotecas necesarias
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.REACT_APP_API_URL
const supabaseKey = process.env.REACT_APP_API_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const products = "products"

export async function obtenerDatos () {
  try {
    const { data, error } = await supabase.from(products).select("*")
    if (error) {
      console.error("Error al obtener los datos:", error.message)
      return null
    }
    return data
  } catch (error) {
    console.error(error.message)
    throw error
  }
}
