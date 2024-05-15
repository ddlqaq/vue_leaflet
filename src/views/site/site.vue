<template>
  <div class="container">
      <div class="content">
          <div class="common-website">
              <h1>常用网址</h1>
              <div class="row" v-for="(group, groupIndex) in commonWebsiteChunks" :key="groupIndex">
                <!-- 遍历每个子数组 -->
                <div class="url" v-for="item in group" :key="item.id">
                  <!--遍历每个子数组的item  -->
                  <a :href="item.link" target='_blank'>{{ item.name }}</a>
                </div>
              </div>
          </div>
          <div class="font-web">
              <h1>前端</h1>
              <div class="row" v-for="(group, groupIndex) in fontWebChunks" :key="groupIndex">
                <div class="url" v-for="item in group" :key="item.id">
                    <a :href="item.link" target='_blank'>{{ item.name }}</a>
                  </div>
              </div>
          </div>
          <div class="webGis">
              <h1>WebGIS</h1>
              <div class="row" v-for="(group, groupIndex) in webGisChunks" :key=" groupIndex">
                <div class="url" v-for="item in group" :key="item.id">
                    <a :href="item.link" target='_blank'>{{ item.name }}</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'site',
  data () {
    return {
      commonWebsite: [
        { id: 1, name: 'coze', link: 'https://www.coze.com/space/7350657124722556946/bot/7350658103907565570' },
        { id: 2, name: 'bilibili', link: 'https://www.bilibili.com' },
        { id: 3, name: '百度', link: 'https://www.baidu.com' },
        { id: 4, name: 'coze', link: 'https://www.coze.com/space/7350657124722556946/bot/7350658103907565570' },
        { id: 5, name: 'bilibili', link: 'https://www.bilibili.com' },
        { id: 6, name: '百度', link: 'https://www.baidu.com' }
      ],
      fontWeb: [
        { id: 1, name: 'element ui', link: 'https://element.eleme.cn/#/zh-CN/component/slider' },
        { id: 2, name: 'vue2', link: 'https://v2.cn.vuejs.org/v2/guide/' },
        { id: 3, name: '草图设计', link: 'https://excalidraw.com/' },
        { id: 4, name: 'swiper', link: 'https://www.swiper.com.cn/' },
        { id: 5, name: '草图设计', link: 'https://excalidraw.com/' },
        { id: 6, name: 'swiper', link: 'https://www.swiper.com.cn/' }
      ],
      webGis: [
        { id: 1, name: 'Suoermap_leaflet', link: 'https://iclient.supermap.io/web/introduction/leafletDevelop.html' },
        { id: 2, name: 'bilibili', link: 'https://www.bilibili.com' },
        { id: 3, name: '百度', link: 'https://www.baidu.com' },
        { id: 4, name: 'coze', link: 'https://www.coze.com/space/7350657124722556946/bot/7350658103907565570' },
        { id: 5, name: 'bilibili', link: 'https://www.bilibili.com' },
        { id: 6, name: '百度', link: 'https://www.baidu.com' }
      ]
    }
  },
  computed: {
    commonWebsiteChunks () {
      return this.chunk(this.commonWebsite)
    },
    fontWebChunks () {
      return this.chunk(this.fontWeb)
    },
    webGisChunks () {
      return this.chunk(this.webGis)
    }
  },
  methods: {
    // 对数组进行分组，6个一组作为一个子数组
    chunk (arr, chunkSize = 6) {
      return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_v, i) =>
        arr.slice(i * chunkSize, i * chunkSize + chunkSize))
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 50px 50px 0 50px;
  overflow: auto;
  height: 1100px;
}
.content {
  width: calc(100% - 100px);
}
.row {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.url {
  width: 240px;
  height: 120px;
  background-color: #f0f0f0;
  border: 1px dashed #ccc;
  text-align: center;
  margin: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 120px;
}
a {
  color: inherit;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
}
</style>
