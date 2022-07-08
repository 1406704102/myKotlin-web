<template>
  <vueQr
    :text="data.text"
    :correctLevel="data.correctLevel"
    :size="data.size"
    :margin="data.margin"
    :colorDark="data.colorDark"
    :colorLight="data.colorLight"
    :bgSrc="data.bgSrc"
    :background="data.background"
    :backgroundDimming="data.backgroundDimming"
    :logoSrc="data.logoSrc"
    :logoBackgroundColor="data.logoBackgroundColor"
    :gifBgSrc="data.gifBgSrc"
    :logoScale="data.logoScale"
    :logoMargin="data.logoMargin"
    :logoCornerRadius="data.logoCornerRadius"
    :whiteMargin="data.whiteMargin"
    :dotScale="data.dotScale"
    :autoColor="data.autoColor"
    :binarize="data.binarize"
    :binarizeThreshold="data.binarizeThreshold"
    :callback="data.callback"
    :bindElement="data.bindElement"
    :backgroundColor="data.backgroundColor"
  ></vueQr>
</template>
<script>
import vueQr from "vue-qr/src/packages/vue-qr.vue";
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          text: "unit",//欲编码的内容
          correctLevel: 1,// 容错级别 0-3
          size: 200,//尺寸, 长宽一致, 包含外边距
          margin: 20,//二维码图像的外边距, 默认 20
          colorDark: "#000000",//实点的颜色
          colorLight: "#FFFFFF",//空白区的颜色
          bgSrc: "",//欲嵌入的背景图地址
          gifBgSrc: "",//欲嵌入的背景图 gif 地址,设置后普通的背景图将失效。设置此选项会影响性能
          background: "",//背景内容
          backgroundColor: "",//背景色
          backgroundDimming: "",//叠加在背景图上的颜色, 在解码有难度的时有一定帮助
          logoSrc: "",// 嵌入至二维码中心的 LOGO 地址
          logoBackgroundColor: "",//背景色,需要设置 logo margin
          logoScale: "",//用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 logoScale*(size-2*margin), 默认 0.2
          logoMargin: "",// LOGO 标识周围的空白边框, 默认为0
          logoCornerRadius: "",// 标识及其边框的圆角半径, 默认为0
          whiteMargin: "",//若设为 true, 背景图外将绘制白色边框
          dotScale: "",//数据区域点缩小比例,默认为0.35
          autoColor: "",//背景图的主要颜色将作为实点的颜色, 即 colorDark,默认 true
          binarize: "",//图像将被二值化处理, 未指定阈值则使用默认值
          binarizeThreshold: "",//二值化处理的阈值
          callback: "",//生成的二维码 Data URI 可以在回调中取得,第一个参数为二维码 data URL, 第二个参数为 props 传过来的 qid(因为二维码生成是异步的,所以加个 id 用于排序)
          bindElement: "",//指定是否需要自动将生成的二维码绑定到HTML上, 默认是TRUE
        };
      },
    },
  },
  components: {
    vueQr,
  },
  data() {
    return {};
  },
};
</script>