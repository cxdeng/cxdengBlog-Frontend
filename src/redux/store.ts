import { configureStore } from '@reduxjs/toolkit';
import themeSwitchReducer from './Slices/ThemeSwitchSlice.ts';

const store = configureStore({
    reducer: {
        // 注册 Reducer，themeSwitch 是状态片段的名称，对应 themeSwitchReducer
        themeSwitch: themeSwitchReducer,
    },
});

// 定义 RootState 类型，用于推断全局状态的类型
export type RootState = ReturnType<typeof store.getState>;
// 定义 AppDispatch 类型，用于类型化 Dispatch
export type AppDispatch = typeof store.dispatch;
// 导出 Store，供 React 应用绑定
export default store;