import request from '@/utils/request'

export default {

    // 添加课程信息
    
    addCourseInfo(courseInfo) {
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `/eduservice/course/addCourseInfo`,
            method: 'post',
            data: courseInfo
        
          })

},
// 查询所有讲师

getListTeacher(){
    return request({
        //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
        url: `/eduservice/teacher/findAll`,
        method: 'get'
    
      })
},
// 根据课程id查询课程基本信息
getCourseInfoId(id){
    return request({
        //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
        url: `/eduservice/course/getCourseInfo/${id}`,
        method: 'get'
    
      })
},
// 修改课程信息
updateCourseInfo(courseInfo){
    return request({
        //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
        url: `/eduservice/course/updateCourseInfo`,
        method: 'post',
        data: courseInfo
    
      })
},
// 课程确认信息显示
getPublishCourseInfo(id)
{
    return request({
        //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
        url: `/eduservice/course/getPublishCourseInfo/${id}`,
        method: 'get'
    
      })
},
// 课程最终发布
publihCourse(id)
{
    return request({
        //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
        url: `/eduservice/course/publishCourse/${id}`,
        method: 'post'
    
      })
},
//  查询所有课程
getListCourse()
{
    return request({
        url: `/eduservice/course`,
        method: 'get'
    })
},
//  删除课程
deleteCourseId(id){

    return request({
        url: `/eduservice/course/${id}`,
        method: 'delete'
    })

}

}