import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import userSlice from "./userSlice";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["user"],
}

const rootReducer = combineReducers({
    user: userSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // 非シリアライズ可能な値のチェックを無効化
        }),
});

export const persistor = persistStore(store);
