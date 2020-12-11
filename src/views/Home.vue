<template>
  <div id="Home">
    <div class="sidebar">
      <div class="header">
        <span class="font-red">天</span>
        <span class="font-orange">赐</span>
        <span class="font-yellow">的</span>
        <span class="font-green">小</span>
        <span class="font-cyan">窝</span>
      </div>
    </div>
    <div class="content">
      <Study></Study>
      <Life></Life>
      <Play></Play>
      <About></About>
    </div>
  </div>
</template>
<script>
  import Study from '../components/Study/study.vue'
  import Life from '../components/Life/life.vue'
  import Play from '../components/Play/play.vue'
  import About from '../components/About/about.vue'

  export default {
    name : 'home',
    methods:{
      /**
       * 创建图表
       */
      moveEl(el){
        let maxHeight = document.body.scrollHeight - 10;
        let maxWidth = window.screen.width;
        let left = Math.random()*maxWidth;
        let top = 0;
        el.style = 'position : absolute;top:'+top+'px;left:'+left+'px;'
        let interval = setInterval(()=>{
          top = top + Math.random()*5;
          if(top<maxHeight){
            el.style = 'position : absolute;top:'+top+'px;left:'+left+'px;'
          }else{
            console.log(top)
            console.log(maxHeight)
            el.remove()
            clearInterval(interval)
          }

        },Math.random()*500 + 100)
      },
      /**
       *
       <i class="iconfont font-orange">&#xe779;</i> 狗狗
       <i class="iconfont font-red">&#xe62a;</i> 花
       <i class="iconfont font-white">&#xe607;</i> 雪花
       */
      getIcon(el){
        let num = parseInt((Math.random()*2).toFixed(0));
        let body = document.getElementById('Home');
        switch (num) {
          case 0 :
            el.className = 'iconfont font-orange';
            el.innerHTML = '&#xe779;';
            body.append(el);
            break;
          case 1 :
            el.className = 'iconfont font-red';
            el.innerHTML = '&#xe62a;';
            body.append(el);
            break;
          case 2 :
            el.className = 'iconfont font-white';
            el.innerHTML = '&#xe607;';
            body.append(el);
            break;
        }
        this.moveEl(el);
      },
      getEl(){
        let num = parseInt((Math.random()*10).toFixed(0));
        // let num = 1;
        for (let i=0;i<num;i++){
          let el = document.createElement('i');
          this.getIcon(el)
        }
      },
    },
    mounted(){
      this.$nextTick(()=>{
        this.getEl();
        // setInterval(()=>{
        //   this.getEl();
        // },3000)
      })
    },
    components:{
      Study,
      Life,
      Play,
      About
    }
  }
</script>
<style lang="stylus" type="text/stylus">
  #Home
    width : 100vw
    height : 100vh
    overflow : hidden
    display : flex
    padding : 50px
    background-image : linear-gradient(45deg,#757F9A,#D7DDE8)
    .sidebar
      flex : 1
      .header
        font-size : 24px
        font-weight : bold
    .content
      flex : 9

</style>
