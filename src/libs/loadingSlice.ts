import { createSlice } from '@reduxjs/toolkit'

type LoadingListType = { id: string; action: string }[]

type LoadingStoreType = {
  loadingList: LoadingListType
}

const initialState: LoadingStoreType = {
  loadingList: [],
}

const removeFromLoadingList = (arr: LoadingListType, v: any) => {
  const i = arr.findIndex(({ id }) => id === v)
  if (i === -1) return arr
  return [...arr.slice(0, i), ...arr.slice(i + 1)]
}

const { reducer: gutsLoading } = createSlice({
  name: 'gutsLoading',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => {
          const a = type.split('/')
          return ['rejected', 'fulfilled'].includes(a[a.length - 1])
        },
        (state, action) => {
          const { loadingList } = state
          const idx = loadingList.findIndex(
            ({ id }) => id === action.meta.requestId,
          )
          if (idx !== -1) {
            state.loadingList = removeFromLoadingList(
              loadingList,
              action.meta.requestId,
            )
          }
        },
      )
      .addMatcher(
        ({ type }) => {
          const a = type.split('/')
          return 'pending' === a[a.length - 1]
        },
        (state, action) => {
          state.loadingList.push({
            id: action.meta.requestId,
            action: action.type,
          })
        },
      )
  },
})

export default gutsLoading