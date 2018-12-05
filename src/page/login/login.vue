<template>
    <div class="login-container">
        <div class="login-bg">
        </div>
        <div class="login-box">
            <div class="header-container">
                <img src="http://img0.imgtn.bdimg.com/it/u=2914299315,3896554771&fm=26&gp=0.jpg" alt="">
                <p>使用 Eend 账号 登录官网</p>
            </div>
            <div class="input-container">
                <form action="" class="form-container">
                    <label for="">
                        <input type="text" placeholder="账号">
                    </label>
                    <label for="">
                        <input type="text" placeholder="密码">
                    </label>
                    <p><span>注册账号</span><span>忘记密码?</span></p>
                    <button class="btn btn-success">登录</button>
                    <button class="btn btn-info">返回</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.login-container{
    width: 100%;
    height: 750px;
    display: flex;
    //background: #f3f3f3;
    .login-bg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543990899137&di=8a24e13ad5832462b00396e934fb3eda&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F810a19d8bc3eb135237e1570a11ea8d3fc1f44bb.jpg);
        background-size: 100% 100%;
        z-index: -1;
    }
    .login-box{
        width: 30%;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        background: #000;
        padding-top: 50px;
        border-radius: 20px;
        .header-container{
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            img{
                width: 50px;
                height: 50px;
                border: 2px solid #fff;
                margin-bottom: 10px;
            }
        }
        .input-container{
            width: 100%;
            width: 100%;
            padding: 20px;
            display: flex;
            justify-content: center;
            .form-container{
                display: flex;
                flex-direction: column;
                label{
                    margin:5px 0;
                    input{
                        width: 300px;
                        padding: 10px;
                        border-radius: 5px;
                        outline:none;
                        border: 1px solid #000;
                    }
                }
                p{
                    margin: 10px 0;
                    display: flex;
                    justify-content: space-between;
                    color: #fff;
                    span:nth-child(1){
                        margin-right:0.625rem;
                    }
                }
                button{
                    margin:0.3125rem 0;
                    padding: 10px;
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
