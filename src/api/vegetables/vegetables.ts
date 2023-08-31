import http from "@/utils/http";
import { Vegetableslist } from "@/api/vegetables/types";
import { VegetablesType } from "@/api/vegetables/types";
 

// const cloud = "/api";
 
/**
 * 接口的数据
 */
export class VegetableApi {
  /*
   * 获取音 -- 暂不可用
   * @Params: {id} : 音乐的ID
   * */
  static async getVegetable(): Promise<VegetablesType> {
    const res = await http.reqGet<VegetablesType>( `/vegetables`);
    return res.data;
  }
}