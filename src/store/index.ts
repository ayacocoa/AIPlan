
import { App, InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { TypeRootState, TypeAllState } from "./type";
import { isSideNav  } from "./modules/isSideNav";
import { isDetail  } from "./modules/isDetail";

// 创建一个新的 store 实例
const store = createStore<TypeRootState>({
  state() {
  },
  mutations: {
    },
    modules: {
      isSideNav: isSideNav,
      isDetail: isDetail
      },
});

export default store;

// 定义 injection key
const key: InjectionKey<Store<TypeRootState>> = Symbol();
// 定义自己的 `useStore` 组合式函数

export function useStore<T = TypeAllState>() {
    return baseUseStore<T>(key);
  }
export const setupStore = (app: App) => {
  app.use(store, key);
};



