import { createSlice } from '@reduxjs/toolkit'


const filterSiice = createSlice({
    name : 'filter',
    initialState: null,
    reducers : {
      onFilterChange(state, action) {
        return action.payload
      },
    },


})
// const filterReducer = (state = null, action) => {
//     switch (action.type){
//         case 'SET_FILTER':
//           //it returns payload as the new state 
//           return action.payload
//         default:
//             return state
//     }
// }

// export const onFilterChange = (filterText) => {
//     return {
//         type: 'SET_FILTER',
//         payload: filterText
//     }
// }

export const {onFilterChange} = filterSiice.actions
export default filterSiice.reducer

// export default filterReducer