<template>
  <span :style="{fontSize:fontSize,color:color}">{{ init_num }}</span>
</template>
<script>
export default {
    props:{
        num:{
            type:Number,
            default(){
                return 0
            }
        },
        fontSize:{
            type:String,
            default(){
                return '50px'
            }
        },
        color:{
            type:String,
            default(){
                return '#606266'
            }
        },
    },
  data() {
    return {
      init_num: 0,
    };
  },
  methods: {
    count_num() {
      if (this.num < 100) {
        this.init_num += 1;
      } else if (this.num <= 1000) {
        this.init_num += parseInt(Math.random()*20,10)+1;
      } else if (this.num <= 10000) {
        this.init_num += parseInt(Math.random()*100,10)+1;
      }else{
        this.init_num += parseInt(Math.random()*1000,10)+1;  
      }
      if (this.init_num >= this.num) {
        this.init_num = this.num;
      } else {
        setTimeout(() => {
          this.count_num();
        }, 50);
      }
    },
  },
  mounted() {
    this.count_num();
  },
  watch:{
      num(){
          this.init_num=0
          this.count_num()
      }
  }
};
</script>