import { Module } from "vuex";
import { TypeRootState } from "@/store/type";
import { VegetableApi } from "../../api/vegetables/vegetables";
import { VegetablesType } from "@/api/vegetables/types";

export interface TypeVegetablesStateApp {
  data: Array<VegetablesType>;
  user_data_list: Array<VegetablesType>;
}

export const vegetablesData: Module<TypeVegetablesStateApp, TypeRootState> = {
  namespaced: true,
  state: () => ({
    data: [],
    user_data_list: [],
  }),
  mutations: {
    getData(state) {
      // state.data = [];
      VegetableApi.getVegetable().then((res) => {
        // @ts-ignore
        res.forEach((e) => {
          state.data.push(e);
        });
      });
    },
    pushData(state, data) {
      state.user_data_list.push(data);
    },
    deleteData(state, data) {
      const index = state.user_data_list.findIndex((e) => {
        return e.id === data.id;
      });
      state.user_data_list.splice(index, 1);
    },
  },
};
