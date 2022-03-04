import { createAsyncThunk } from '@reduxjs/toolkit'
import { USerType } from '../../types/userTypes'
import axios from 'axios'

const API_URL = '/api/v1/users/login'

export const login = createAsyncThunk('auth/login', async (user) => {
  const response = await axios.post(API_URL, user)
  const result: USerType = await response.data
  return result
})
