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
        drawCircleMarker: false, // 添加按钮以绘制圆形标记
        drawPolyline: true, // 添加按钮绘制线条
        drawCircle: true, //  添加按钮绘制圆圈
        editMode: true, //  添加按钮编辑多边形
        dragMode: true, //   添加按钮拖动多边形
        cutPolygon: true, // 添加一个按钮以删除图层里面的部分内容
        removalMode: true // 清除图层
      })
      this.map.pm.setPathOptions({ // 设置leaflet.pm绘制后的线条颜色等
        color: 'orange',
        fillColor: 'green',
        fillOpacity: 0.4
      })
      this.map.pm.setLang('zh')

      // 给地图加上事件监听器
      this.map.on('pm:create', (e) => { // 当使用pm创建地理对象(点、线、面)的时候触发，e是监听到的事件
        console.log(e)
        console.log(e.shape)

        // 点：经纬度
        if (e.shape === 'Marker') {
          const marker = e.layer //  获得创建的标记
          marker.on('click', () => { //  标记的Marker点击后，加上弹窗
            const latLng = marker.getLatLng() // 获取marker的经纬度
            L.popup()
              .setLatLng(marker.getLatLng())
              .setContent(`<p>Lat: ${latLng.lat}</p> <p>Lng: ${latLng.lng}</p>`) // 显示经纬度
              .openOn(this.map)
          })
        }

        // 线：距离
        if (e.shape === 'Line') {
          const line = e.layer
          line.on('click', () => {
            // 获取线的所有点
            const latlngs = line.getLatLngs()
            // 初始化总距离
            let totalDistance = 0
            // 循环计算每两个点之间的距离并累加到总距离
            for (let i = 0; i < latlngs.length - 1; i++) {
              totalDistance += latlngs[i].distanceTo(latlngs[i + 1])
            }
            // 显示弹窗，其中包含这条线的总距离
            L.popup()
              .setLatLng(line.getLatLngs()[0]) // 设置在线的第一个点位置显示弹窗
              .setContent(`<p>Total distance: ${totalDistance} meters</p>`) // 显示总距离
              .openOn(this.map)
          })
        }

        // 圆：面积
        if (e.shape === 'Circle') {
          const circle = e.layer
          circle.on('click', () => {
            const radius = circle.getRadius() //  获取半径
            const area = Math.PI * Math.pow(radius, 2) //  计算面积
            L.popup()
              .setLatLng(circle.getLatLng())
              .setContent(`<p>Area: ${area} square meters</p>`)
              .openOn(this.map)
          })
        }

        // 多边形：面积
        if (e.shape === 'Rectangle' || e.shape === 'Polygon') {
          const rectangle = e.layer
          rectangle.on('click', () => {
            const latlngs = rectangle.getLatLngs()
            let area = 0
            for (let i = 0; i < latlngs[0].length - 1; i++) {
              area += latlngs[0][i].distanceTo(latlngs[0][i + 1]) * latlngs[0][i].lng * 2
            }
            area = Math.abs(area) / 2
            L.popup()
              .setLatLng(rectangle.getBounds().getCenter())
              .setContent(`<p>Area: ${area} square meters</p>`)
              .openOn(this.map)
          })
        }
      })
    }
  }
}
</script>

<style scoped>
#map {
  width: 2000px;
  height: 1000px;
  border: 1px solid black;
  margin: 0 auto;
}

</style>
