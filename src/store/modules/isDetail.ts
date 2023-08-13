import { Module } from "vuex";
  import { TypeRootState } from "@/store/type";
  
  export interface TypeDetailStateApp {
    Detail: boolean;
  }
  
export const isDetail: Module<TypeDetailStateApp, TypeRootState> = {
      namespaced: true,
    state: () => ({
        Detail: false,
      }),
    mutations: {
        Change(state) {
           
            state.Detail = !state.Detail
        }
    }
  };