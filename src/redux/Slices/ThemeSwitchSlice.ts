import { createSlice } from '@reduxjs/toolkit';

// 定义状态的类型
interface ThemeSwitchState {
    isDarkMode: boolean; // 表示当前是否为暗模式
}

// 定义状态的初始值
const initialState: ThemeSwitchState = {
    isDarkMode: true, // 默认是深色模式
};

// 创建一个 Slice（状态片段）
export const themeSwitchSlice = createSlice({
    name: 'themeSwitch',
    initialState,
    reducers: {
        // 定义一个名为 `changeTheme` 的 reducer（用于修改状态）
        changeTheme: (state, action) => {
            state.isDarkMode = action.payload; // 切换主题
        }
    },
});

// 导出该 Slice 自动生成的 Action，用于触发状态更新
export const { changeTheme } = themeSwitchSlice.actions;
// 导出该 Slice 的 Reducer，用于注册到 Redux Store 中
export default themeSwitchSlice.reducer;