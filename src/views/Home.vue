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
       *
       <i class="iconfont font-orange">&#xe779;</i> 狗狗
       <i class="iconfont font-red">&#xe62a;</i> 花
       <i class="iconfont font-white">&#xe607;</i> 雪花
       */
      getIcon(){
        let num = (Math.random()*2).toFixed(0);
        let el = document.createElement('i');
        switch (num) {
          case 0 :

          case 1 :

        }
      }
    },
    created(){
      this.getIcon();
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
