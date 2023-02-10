<template>
  <div >           
      <div id="div1">
      <br><img src="../assets/Lenovo/logo.png" class="imgs">
      <br><label class="label_user">账号:</label><el-input       
                  class="password1"
                  placeholder="请输入账号"
                  v-model="input">               <!--顶部右侧搜索框-->
              </el-input>
      <br><label class="label_user">密码:</label><el-input 
                  class="password1"
                  placeholder="请输入密码"
                  v-model="input1">               <!--顶部右侧搜索框-->image.png
              </el-input>
      <br><label class="label_user_again">确认密码:</label><el-input 
                  class="password1"
                  placeholder="请再次输入密码"
                  v-model="input2">               <!--顶部右侧搜索框-->
              </el-input>        
      <br><el-button round>注册</el-button><el-button round>重置</el-button>   
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ''
      ,input1:''
      ,input2:''
    }
  }
}
</script>

<style>
  .password1{
      margin-left: 50;
      width:300px;
      height:70px;
      margin-bottom: 15px;
  }
  #div1{  
      text-align: center;
      margin-left: 700px;
      width: 500px;
      height: 450px;
      margin-top: 280px;
  }
  .label_user{
      width: 150px;
      height: 100px;
      margin-bottom: 50px;
      margin-right: 30px;
  }
  .label_user_again{
    width: 150px; 
      height: 100px;
      margin-bottom: 50px;
      margin-right: auto;
      margin-left: auto;
  }
  .imgs{
      width:400px;
      height:100px;
      text-align: center;
      margin-bottom: 20px;
  }
</style>