import React from 'react'
import {createStore}  from 'redux'

const initialState = {
    timer : 0,
    hide : true
}

const basic = (state = initialState, action) => {
    if(action.type === "increment") {
        return {
            timer : state.timer + 1,
            hide : state.hide 
        }
    }

    if(action.type === "DECREMENT") {
        return {
            timer : state.timer - 1,
            hide : state.hide 
        }
    }

    if(action.type === "toggle") {
        return {
            hide : !state.hide,
            timer : state.timer
        }
    }

    if(action.type === "zero") {
        return {
            timer : 0,
            hide : state.timer
        }
    }

    return state
}

// export const storeActions = basic.action

const store = createStore(basic)

export default store
