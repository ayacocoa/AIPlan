import http from "@/utils/http";
import { VideoType } from "@/api/video/types";

// const cloud = "/api";
 
/**
 * 开放接口的数据
 */
export class VideoApi {
  /*
   * 获取音 -- 暂不可用
   * @Params: {id} : 音乐的ID
   * */
  static async getVideoApi(): Promise<VideoType> {
    const res = await http.reqPost<VideoType>( `/video`);
    return res.data;
  }
}