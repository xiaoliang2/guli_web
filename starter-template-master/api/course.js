import request from '@/utils/request'

export default {
  // 条件分页课程查询的方法
  getCourseList(page,limit,searchObj) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 查询所有分类的方法
  getAllSubject() {
    return request({
      url: '/eduservice/subject/getAllSubject',
      method: 'get'
    })
  },
  // 课程详情的方法
  getCourseInfo(id) {
    return request({
      url: '/eduservice/coursefront/getFrontCourseInfo/'+id,
      method: 'get'
    })
  },
//   查询课程评论分页的方法
  getComment(id,page,limit)
{
    return request({
        url: `/eduservice/educomment/pageComment/${id}/${page}/${limit}`,
        method: 'post'
    })
},
// 添加评论方法
addComment(comment)
{
    return request({
        url: `/eduservice/educomment/addcomment`,
        method:'post',
        data: comment
    })
}

}