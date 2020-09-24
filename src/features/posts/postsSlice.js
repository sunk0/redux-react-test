import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'BARSA',
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'RMA',
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
  },
})
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer
