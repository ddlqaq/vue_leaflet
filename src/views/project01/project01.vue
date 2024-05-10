<template>
  <div>
  <div id="map"></div>
</div>
</template>

<script>
import L from 'leaflet'
export default {
  data () {
    return {
      map: ''
    }
  },
  mounted () {
    this.initDate()
  },
  methods: {

    // 地图初始化信息（重新加载地图后的参数）
    initDate () {
      this.map = L.map('map', {
        center: [40.02404009136253, 116.50641060224784], // 地图中心
        zoom: 14, // 缩放比列
        zoomControl: false, // 禁用 + - 按钮
        doubleClickZoom: false, // 禁用双击放大
        attributionControl: false // 移除右下角leaflet标识
      })

      // 图层信息
      L.tileLayer(
        'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        {
          attribution: '&copy; <a href="#">ddl</a>',
          maxZoom: 18,
          subdomains: '1234'
        }
      ).addTo(this.map)

      // 引入leaflet.pm的原生功能
      this.map.pm.addControls({
        position: 'topleft',
        drawPolygon: true, // 添加绘制多边形
        drawMarker: true, // 添加按钮以绘制标记
        drawCircleMarker: true, // 添加按钮以绘制圆形标记
        drawPolyline: true, // 添加按钮绘制线条
        drawCircle: true, //  添加按钮绘制圆圈
        editMode: true, //  添加按钮编辑多边形
        dragMode: true, //   添加按钮拖动多边形
        cutPolygon: true, // 添加一个按钮以删除图层里面的部分内容
        removalMode: true // 清除图层
      })
      // 设置leaflet.pm绘制后的线条颜色等
      this.map.pm.setPathOptions({
        color: 'orange',
        fillColor: 'green',
        fillOpacity: 0.4
      })
      this.map.pm.setLang('zh') // 设置leaflet.pm语言
    }
  }
}
</script>

<style scoped>
#map {
  width: 2000px;
  height: 1000px;
  /* border: 1px solid black; */
  margin: 0 auto;
}
</style>
