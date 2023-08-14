import http from "@/utils/http";
import { Vegetableslist } from "@/api/vegetables/types";
import { VegetablesType } from "@/api/vegetables/types";
 
const cloudBaseUrl = "";
// const cloud = "/api";
 
/**
 * 网易云音乐开放接口的数据
 */
export class VegetableApi {
  /*
   * 获取音乐  -- 暂不可用
   * @Params: {id} : 音乐的ID
   * */
  static async getVegetable(): Promise<VegetablesType> {
    const res = await http.reqGet<VegetablesType>(cloudBaseUrl + `/vegetables`);
    return res.data;
  }
}