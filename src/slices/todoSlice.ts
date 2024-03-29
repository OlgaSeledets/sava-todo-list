import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Item {
  id: string
  text: string
  completed: boolean
}

const todosSlice = createSlice({
  name: 'TodoList',
  initialState: [] as Item[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.push(action.payload)
      },
      prepare: (text: string) => {
        const id = nanoid()
        const completed = false
        return { payload: { id, text, completed } }
      },
    },
    setStatus: (state, action: PayloadAction<{completed: boolean; id: string}>) => {
      const completedItemIndex = state.findIndex((item) => item.id === action.payload.id)
      state[completedItemIndex].completed = action.payload.completed
    },
    clearList: () => {
      return []
    }
  },
})

export const { addTodo, setStatus, clearList } = todosSlice.actions;
export default todosSlice.reducer;
