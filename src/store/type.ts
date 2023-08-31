/**
 * 模块state类型引入
 */
import { TypeModuleStateApp } from "./modules/isSideNav";
import { TypeDetailStateApp } from "./modules/isDetail";
import { TypeVegetablesStateApp } from "./modules/vegetablesData";

/**
 * root层state类型定义
 */
export interface TypeRootState {}
/**
 * vuex所有state类型定义集成
 */
export interface TypeAllState extends TypeRootState {
  isSideNav: TypeModuleStateApp;
  isDetail: TypeDetailStateApp;
  vegetablesData: TypeVegetablesStateApp;
}
