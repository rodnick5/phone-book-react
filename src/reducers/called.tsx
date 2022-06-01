import { createSlice } from "@reduxjs/toolkit";


export type CalledItemType = {
    name: string
    surname: string
    phoneNumber: string
    photoUrl: string
    date: string
}
interface CalledArray {
    called: CalledItemType[]
}

const initialState = {
    called:[
        {
            name: 'John',
            surname: 'Lee',
            phoneNumber: '+39049949494',
            photoUrl: 'https://cdn.picpng.com/man/pic-man-33229.png',
            date: '12:43:44'
        }
    ]
} as CalledArray


const calledSlice = createSlice({
    name: 'called',
    initialState,
    reducers: {
        addCalled(state, action) {
            let date = new Date()
            
            state.called.unshift(action.payload)
        }
    }

})

const {actions , reducer} = calledSlice
export default reducer
export const { addCalled } = actions