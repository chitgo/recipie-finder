import { createAsyncThunk } from '@reduxjs/toolkit'
import fetchData from '../../api/axios'
import { extractRecipeData } from '../../utils/helpers'

export const fetchTypesRecipes = createAsyncThunk(
  'recipes/type/fetchRecipes',
  async ({ typeData, nextPageLink }) => {
    let recipesData = null

    if (!(Object.keys(typeData).length === 0)) {
      const { data } = await fetchData(
        `?type=public&app_id=${import.meta.env.VITE_APP_ID}&app_key=${
          import.meta.env.VITE_APP_KEY
        }&${typeData.typeOf}Type=${typeData.typeName}`
      )
      recipesData = extractRecipeData(data)
    } else {
      const { data } = await fetchData(`${nextPageLink}`)
      recipesData = extractRecipeData(data)
    }
    return recipesData
  }
)
