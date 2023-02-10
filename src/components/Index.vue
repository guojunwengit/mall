<template>
    <div id="app">
        
       <div id="Top">
            <a href="#"><img src="../assets/Lenovo/logo.png"/></a>
            <ul>
                <li><a href="#">新品</a></li>
                <li><a href="#">定制</a></li>
                <li><a href="#">北京消费券</a></li>
                <li><a href="#">学生</a></li>
                <li><a href="#">游戏</a></li>
                <li><a href="#">直播</a></li>
                <li><a href="#">试用</a></li>
            </ul>
            <div id="LoginAndRegister">
                <a href="#">登录</a> | <a href="#">注册</a>
            </div>
            <div id="Search">
                <el-input       
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="search">               <!--顶部右侧搜索框-->
                </el-input>
            </div>
        
        </div>
        <div id="Carousel">
            <el-carousel>
                <el-carousel-item v-for="item in 10" :key="item">
                    <img :src="imgArr[item]" alt="loading..." class="image" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div id="middle" >
            <ul>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[0]"
                        @mouseover="mouseOver(0)"
                        @mouseleave="mouseLeave(0)"
                        /></a>
                    </div>
                    <div class="text" :style="color[0]">会员福利</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[1]"
                        @mouseover="mouseOver(1)"
                        @mouseleave="mouseLeave(1)"
                        /></a>
                    </div>
                    <div class="text" :style="color[1]">驱动下载</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[2]"
                        @mouseover="mouseOver(2)"
                        @mouseleave="mouseLeave(2)"
                        /></a>
                    </div>
                    <div class="text" :style="color[2]">小新铺子</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[3]"
                        @mouseover="mouseOver(3)"
                        @mouseleave="mouseLeave(3)"
                        /></a>
                    </div>
                    <div class="text" style="margin-left: -13px;" :style="color[3]">拯救者联盟</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[4]"
                        @mouseover="mouseOver(4)"
                        @mouseleave="mouseLeave(4)"
                        /></a>
                    </div>
                    <div class="text" style="margin-left: -10px;" :style="color[4]">Think家族</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[5]"
                        @mouseover="mouseOver(5)"
                        @mouseleave="mouseLeave(5)"
                        /></a>
                    </div>
                    <div class="text" :style="color[5]">手机新品</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[6]"
                        @mouseover="mouseOver(6)"
                        @mouseleave="mouseLeave(6)"
                        /></a>
                    </div>
                    <div class="text" style="margin-left: 8px;" :style="color[6]">刃天堂</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[7]"
                        @mouseover="mouseOver(7)"
                        @mouseleave="mouseLeave(7)"
                        /></a>
                    </div>
                    <div class="text" :style="color[7]">平板电脑</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[8]"
                        @mouseover="mouseOver(8)"
                        @mouseleave="mouseLeave(8)"
                        /></a>
                    </div>
                    <div class="text" style="margin-left: 20px;" :style="color[8]">选件</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[9]"
                        @mouseover="mouseOver(9)"
                        @mouseleave="mouseLeave(9)"
                        /></a>
                    </div>
                    <div class="text" style="margin-left: 20px;" :style="color[9]">智能</div>
                </li>
                <li>
                    <div><a href="#"><img :src="middleArrDisplay[10]"
                        @mouseover="mouseOver(10)"
                        @mouseleave="mouseLeave(10)"
                        /></a>
                    </div>
                    <div class="text" style="margin-left: 20px;" :style="color[10]">服务</div>
                </li>
                <li><div><a href="#"><img :src="middleArrDisplay[11]"
                    @mouseover="mouseOver(11)"
                    @mouseleave="mouseLeave(11)"
                    /></a>
                </div>
                <div class="text" :style="color[11]">以旧换新</div></li>
            </ul>
        </div>
        <div id="FirstFloow">
            <p>Lenovo电脑</p>
            <div id="Computer">
                <img src="../assets/Lenovo/Lenovo电脑.jpg" />
                <ul id="UpFourImg">
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/小新Pro14.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 60px;">联想小新Pro14&nbsp;2022标压酷睿</span>
                                <span class="SecondeLine" style="margin-left: 100px;">第12代智能英特尔® 酷睿™</span>
                                <span class="ThirtLine">￥&nbsp;5999</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/小新Air15.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 60px;">小新&nbsp;Air15&nbsp;酷睿版英特尔酷睿</span>
                                <span class="SecondeLine" style="margin-left: 120px;">第11代英特尔酷睿i5-</span>
                                <span class="ThirtLine">￥&nbsp;4599</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/小新Pro16酷睿版.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 60px;">联想小新Pro16&nbsp;2022标压酷睿</span>
                                <span class="SecondeLine" style="margin-left: 110px;">i9-12900H/Windows11</span>
                                <span class="ThirtLine">￥&nbsp;6099</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/小新Pro16锐龙版.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 60px;">联想小新Pro16&nbsp;锐龙版16.0英寸</span>
                                <span class="SecondeLine" style="margin-left: 135px;">AMD Ryzen7</span>
                                <span class="ThirtLine">￥&nbsp;5799</span>
                            </div>
                        </a> 
                    </li>
                </ul>
                <ul id="DownFourImg">
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/【定制款】拯救者.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 90px;">【定制款】联想 拯救者</span>
                                <span class="SecondeLine" style="margin-left: 120px;">i9/32G/1T SSD/RTX</span>
                                <span class="ThirtLine">￥&nbsp;13098</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/Y9000P.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 65px;">联想(Lenovo)拯救者Y9000P</span>
                                <span class="SecondeLine" style="margin-left: 110px;">i9/16G/512G/RTX 3060</span>
                                <span class="ThirtLine">￥&nbsp;9299</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/R7000.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 60px;">联想小新Pro16&nbsp;2022标压酷睿</span>
                                <span class="SecondeLine" style="margin-left: 110px;">i9-12900H/Windows11</span>
                                <span class="ThirtLine">￥&nbsp;6099</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/R9000P.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 70px;">拯救者 R9000P 2021款16英寸</span>
                                <span class="SecondeLine" style="margin-left: 50px;">AMD R7 5800H/16英寸/16GB/512G/RTX 3060</span>
                                <span class="ThirtLine">￥&nbsp;7999</span>
                            </div>
                        </a> 
                    </li>
                </ul>
            </div>
        </div>
        <div id="SecondFloow">
            <p>手机</p>
            <div id="Phone">
                <img src="../assets/Lenovo/手机.jpg" />
                <ul id="UpFourImg">
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/motoX40墨晶黑.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 110px;">moto X40 墨晶黑</span>
                                <span class="SecondeLine" style="margin-left: 100px;">第二代骁龙8 | IP68防水防尘</span>
                                <span class="ThirtLine">￥&nbsp;3999</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/motoX40碧玺蓝.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 110px;">moto X40 碧玺蓝</span>
                                <span class="SecondeLine" style="margin-left: 100px;">第二代骁龙8 | IP68防水防尘</span>
                                <span class="ThirtLine">￥&nbsp;4299</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/motoX30Pro.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 95px;">moto X30 Pro 晴霜白</span>
                                <span class="SecondeLine" style="margin-left: 110px;">2亿像素超写实影像大师</span>
                                <span class="ThirtLine">￥&nbsp;3999</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/Y70性能手机.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 90px;">联想拯救者Y70性能手机</span>
                                <span class="SecondeLine" style="margin-left: 140px;">第一代骁龙</span>
                                <span class="ThirtLine">￥&nbsp;2799</span>
                            </div>
                        </a> 
                    </li>
                </ul>
                <ul id="DownFourImg">
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/motoS30Pantone.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 70px;">moto S30 Pro Pantone限量</span>
                                <span class="SecondeLine" style="margin-left: 150px;">非凡洋红</span>
                                <span class="ThirtLine">￥&nbsp;2699</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/motoS30Pro.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 90px;">摩托罗拉 moto S30 Pro</span>
                                <span class="SecondeLine" style="margin-left: 120px;">53°曲面10亿色超感屏</span>
                                <span class="ThirtLine">￥&nbsp;2699</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/motoedgeX30.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 80px;">摩托罗拉 moto edge X30</span>
                                <span class="SecondeLine" style="margin-left: 117px;">全新一代骁龙8处理器</span>
                                <span class="ThirtLine">￥&nbsp;2299</span>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">
                            <div><img src="../assets/Lenovo/Y70.jpg" /></div>
                            <div class="text">
                                <span class="FirstLine" style="margin-left: 90px;">联想拯救者Y70性能手机</span>
                                <span class="SecondeLine" style="margin-left: 100px;">12GB+256GB OLED 冰魄白</span>
                                <span class="ThirtLine">￥&nbsp;2799</span>
                            </div>
                        </a> 
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
#Top {
    height: 90px;
}
#Top img {
    float: left;
    transform: scale(0.5);
}
#Top ul {
    float: left;
    margin-left: -110px;
}
#Top ul li {
    list-style: none;
    float: left;
    margin-top: 10px;
    margin-left: 20px;
    font-size: 20px;
}
#Top ul li a {
    text-decoration: none;
    color: black;
}
#Search {
    width: 200px;
    float: right;
    margin-top: 20px;
    margin-right: 10px;
}
#LoginAndRegister {
    float: right;
    margin-top: 30px;
    font-size: 15px;
    color: rgb(134, 134, 134);
    margin-right: 50px;
}
#LoginAndRegister a {
    text-decoration: none;
    color: black;
}
#Carousel {
    float: none;
}
.image {
    transform: scale(0.8);
    margin-left: -200px;
    margin-top: -50px;
}

#middle {
    height: 100px;
}
#middle ul {
    margin-left: 15%;
}
#middle ul li {
    list-style: none;
    float: left;
    transform: scale(0.5);
}
#middle .text {
    font-size: 20px;
}

#FirstFloow p {
    font-size: 20px;
    font-weight: bold;
    margin-left: 100px;
}
#FirstFloow #Computer {
    height: 545px;
}
#FirstFloow #Computer img {
    margin-left: 100px;
    float: left;
}

#FirstFloow #Computer #UpFourImg {
    list-style: none;
    float: left;
    margin-left: -150px;
}
#FirstFloow #Computer #UpFourImg a{
    text-decoration: none;
    color: black;
}
#FirstFloow #Computer #UpFourImg li {
    width: 150px;
    float: left;
    margin-left: 100px;
}
#FirstFloow #Computer #UpFourImg li img {
    width: 150px;
    height: 150px;

}
#FirstFloow #Computer #UpFourImg li .text .FirstLine {
    white-space: nowrap;
    font-weight: bold;
}
#FirstFloow #Computer #UpFourImg li .text .SecondeLine {
    white-space: nowrap;
    font-size: 12px;
}
#FirstFloow #Computer #UpFourImg li .text .ThirtLine {
    margin-left: 140px;
    white-space: nowrap;
    color: rgb(231, 0, 0);
}
#FirstFloow #Computer #DownFourImg {
    list-style: none;
    float: left;
    margin-left: -150px;
    margin-top: 80px;
}
#FirstFloow #Computer #DownFourImg a{
    text-decoration: none;
    color: black;
}
#FirstFloow #Computer #DownFourImg li {
    width: 150px;
    float: left;
    margin-left: 100px;
}
#FirstFloow #Computer #DownFourImg li img {
    width: 150px;
    height: 150px;

}
#FirstFloow #Computer #DownFourImg li .text .FirstLine {
    white-space: nowrap;
    font-weight: bold;
}
#FirstFloow #Computer #DownFourImg li .text .SecondeLine {
    white-space: nowrap;
    font-size: 12px;
}
#FirstFloow #Computer #DownFourImg li .text .ThirtLine {
    margin-left: 140px;
    white-space: nowrap;
    color: rgb(231, 0, 0);
}

#SecondFloow p {
    font-size: 20px;
    font-weight: bold;
    margin-left: 100px;
}
#SecondFloow #Phone {
    height: 100px;
}
#SecondFloow #Phone img {
    margin-left: 100px;
    float: left;
}

#SecondFloow #Phone #UpFourImg {
    list-style: none;
    float: left;
    margin-left: -150px;
}
#SecondFloow #Phone #UpFourImg a{
    text-decoration: none;
    color: black;
}
#SecondFloow #Phone #UpFourImg li {
    width: 150px;
    float: left;
    margin-left: 100px;
}
#SecondFloow #Phone #UpFourImg li img {
    width: 150px;
    height: 150px;

}
#SecondFloow #Phone #UpFourImg li .text .FirstLine {
    white-space: nowrap;
    font-weight: bold;
}
#SecondFloow #Phone #UpFourImg li .text .SecondeLine {
    white-space: nowrap;
    font-size: 12px;
}
#SecondFloow #Phone #UpFourImg li .text .ThirtLine {
    margin-left: 140px;
    white-space: nowrap;
    color: rgb(231, 0, 0);
}
#SecondFloow #Phone #DownFourImg {
    list-style: none;
    float: left;
    margin-left: -150px;
    margin-top: 80px;
}
#SecondFloow #Phone #DownFourImg a{
    text-decoration: none;
    color: black;
}
#SecondFloow #Phone #DownFourImg li {
    width: 150px;
    float: left;
    margin-left: 100px;
}
#SecondFloow #Phone #DownFourImg li img {
    width: 150px;
    height: 150px;

}
#SecondFloow #Phone #DownFourImg li .text .FirstLine {
    white-space: nowrap;
    font-weight: bold;
}
#SecondFloow #Phone #DownFourImg li .text .SecondeLine {
    white-space: nowrap;
    font-size: 12px;
}
#SecondFloow #Phone #DownFourImg li .text .ThirtLine {
    margin-left: 140px;
    white-space: nowrap;
    color: rgb(231, 0, 0);
}

</style>

<script>
// import { readonly } from 'vue';

export default {
    data() {
        return {
            imgArr: [
                require("../assets/Lenovo/1.jpg"),     //动态资源动态添加src被当做静态资源处理了，没有进行编译，所以要加上require.
                require("../assets/Lenovo/2.jpg"),     //不加require图片没法正常显示
                require("../assets/Lenovo/3.jpg"),
                require("../assets/Lenovo/4.jpg"),
                require("../assets/Lenovo/5.jpg"),
                require("../assets/Lenovo/6.jpg"),
                require("../assets/Lenovo/7.jpg"),
                require("../assets/Lenovo/8.jpg"),
                require("../assets/Lenovo/9.jpg"),
                require("../assets/Lenovo/10.jpg"),
                require("../assets/Lenovo/11.jpg")
            ],
            middleArr: [
                require("../assets/Lenovo/会员福利.png"),
                require("../assets/Lenovo/驱动下载.png"),
                require("../assets/Lenovo/小新铺子.png"),
                require("../assets/Lenovo/拯救者联盟.png"),
                require("../assets/Lenovo/Think家族.png"),
                require("../assets/Lenovo/手机新品.png"),
                require("../assets/Lenovo/刃天堂.png"),
                require("../assets/Lenovo/平板电脑.png"),
                require("../assets/Lenovo/选件.png"),
                require("../assets/Lenovo/智能.png"),
                require("../assets/Lenovo/服务.png"),
                require("../assets/Lenovo/以旧换新.png"),
                require("../assets/Lenovo/会员福利(red).png"),
                require("../assets/Lenovo/驱动下载(red).png"),
                require("../assets/Lenovo/小新铺子(red).png"),
                require("../assets/Lenovo/拯救者联盟(red).png"),
                require("../assets/Lenovo/Think家族(red).png"),
                require("../assets/Lenovo/手机新品(red).png"),
                require("../assets/Lenovo/刃天堂(red).png"),
                require("../assets/Lenovo/平板电脑(red).png"),
                require("../assets/Lenovo/选件(red).png"),
                require("../assets/Lenovo/智能(red).png"),
                require("../assets/Lenovo/服务(red).png"),
                require("../assets/Lenovo/以旧换新(red).png"),
            ],
            middleArrDisplay: [
                require("../assets/Lenovo/会员福利.png"),
                require("../assets/Lenovo/驱动下载.png"),
                require("../assets/Lenovo/小新铺子.png"),
                require("../assets/Lenovo/拯救者联盟.png"),
                require("../assets/Lenovo/Think家族.png"),
                require("../assets/Lenovo/手机新品.png"),
                require("../assets/Lenovo/刃天堂.png"),
                require("../assets/Lenovo/平板电脑.png"),
                require("../assets/Lenovo/选件.png"),
                require("../assets/Lenovo/智能.png"),
                require("../assets/Lenovo/服务.png"),
                require("../assets/Lenovo/以旧换新.png"),
            ],
            color: [
                "color:black;",
                "color:black;",
                "color:black;",
                "color:black;",
                "color:black;",
                "color:black;",
                "color:black;",
                "color:black;",
                "color:black;",
                "color:black;",
                "color:black;",
                "color:black;",
            ],
            search: "",
            
        };
    },
    methods: {
        //鼠标移入操作
        mouseOver(index) {
            this.$set(this.middleArrDisplay,index,this.middleArr[index+12]) //修改数组中的内容，不用这个方法没法刷新页面，三个参数依次为(要修改的数组，下表，内容)
            this.color[index] = "color: rgb(225, 23, 13);"  //暗红色
        },
        //鼠标移出操作
        mouseLeave(index) {
            this.$set(this.middleArrDisplay, index, this.middleArr[index])
            this.color[index] = "color:black;"
        }
    }
}

</script>