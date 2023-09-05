import http from "@/utils/http";
import { FoodList } from "@/api/food/types";
import { FoodType } from "@/api/food/types";
 

 
/**
 * 接口的数据
 */
export class VegetableApi {
  /*
   * 获取音 -- 暂不可用
   * @Params: {id} : 音乐的ID
   * */
  static async getVegetable(): Promise<FoodType> {
    const res = await http.reqGet<FoodType>( `/vegetables`);
    return res.data;
  }
}