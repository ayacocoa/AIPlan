import { Module } from "vuex";
import { TypeRootState } from "@/store/type";
import { FoodType } from "@/api/food/types";

export interface TypeCollect {
  data: Array<FoodType>;
}

export const collectData: Module<TypeCollect, TypeRootState> = {
  namespaced: true,
  state: () => ({
    data: [],
    user_data_list: [],
  }),
  mutations: {
    pushData(state, data) {
      const index = state.data.findIndex((e) => {
        return e.id === data.id;
      });
      if (index == -1) {
        state.data.push(data);
      } else {
        state.data.splice(index, 1);
      }
    },
    deleteData(state, data) {
      const index = state.data.findIndex((e) => {
        return e.id === data.id;
      });
      state.data.splice(index, 1);
    },
  },
};
