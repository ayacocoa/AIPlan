import { Module } from "vuex";
  import { TypeRootState } from "@/store/type";
  
  export interface TypeModuleStateApp {
    Nav: boolean;
  }
  
export const isSideNav: Module<TypeModuleStateApp, TypeRootState> = {
      namespaced: true,
    state: () => ({
      Nav: false,
      }),
    mutations: {
        Change(state) {
           
            state.Nav = !state.Nav
        }
    }
  };