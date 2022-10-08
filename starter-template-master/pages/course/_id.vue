<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        \
        <a href="#" title class="c-999 fsize14">{{
          courseWebVo.subjectLevelOne
        }}</a>
        \
        <span class="c-333 fsize14">{{ courseWebVo.subjectLevelTwo }}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px">
          <section class="p-h-video-box" id="videoPlay">
            <img
              height="357px"
              :src="courseWebVo.cover"
              :alt="courseWebVo.title"
              class="dis c-v-pic"
            />
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{ courseWebVo.title }}</span>
            </h2>
            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b class="c-yellow" style="font-size: 24px"
                >￥{{ courseWebVo.price }}</b
              >
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14"
                >主讲： {{ courseWebVo.teacherName }}&nbsp;&nbsp;&nbsp;</span
              >
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                <a class="c-fff vam" title="收藏" href="#">收藏</a>
              </span>
            </section>
            <section v-if="isBuy || Number(courseWebVo.price) === 0" class="c-attr-mt">
              <a
                
                href="#"
                title="立即观看"
                class="comm-btn c-btn-3"
                >立即观看</a
              >
            </section>
            <section v-else class="c-attr-mt">
              <a
                @click="createOrders()"
                href="#"
                title="立即购买"
                class="comm-btn c-btn-3"
                >立即购买</a
              >
            </section>
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.buyCount }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.lessonNum }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.viewCount }}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p v-html="courseWebVo.description">
                        {{ courseWebVo.description }}
                      </p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li
                            class="lh-menu-stair"
                            v-for="chapter in chapterVideoList"
                            :key="chapter.id"
                          >
                            <a
                              href="javascript: void(0)"
                              :title="chapter.title"
                              class="current-1"
                            >
                              <em class="lh-menu-i-1 icon18 mr10"></em
                              >{{ chapter.title }}
                            </a>

                            <ol class="lh-menu-ol" style="display: block">
                              <li
                                class="lh-menu-second ml30"
                                v-for="video in chapter.children"
                                :key="video.id"
                              >
                                <a
                                  :href="'/player/' + video.videoSourceId"
                                  target="_blank"
                                >
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em
                                  >{{ video.title }}
                                </a>
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
                <!-- 评论 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程评论</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <el-table :data="data.rows" stripe style="width: 100%">
                        <el-table-column
                          prop="nickname"
                          label="昵称"
                          width="180"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="content"
                          label="内容"
                          width="180"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                    <el-pagination
                      :current-page="page"
                      :page-size="limit"
                      :total="total"
                      style="padding: 30px 0; text-align: center"
                      layout="total, prev, pager, next, jumper"
                      @current-change="getList"
                    />
                  </section>

                  <el-form>
                    <el-form-item label="评论">
                      <el-input v-model="comment.content" />
                    </el-form-item>

                    <el-form-item>
                      <el-button type="primary" @click="submitForm()"
                        >提交</el-button
                      >
                      <el-button @click="resetForm()">重置</el-button>
                    </el-form-item>
                  </el-form>
                </div>
                <!-- 评论 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto">
                  <li>
                    <div class="u-face">
                      <a href="#">
                        <img
                          :src="courseWebVo.avatar"
                          width="50"
                          height="50"
                          alt
                        />
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a class="c-333 fsize16 fl" href="#">{{
                        courseWebVo.teacherName
                      }}</a>
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{ courseWebVo.intro }}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
  </div>
</template>

<script>
import courseApi from "@/api/course";
import "~/assets/css/reset.css";
import "~/assets/css/theme.css";
import "~/assets/css/global.css";
import "~/assets/css/web.css";

import cookie from "js-cookie";
import loginApi from "@/api/login";
import teacherApi from "@/api/teacher";
import ordersApi from '@/api/orders'
export default {
  data() {
    return {
      list: null, //查询之后接口返回集合
      limit: 6, //每页记录数
      total: 0, //总记录数
      page: 1, // 当前页
      data: {}, //
      courseWebVo: {}, //
      chapterVideoList: [], //

      comment: {
        teacherId: "",
        courseId: "",
        memberId: "",
        nickname: "",
        avatar: "",
        content: "",
      },
      token: "",
      loginInfo: {
        id: "",
        age: "",
        avatar: "",
        mobile: "",
        nickname: "",
        sex: "",
      },
      courseId: '',
      isBuy: false
    };
    // },
    // asyncData({ params, error }) {
    //   return courseApi.getCourseInfo(params.id).then((response) => {
    //     return {
    //       courseWebVo: response.data.data.courseWebVo,
    //       chapterVideoList: response.data.data.chapterVideoList,

    //     }

    //   })
  },
  created() {
    this.getCommentInfo();
    this.getCourse();
    this.getList()
  },
  methods: {
    getCourse() {
      courseApi.getCourseInfo(this.$route.params.id).then((response) => {
        this.courseWebVo = response.data.data.courseWebVo;
        this.chapterVideoList = response.data.data.chapterVideoList;
        this.courseId = this.$route.params.id
        this.isBuy = response.data.data.isBuy
      });
    },
    submitForm() {
      // alert(this.comment.content)
      // 设置课程id
      this.comment.courseId = this.$route.params.id;

      this.comment.teacherId = this.courseWebVo.teacherId;

      alert(this.comment.teacherId);
      // 调用接口，根据token值获取用户信息
      loginApi.getLoginUserInfo().then((response) => {
        // console.log('################'+response.data.data.userInfo)
        this.loginInfo = response.data.data.userInfo;
        var loginInfoStr = JSON.stringify(this.loginInfo);
        cookie.set("guli_ucenter", loginInfoStr, { domain: "localhost" });
      });
      // 从cookie获取用户信息
      var userStr = cookie.get("guli_ucenter");
      // 把字符串转换json对象(js对象)

      // console.log("1"+userStr)
      if (userStr) {
        this.loginInfo = JSON.parse(userStr);
        // console.log("2"+this.loginInfo.id)
      }
      this.comment.memberId = this.loginInfo.id;
      this.comment.nickname = this.loginInfo.nickname;
      this.comment.avatar = this.loginInfo.avatar;
      courseApi.addComment(this.comment).then((response) => {
        //添加成功
        //提示信息
        this.$message({
          type: "success",
          message: "添加成功!",
        });
        //回到列表页面 路由跳转
        this.resetForm();
        this.$router.push({ path: "/course/" + this.$route.params.id });
      });
    },
    resetForm() {
      this.comment = {};
    },
    getCommentInfo() {
      courseApi.getComment(this.$route.params.id, 1, 6).then((response) => {
        this.data = response.data.data;
        // console.log("=====" + this.data.rows[1].id);
      });
    },
     getList(page=1) {
      this.page = page;
      courseApi.getComment(this.$route.params.id, this.page, this.limit).then((response) => {
        //请求成功
        //response接口返回的数据
        //console.log(response)
        this.list = response.data.data.rows;
        this.total = response.data.data.total;
        this.data = response.data.data;
        // alert(this.list)
        // alert(this.total);
      });
    },
    //  生成订单
    createOrders()
    {
      ordersApi.createOrders(this.courseId)
      .then(response => {
        // 获取返回的订单号
        response.data.data.orderId
        // 生成订单之后,跳转订单显示页面
        this.$router.push({path:'/orders/'+response.data.data.orderId})
      })
    }
  },
};
</script>
