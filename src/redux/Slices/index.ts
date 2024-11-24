/*
    该文件用于汇总所有的reducers为一个总的reducers
*/
// 引入combineReducers，用于汇总多个reducers
import {combineReducers} from 'redux'
import themeSwitchSlice from './ThemeSwitchSlice.ts'
/*
    合并所有 reducer
*/
const allReducers = combineReducers(
    {
        isDarkMode: themeSwitchSlice
    }
)

export default allReducers