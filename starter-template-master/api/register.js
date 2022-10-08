
import request from '@/utils/request'
//     根据手机号发送验证码
export default {
  sendCode(phone) {
    return request({
      url: `/edumsm/msm/send/${phone}`,
      method: 'get'
    })
  },

//   注册的方法

registerMember(forItem){
    return request({
        url: `/educenter/member/register`,
        method: 'post',
        data: forItem
      })
}
}