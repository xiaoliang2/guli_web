
import request from '@/utils/request'

export default {
    // 获取视频播放凭证
    getPlayAuth(vid) {
    return request({
      url: `/eduvod/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  }
}