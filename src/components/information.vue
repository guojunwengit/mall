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
            <div id="Search">
                <el-input       
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="search">               <!--顶部右侧搜索框-->
                </el-input>
            </div>
        
        </div>
        <!-- <div id="Carousel">
            <el-carousel>
                <el-carousel-item v-for="item in 10" :key="item">
                    <img :src="imgArr[item]" alt="loading..." class="image" />
                </el-carousel-item>
            </el-carousel>
        </div> -->
        <div id="middle">
            <ul >
                <li><a href="#">首页></a></li>
                <li><a href="#">商品详情></a></li>
                <li><a href="#">联想小新Pro14 2022标压酷睿版14英寸轻薄笔记本电脑皓月银</a></li>
            </ul>
        </div>
        <div id="FirstFloow">
            <p>Lenovo电脑</p>
            <div id="Computer">
                <img src="../assets/Lenovo/小新Pro14.jpg">
                <ul id="UpFourImg">
                    <li>
                        <p>联想小新Pro14 2022标压酷睿版14英寸轻薄笔记本电脑 皓月银</p>
                        <p style="height: 20px;color: darkgrey;font-size: 10px;">第12代智能英特尔@ 酷睿Mi9-12900H/Windows11家庭中文版/14英寸/16GB/512GBSSD/集成显卡皓月银</p>
                    </li>
                    <br>
                    <li>
                        <a href="#" style="margin-left: 100px;">点击查看优惠信息</a>
                        <a href="#" style="text-decoration:underline; color:blue;" >更多></a>
                    </li>
                    
                    <li>
                        
                        <div style="text-align: left;">   
                        <p><label style="padding-left: 0px;">商城价</label>
                            <label style="color: crimson;font-size: 40px;margin-left: 0px;">￥5999</label>
                        </p>
                        </div>
                    </li>
                    <p></p>
                    <li>
                        <div style="margin-left: 100px;">
                            <label>地址：</label>
                            <el-select v-model="value" placeholder="请选择">
                             <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                            </el-select>
                            <br>
                        </div>
                    </li>
                    <p></p>
                    <li style="margin-left: 150px;">    
                        <div style="margin-top: 20px">
                            <label style="margin-left: -50px;">颜色挑选：</label>
                            <el-radio v-model="radio1" label="1" border >皓月银</el-radio>
                            <el-radio v-model="radio1" label="2" border>深空灰</el-radio>
                        </div>
                        <div style="margin-top: 20px">
                            <label style="margin-left: -50px;">处理器：</label>
                            <el-radio v-model="radio2" label="1" border size="medium" style="margin-left: auto;">i5-12500H</el-radio>
                            <el-radio v-model="radio2" label="2" border size="medium" style="margin-left: auto;">i7-12700H</el-radio>
                            <el-radio v-model="radio2" label="3" border size="medium" style="margin-left: auto;">i9-12900H</el-radio>
                        </div>
                        <div style="margin-top: 20px">
                            <label style="margin-left: -50px;">内存硬盘：</label>
                            <el-radio v-model="radio3" label="1" border style="margin-left: auto;">16G/512GB SSD</el-radio>
                            <el-radio v-model="radio3" label="2" border>32G/512GB SSD</el-radio>
                        </div>
                        <div style="margin-top: 20px">
                            <label style="margin-left: -50px;">显卡配置：</label>
                            <el-radio v-model="radio4" label="1" border>【官方标配】集成显卡</el-radio>
                            <el-radio v-model="radio4" label="2" border>【官方定制】集成显卡</el-radio>
                        </div>
                    </li>
                    <p></p>
                     <li>
                        <div style="margin-top:20px;margin-left: 100px;">
                            <el-button type="primary">加入购物车</el-button>
                            <el-button type="primary">点击购买</el-button>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
        <div id="SecondFloow">
            
        </div>
        
    </div>
</template>

<style scoped>
#Top {
    height: 70px;
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
    height: 70px;
}
#middle ul {
    margin-top: auto;
    margin-left:20px;
}
#middle ul li {
    list-style: none;
    float: left;
    margin-top: 10px;
    margin-left: 20px;
    font-size: 10px;
}
#middle ul li a {
    text-decoration: none;
    color: black;
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
height: auto;
}
#FirstFloow #Computer img {
    margin-left: 50px;
    float: left;
    width: 550px;
    height: 650px;
}

#FirstFloow #Computer #UpFourImg {
    list-style: none;
    float: left;
    margin-left: 100px;
    width: auto;
    height: 50px;
}
#FirstFloow #Computer #UpFourImg a{
    text-decoration: none;
    color: rgb(255, 0, 0);
}
#FirstFloow #Computer #UpFourImg li {
    width: auto;
    float: left;
    list-style: none;
}
#SecondFloow p {
    font-size: 20px;
    font-weight: bold;
    margin-left: 100px;
}
</style>

<script>
// import { readonly } from 'vue';

export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '浙江省 宁波市 宁波工程学院'
            }, {
                value: '选项2',
                label: '浙江省 金华市 东阳市'
            }, {
                value: '选项3',
                label: '浙江省 绍兴市 越城区'
            }],
            value: '',
            radio1: '1',
            radio2: '1',
            radio3: '1',
            radio4: '1',
                
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