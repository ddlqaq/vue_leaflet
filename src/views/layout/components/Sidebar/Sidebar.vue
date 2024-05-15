<template>
  <div>
    <div class="site">
      <router-link to="/site" class="no-underline">WebSite</router-link>
    </div>
    <div class="myProject01">
      <router-link to="/project01" class="no-underline">Map</router-link>
    </div>
    <div class="myProject02">
      <router-link to="/project02" class="no-underline">StudentManage</router-link>
    </div>
    <div class="myProject03">
      <router-link to="/project03" class="no-underline">Myproject03</router-link>
    </div>
  </div>

</template>

<script>

export default {

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.site{
  background-color: rgb(211, 204, 204);
  width: 150px;
  height: 150px;
  margin: 150px 10px 20px 25px;
  outline: 2px white dashed;outline-offset:-10px;border-radius:4%;
  text-align: center;
  line-height: 150px;
}
.myProject01{
  background-color: rgb(211, 204, 204);
  width: 150px;
  height: 150px;
  margin: 90px 10px 20px 25px;
  outline: 2px white dashed;outline-offset:-10px;border-radius:4%;
  text-align: center;
  line-height: 150px;
}
.myProject02{
  background-color: rgb(211, 204, 204);
  width: 150px;
  height: 150px;
  margin: 90px 10px 20px 25px;
  outline: 2px white dashed;outline-offset:-10px;border-radius:4%;
  text-align: center;
  line-height: 150px;
}
.myProject03{
  background-color: rgb(211, 204, 204);
  width: 150px;
  height: 150px;
  margin: 90px 10px 20px 25px;
  outline: 2px white dashed;outline-offset:-10px;border-radius:4%;
  text-align: center;
  line-height: 150px;
}
.no-underline{
  text-decoration: none;
  color:rgb(44, 41, 41)
}
</style>
