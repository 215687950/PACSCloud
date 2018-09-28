<template>
  <div class="data-sharing-report-right">
    <Button class="view-image" type="default">查看影像</Button>
    <Tabs value="name1">
      <TabPane class="diagnosis-details" label="诊断详情" name="name1">
        <div class="title">检查所见</div>
        <div class="text-box" style="flex: 3;overflow: auto;">
          肝移植术后：移植肝大小、形态及密度未见异常。肝内外胆管无扩张。肝周、肝门部及格林森鞘可见少量液性密度影，肝周可见引流管影。脾脏增大、密度未见明显异常。胆囊不大。胰腺大小形态及密度正常，双侧肾上腺大小、密度未见明显异常。腹膜后见数个小淋巴结影。
          双侧肾脏大小、形态未见异常，左肾见小囊状低密度灶；右肾未见明显异常密度影。双侧输尿管走行区未见明显异常，膀胱充盈可，壁未见明显增厚，前列腺大小形态未见明显异常，内可见斑点状钙化灶。双侧精囊腺密度未见明显异常。盆腔内未见明显肿大淋巴结。
          肠道未见明显扩张，肠壁未见明显增厚及肿块影。
        </div>
        <div class="title">检查意见</div>
        <div class="text-box" style="flex: 1;overflow: auto;">
          1.肝移植术后改变；肝周、肝门部及格林森鞘少量积液。
          2.脾大。
          3.左肾低密度灶；前列腺钙化灶。
          附见：两侧胸腔少量积液伴两肺下叶部分肺不张，对比前片（2018.9.14）积液有所吸收。
        </div>
        <div class="title">
          <div>
            <span class="label">报告时间</span><span>2018/09/28 11:20:30</span>
          </div>
          <div>
            <span class="label">报告医生</span><span>叶胜利</span><span></span><span class="label">审核医生</span><span>叶胜利</span>
          </div>
        </div>
      </TabPane>
      <TabPane label="图文报告" name="name2">标签二的内容</TabPane>
      <TabPane class="register-details" label="申请单详情" name="name3">
        <div>
          <div class="title-info mt10">病人信息</div>
          <Row class="mt10">
            <Col span="6"><span class="label">姓名</span><span>张三</span></Col>
            <Col span="6"><span class="label">性别</span><span>男</span></Col>
            <Col span="6"><span class="label">年龄</span><span>18</span></Col>
            <Col span="6"><span class="label">病人类型</span><span>急诊</span></Col>
          </Row>
          <Row class="mt10">
            <Col span="12"><span class="label">联系方式</span><span>18339983917</span></Col>
            <Col span="12"><span class="label">身份证</span><span>412727199110306551</span></Col>
          </Row>
          <Row class="mt10">
            <Col span="12"><span class="label">患者ID</span><span>18339983917</span></Col>
            <Col span="12"><span class="label">就诊卡号</span><span>412727199110306551</span></Col>
          </Row>
          <Row class="mt10">
            <Col span="6"><span class="label">病床号</span><span>张三</span></Col>
            <Col span="6"><span class="label">病历号</span><span>男</span></Col>
            <Col span="6"><span class="label">申请卡号</span><span>18</span></Col>
            <Col span="6"><span class="label">检查号</span><span>急诊</span></Col>
          </Row>
        </div>
        <div>
          <div class="title-info mt10">检查信息</div>
          <Row class="mt10">
            <Col span="12"><span class="label">检查项目</span><span>18339983917</span></Col>
            <Col span="12"><span class="label">申请科室</span><span>412727199110306551</span></Col>
          </Row>
          <Row class="mt10">
            <Col span="12"><span class="label">申请医生</span><span>18339983917</span></Col>
            <Col span="12"><span class="label">检查部位</span><span>412727199110306551</span></Col>
          </Row>
        </div>
        <div>
          <div class="title-info mt10">临床信息</div>
          <div class="mt10 flex-row">
            <div class="row-title">临床表现</div>
            <div>移植肝大小、形态及密度未见异常。肝内外胆管无扩张。</div>
          </div>
          <div class="mt10 flex-row">
            <div class="row-title">临床诊断</div>
            <div>移植肝大小、形态及密度未见异常。肝内外胆管无扩张。移植肝大小、形态及密度未见异常。肝内外胆管无扩张。移植肝大小、形态及密度未见异常。肝内外胆管无扩张。移植肝大小、形态及密度未见异常。肝内外胆管无扩张。移植肝大小、形态及密度未见异常。肝内外胆管无扩张。移植肝大小、形态及密度未见异常。肝内外胆管无扩张。移植肝大小、形态及密度未见异常。肝内外胆管无扩张。</div>
          </div>
          <div class="mt10 flex-row">
            <div class="row-title">病史记录</div>
            <div>肝移植术后：移植肝大小、形态及密度未见异常。肝内外胆管无扩张。肝周、肝门部及格林森鞘可见少量液性密度影，肝周可见引流管影。脾脏增大、密度未见明显异常。胆囊不大。胰腺大小形态及密度正常，双侧肾上腺大小、密度未见明显异常。腹膜后见数个小淋巴结影。双侧肾脏大小、形态未见异常，左肾见小囊状低密度灶；右肾未见明显异常密度影。双侧输尿管走行区未见明显异常，膀胱充盈可，壁未见明显增厚，前列腺大小形态未见明显异常，内可见斑点状钙化灶。双侧精囊腺密度未见明显异常。盆腔内未见明显肿大淋巴结。肠道未见明显扩张，肠壁未见明显增厚及肿块影。</div>
          </div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import Tabs from '@/components/tabs'
import Button from '@/components/button'
import Row from '@/components/row'
import Col from '@/components/col'
export default {
  components: {
    Tabs,
    TabPane: Tabs.Pane,
    Button,
    Row,
    Col
  }
}
</script>
<style lang="less">
.data-sharing-report-right {
  position: absolute;
  left: calc(40% + 30px);
  right: 20px;
  top: 50px;
  bottom: 0;
  box-shadow: 0 0 4px 0 rgba(126,126,126,0.60);
  background: #ffffff;
  padding: 15px 10px 10px;
  .view-image {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
    border: 1px solid #22B6A8;
    box-shadow: 0 1px 2px 0 rgba(128,128,128,0.50);
    border-radius: 4px;
    padding: 4px 15px 4px;
    color: #22B6A8;
  }
  .ivu-tabs {
    color: #333333;
    height: 100%;
    display: flex;
    flex-direction: column;
    .ivu-tabs-content {
      height: 100%;
    }
  }
  span.label {
    color: #666666;
  }
  .diagnosis-details {
    display: flex;
    flex-direction: column;
    .title {
      height: 30px;
      line-height: 30px;
      color: #333333;
      display: flex;
      justify-content: space-between;
      span {
        margin-right: 10px;
      }
    }
    .title:last-child {
      // height: 40px;
      line-height: 40px;
    }
    .text-box {
      padding: 4px;
      background: #E5F4F3;
    }
    .text-box::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    .text-box::-webkit-scrollbar-track {
      background: #fff;
    }
    .text-box::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #c1c1c1;
    }
  }
  .register-details {
    overflow: auto;
    .mt10 {
      margin-top: 10px;
    }
    span.label {
      margin-right: 10px;
    }
    .flex-row {
      display: flex;
      div:last-child {
        flex: 1;
      }
    }
    .row-title {
      color: #22B6A8;
      margin-right: 10px;
    }
  }
}
</style>
