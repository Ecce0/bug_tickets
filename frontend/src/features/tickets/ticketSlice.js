import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import ticketService from './ticketService'

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const createNewTicket = createAsyncThunk('tickets/create', async (ticketData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
     return await ticketService.createTicket(ticketData, token)
  } catch (error) {
     const message = (error.response && error.response.data & error.response.data.message) || error.message || error.toString()
 
     return thunkAPI.rejectWithValue(message)
  }
 })


export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
       .addCase(createNewTicket.pending, (state) => {
        state.isLoading = true
       })
       .addCase(createNewTicket.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
       })
       .addCase(createNewTicket.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
       })
  }
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer