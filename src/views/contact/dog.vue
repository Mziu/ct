<template>
  <div class="box">
    <span>行内元素垂直居中</span>
    <div class="img-box">
      <img src="http://mziu.club/banner-01.png"/>
    </div>
  </div>
</template>
<style lang="stylus" scoped>

.box{
	width: 100%;
	margin: 50px auto;
}
.img-box{
	width: 100%;
	position:relative;
	z-index:1;
}
.img-box img{
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	width:100%;
	margin:auto;
	z-index: -1;
	*zoom:1;
}
.img-box:before {
	content: "";
	display: inline-block;
	padding-bottom: 100%;
	width: 0.1px;	/*必须要有数值，否则无法把高度撑起来*/
	vertical-align: top;
}
</style>
