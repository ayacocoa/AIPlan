import { Module } from "vuex";
import { TypeRootState } from "@/store/type";

export interface TypeDetailStateApp {
  Detail: boolean;
  data: dataType;
}
type dataType = {
  src?: string;
  title?: string;
  id?: number;
  detail?: string;
};

export const isDetail: Module<TypeDetailStateApp, TypeRootState> = {
  namespaced: true,
  state: () => ({
    Detail: false,
    data: {},
  }),
  mutations: {
    Change(state, data) {
      state.Detail = !state.Detail;
      state.data = data;
      console.log(data);
    },
  },
};
