<template>
  <div class="data-sharing-report page-content">
    <div class="patient-info-box row-box">
      <div class="title-info">基本信息</div>
      <div class="patient-info">
        <span class="label">姓名</span><span>张三</span><span class="label">性别</span><span>男</span><span class="label">年龄</span><span>12</span><span class="label">类型</span><span>CT</span><span class="label">部位</span><span>胸部</span><span class="label">项目</span><span>胸部平扫</span>
      </div>
    </div>
    <ReportLeft></ReportLeft>
    <ReportRight></ReportRight>
  </div>
</template>
<script>
import ReportLeft from './reportLeft'
import ReportRight from './reportRight'
export default {
  components: {
    ReportLeft,
    ReportRight
  }
}
</script>
<style lang="less">
.data-sharing-report {
  .patient-info-box {
    height: 40px;
    .patient-info {
      margin-left: 20px;
      color: #333333;
      .label {
        color: #666666;
        margin-left: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>
