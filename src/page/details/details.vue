<template>
    <div class="details-container">
        <headerTop/>
        <div class="goodDetails-container">
            <div class="goodDetails-left">
                <div class="sm-container" >
                    <ul>
                        <li class="sm-li" v-for="(img,index) in imgUrl" :key="index" v-on:mouseover='getIndex(img.url)'>
                            <img :src="img.url" >
                        </li>
                    </ul>
                </div>
                <div class="magnifier-container">
                    <pic-zoom class="magnifier-img" :url="ImgUrl"  :scale="3"></pic-zoom>
                </div>
            </div>
            <div class="goodDetails-right">
                <h5 class="title">[简约的翻领设计]LuckyOzasec女士灯笼袖珍珠装饰后抽绳侧开叉毛呢外套S68328 珊瑚杏仁色 S</h5>
                <p class="price-container"><span class="price-title">价格：</span><span class="price"><i>￥</i>399</span></p>
                <div class="number-container">
                    <span class="iconfont icon-jian"></span>
                    <input type="text" placeholder="1">
                    <span class="iconfont icon-jia"></span>
                </div>
                <div class="button-container">
                    <button class="btn btn-danger">立即购买</button>
                    <button class="btn btn-primary">加入购物车</button>
                </div>
            </div>
        </div>
        <div class="product-container">
            <header>
                产品信息
            </header>
            <div class="img-container">
                <img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_01_1280.jpg" alt="">
                <img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_02_1280.jpg" alt="">
                <img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_03_1280.jpg" alt="">
                <img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_04_1280.jpg" alt="">
                <img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_05_1280.jpg" alt="">
                <img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_06_1280.jpg" alt="">
            </div>
        </div>
        <!-- =====================  footer  ===========================-->
        <Footer/>
    </div>
</template>

<script>
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
import PicZoom from 'vue-piczoom'
export default {
    name:'detail',
    components:{
        headerTop,
        PicZoom,
        Footer
    },
    data() {
        return {
            imgUrl: [
                { index:1, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192462761649_1280.jpg' },
                { index:2, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192477717937_1280.jpg' },
                { index:1, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192494906650_1280.jpg' },
                { index:2, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192511524855_1280.jpg' },
                { index:1, url: 'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192527198747_1280.jpg' },

//                 { index:3, url: require('http://i3.vanclimg.com/cms/20181130/pc2_06.jpg') },
//                 { index:4, url: require('http://i3.vanclimg.com/cms/20181130/pc2_07.jpg') },
            ],
            //大图片默认显示第一张
            ImgUrl:'http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192462761649_1280.jpg',
        }
    },
    methods:{
        //点击小图片时将图片路径赋值给大图
        getIndex(imgUrl){
            this.ImgUrl = imgUrl;
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .details-container{
        height: 3000px;
        width: 100%;
        .navbar{
            padding-top: 1.25rem;
            padding-bottom: 1.25rem; 
            background: #000!important;
            color: #fff!important;
        }
        .goodDetails-container{
            width: 90%;
            padding: 3.125rem;
            display: flex;
            margin: 1.875rem auto;
             background:#000;
            .goodDetails-left{
                width: 50%;
                display: flex;
                .sm-container{
                    width: 5rem;
                    height:28.125rem;
                    margin-right: 1.875rem;
                    ul{
                        width: 100%;
                        height: 100%;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        li{
                            width: 100%;
                            height: 18%;
                            list-style-type:none;
                            border: 0.0625rem solid #000;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                            &.sm-li:hover{
                                cursor:pointer;
                                border: 0.125rem solid salmon;
                            }
                        }
                    }
                }
                .magnifier-container{
                    width: 28.125rem;
                    height:28.125rem;
                    .magnifier-img{
                        border: 0.0625rem solid #000;
                    }
                }
            }
            .goodDetails-right{
                width: 50%;
                .title{
                    width: 80%;
                    height: 3.75rem;
                    padding: 0.625rem;
                    color: #fff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .price-container{
                    width: 100%;
                    padding: 0.625rem;
                    .price-title{
                        font-size: 0.875rem;
                        color: #fff;
                    }
                    .price{
                        color: rgb(253, 76, 32);
                        font-size: 1.25rem;
                        i{
                            font-size: 0.75rem;
                            margin-right: 0.3125rem;
                        }
                    }
                }
                .number-container{
                    width: 100%;
                    padding: 10px;
                    display: flex;
                    .icon-jian{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        color: #fff;
                        font-size: 25px;
                    }
                    input{
                        width: 80px;
                        margin: 0 10px;
                        margin-top: 4px;
                        outline:none;
                        text-align: center;
                        padding: 0 3px;
                    }
                    .icon-jia{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        color: #fff;
                        font-size: 25px;
                    }
                }
                .button-container{
                    width: 100%;
                    padding: 50px 10px;
                    .btn-danger{
                        margin-right: 10px;
                    }
                }
            }
        }
        .product-container{
            width: 100%;
            background: #fff;
            padding: 30px;
            margin: 50px 0;
            header{
                width: 90%;
                // margin: 0 auto;
                padding: 20px;
                margin: 10px auto;
                font-size: 20px;
                border: 5px solid #fff;
                background: #000;
                color: #fff;
            }
            .img-container{
                width: 90%;
                margin: 0 auto;
                padding: 40px 0;
                text-align: center;
                background: #000;
            }
        }
    }
</style>

