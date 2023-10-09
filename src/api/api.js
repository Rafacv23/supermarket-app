// Importa las bibliotecas necesarias
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.REACT_APP_API_URL
const supabaseKey = process.env.REACT_APP_API_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const products = "products"
const categories = "categories"

export async function obtenerDatos () {
  try {
    const { data, error } = await supabase.from(products).select("*, categories(*)")
    if (error) {
      console.error("Error al obtener los datos:", error.message)
      return null
    }
    console.log(data)
    return data
  } catch (error) {
    console.error(error.message)
    throw error
  }
}

export async function getCategories () {
  try {
    const { data, error } = await supabase.from(categories).select("*")
    if (error) {
      console.error("Error al obtener los datos:", error.message)
      return null
    }
    console.log(data)
    return data
  } catch (error) {
    console.error(error.message)
    throw error
  }
}
