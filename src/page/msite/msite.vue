<template>
    <div class="msite-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark" >
        <a class="navbar-brand" href="#">自营商城</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">登录
                <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">注册</a>
            </li>
            <li class="nav-item dropdown">
                <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">个人中心</a>
                <a class="dropdown-item" href="#">购物车</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">积分商城</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">在线客服</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            >
            <button class="btn btn-outline-success  my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
        <div class="bg-container">
            <div class="bg-img"></div>
        </div>
        <div class="Advertisement">
            <h1 class="title">Leading the fashion trend</h1>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img class="img-responsive" src="http://img3.fm.pop-fashion.com/fashion/fm/ad/20180625/12255b303fb1d7104.jpg" alt="">                </div>
                    <div class="swiper-slide">
                        <img class="img-responsive"  src="http://img2.fm.pop-fashion.com/upload/flash_report/2018/2018112917/ANAREPORT_5bffadb55d5de_3978.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img-responsive" src="http://img3.fm.pop-fashion.com/upload/flash_report/2018/2018112915/ANAREPORT_5bff95cf9a0ca_9990.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img-responsive" src="http://img3.fm.pop-fashion.com/fashion/fm/ad/20180625/12255b303fb1d7104.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img-responsive" src="http://img2.fm.pop-fashion.com/upload/flash_report/2018/2018112917/ANAREPORT_5bffadb55d5de_3978.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img-responsive" src="http://img3.fm.pop-fashion.com/upload/flash_report/2018/2018112915/ANAREPORT_5bff95cf9a0ca_9990.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="jumbotron">
            <h1 class="display-4">Hello,潮人们 </h1>
            <p class="lead">这是一个汇集最新，最潮的时尚潮流服装在线网站</p>
            <hr class="my-4">
            <p>Developed by Eend of the Post-90s Youtht</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>

        <div class="classification">
            <div class="popular-container">
                <h1 class="Popular-title">热门推荐</h1>
                <div class="Popular-text-box">
                    <p>我不追随时尚，我本身就是时尚</p>
                    <p>别随大流，不要让时尚左右你，而是自己去决定自己是什么样的，用自己的穿衣风格和生活方式来表达自己。</p>
                </div>
            </div>
            <div class="swiper-container-row">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="item col-lg-12 col-sm-4 col-xs-6">
                            <div class="dtl31">
                                <img src="https://pic.lily.sh.cn/%E7%B4%AB%E5%A4%96%E5%85%89%E7%B3%BB%E5%88%974.jpg" alt="">
                                <div class="dtl">
                                    <h3>Lorem Ipsum</h3>
                                    <p>Integer sollicitudin lacus libero, in iaculis turpis tristique sit amet. Nullam augue elit, feugiat nec arcu eget, sodales feugiat ligula.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="item col-lg-12 col-sm-4 col-xs-6">
                            <div class="dtl31">
                                <img src="https://pic.lily.sh.cn/18%E5%86%AC%E6%99%9A%E6%99%9A%E7%B3%BB%E5%88%975-5.jpg" alt="">
                                <div class="dtl">
                                    <h3>Lorem Ipsum</h3>
                                    <p>Integer sollicitudin lacus libero, in iaculis turpis tristique sit amet. Nullam augue elit, feugiat nec arcu eget, sodales feugiat ligula.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="item col-lg-12 col-sm-4 col-xs-6">
                            <div class="dtl31">
                                <img src="https://pic.lily.sh.cn/18%E5%86%AC%E6%99%9A%E6%99%9A%E7%B3%BB%E5%88%972-1.jpg" alt="">
                                <div class="dtl">
                                    <h3>Lorem Ipsum</h3>
                                    <p>Integer sollicitudin lacus libero, in iaculis turpis tristique sit amet. Nullam augue elit, feugiat nec arcu eget, sodales feugiat ligula.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="item col-lg-12 col-sm-4 col-xs-6">
                            <div class="dtl31">
                                <img src="https://pic.lily.sh.cn/18%E5%86%AC%E6%99%9A%E6%99%9A%E7%B3%BB%E5%88%973-2.jpg" alt="">
                                <div class="dtl">
                                    <h3>Lorem Ipsum</h3>
                                    <p>Integer sollicitudin lacus libero, in iaculis turpis tristique sit amet. Nullam augue elit, feugiat nec arcu eget, sodales feugiat ligula.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        <div class="official-container">
            <header>官方精选</header>
            <div class="official-box">
                <div class="img-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%A5%B0%E5%93%81.jpg" alt="">
                </div>
                <div class="img-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg" alt="">
                </div>
                <div class="img-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg" alt="">
                </div>
                <div class="img-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg" alt="">
                </div>
                <div class="img-box">
                    <img src="https://pic.lily.sh.cn/%E7%8E%8B%E7%9C%9F%E5%84%BF3.jpg" alt="">
                </div>
                <div class="img-box">
                    <img src="https://pic.lily.sh.cn/%E7%B4%AB%E5%A4%96%E5%85%89%E7%B3%BB%E5%88%971.jpg" alt="">
                </div>
                <div class="img-box">
                    <img src="https://pic.lily.sh.cn/%E7%8E%8B%E7%9C%9F%E5%84%BF2.jpg" alt="">
                </div>
                <div class="img-box">
                    <img src="https://pic.lily.sh.cn/%E7%B4%AB%E5%A4%96%E5%85%89%E7%B3%BB%E5%88%973.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="brand-container">
            <header>品牌精选</header>
            <div class="brand-box">
                <div class="img-box">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3.jpg" alt="">
                </div>
                <div class="img-box">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97.jpg" alt="">
                </div>
                <div class="img-box">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87.jpg" alt="">
                </div>
                <div class="img-box">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB.jpg" alt="">
                </div>
                <div class="img-box">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg" alt="">
                </div>
                <div class="img-box">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg" alt="">
                </div>
                <div class="img-box">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg" alt="">
                </div>
                <div class="img-box">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    data(){
        return{
            isMask: true,
        }
    },
    methods:{
        displayMask(index){
                this.isMask = !this.isMask

        }
    },
    mounted(){
        this.$nextTick(function(){
           var mySwiper = new Swiper('.swiper-container',{
                loop: true,
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 30,
                    stretch: 10,
                    depth: 60,
                    modifier: 2,
                    slideShadows : true
                },
                autoplay: {
                    delay: 2000,//1秒切换一次
                    disableOnInteraction: false,
                },
            });
            var mySwiper1 = new Swiper('.swiper-container-row',{
                slidesPerView : 3,
                spaceBetween : 20,
                loop: true, // 循环模式选项
                //spaceBetween : '10%',按container的百分比
                autoplay: {
                    delay: 1000,//1秒切换一次
                    disableOnInteraction: false,//用户操作后也自动轮播
                },
            })
        })
    }
}
</script>

<style lang="scss" scoped>
.msite-container{
    height: 3000px;
    .navbar{
        padding-top: 10px;
        padding-bottom: 10px; 
        background: #000!important;
        color: #fff!important;
    }
    .bg-container{
        .bg-img{
            z-index: -1;
            position: absolute;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            //background-image: url(http://p0.meituan.net/dpdeal/535e6f3eeec64e782f4eb2bac3426eac1375188.jpg);
            background-image: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1432676133,1440846621&fm=26&gp=0.jpg);
            background-size: 100% 100%;
        }
    }
    .Advertisement{
        margin: 3.125rem 0;
        text-align: center;
        .title{
            margin: 1.875rem 0;
            color: #fff;
            font-size: 2.5rem;
        }
        .swiper-container {
            width: 90%;
            // height: 18.75rem;
            
            .swiper-slide{
                // width: 25rem;
                width: 30%;
                // height: 18.75rem;
                height: 100%;
                background: none;
                img{
                    // width: 25rem;
                    width: 100%;
                    // height: 18.75rem;
                    height: 100%;
                }
            }
        }  
    }
    .jumbotron{
        width: 90%;
        margin: 3.125rem auto;
        opacity: .8;
        box-shadow:0px 0px  15px 5px #000;
    }
    .classification{
        width: 100%;
        display: flex;
        //flex-wrap:wrap;
        //justify-content: space-around;
        padding: 20px;
        background: #000;
        .popular-container{
            display: flex;
            justify-content: center;
            width: 30%;
            padding: 20px;
            .Popular-title{
                margin-left: 5%;
                color: #fff !important;
                //font-size: 20px;
            }
            .Popular-text-box{
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                p{
                    color: #fff;
                }
            }
        }
        .swiper-container-row {
            width: 70%;
            overflow: hidden;
            .swiper-slide{
                width: 40%;
                .item{
                    width: 100%;
                    .dtl31 {
                        width: 100%;
                        background: green;
                        position: relative;
                        overflow: hidden;
                        -webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
                        -moz-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
                        box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
                        &.dtl31:hover img {
                            -webkit-transform: scale(1.1);
                            -moz-transform: scale(1.1);
                            -ms-transform: scale(1.1);
                            -o-transform: scale(1.1);
                            //transform: scale(1.1);
                                transition: all .3s;
                        }
                        &.dtl31:hover .dtl {
                            visibility: visible;
                            opacity: 1;
                            transform:translateY(-100%);
                        }
                        img {
                            position: relative;
                            width: 100%;
                            top: 0;
                            left: 0;
                            -webkit-transition: all 0.3s;
                            -moz-transition: all 0.3s;
                            -o-transition: all 0.3s;
                            transition: all 0.3s;
                        }
                        .dtl {
                            background: rgba(51, 51, 51, 0.5);
                            width: 100%;
                            position: absolute;
                            height: 100%;
                            bottom: -100%;
                            left: 0;
                            opacity: 0;
                            padding-top: 50%; 
                            visibility: hidden;
                            -webkit-transition: all 0.3s;
                            -moz-transition: all 0.3s;
                            -o-transition: all 0.3s;
                            transition: all 0.3s;
                            h3 {
                                opacity: .5;
                                padding: 10px 15px;
                                width: 100%;
                                background: #333;
                                color: #fff;
                                font-size: 16px;
                                font-weight: normal;
                                margin-top: 20px;
                                margin-bottom: 10px;
                                text-decoration: underline;
                            }
                            p {
                                padding: 0 15px;
                                font-size: 14px;
                                margin-bottom: 10px;
                                line-height: 1.2;
                                color: #fff;
                                text-indent: 10px;
                            }
                            a {
                                margin-right: 15px;
                                background: #fff;
                                border: 1px solid #ccc;
                                border-radius: 2px;
                                color: #333;
                                float: right;
                                font-size: 13px;
                                padding: 2px 5px;
                                text-align: center;
                                text-decoration: none;
                                &.a:hover {
                                    background: #e6e6e6;
                                    border: 1px solid #adadad;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .official-container{
        width: 100%;
        padding: 50px;
        background: #333;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        header{
            width: 100%;
            padding-bottom: 30px;
            color: #ccc;
            font-size: 30px;
        }
        .official-box{
            width: 90%;
            display: flex;
            flex-wrap: wrap;
            .img-box{
                width: 25%;
                img{
                    width: 100%;
                }
            }
            &.official-box img:hover{
                -webkit-transform: scale(1.1);
                -moz-transform: scale(1.1);
                -ms-transform: scale(1.1);
                -o-transform: scale(1.1);
                transition: all .5s;
                border: 3px solid #aaa;
                box-shadow:0px 0px  10px 5px #aaa;
            }
        }
    }
    .brand-container{
        width: 100%;
        padding: 50px;
        background: #0e3342;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow:0px 0px  15px 5px #000;
        header{
            width: 100%;
            padding-bottom: 30px;
            color: #fff;
            font-size: 30px;
        }
        .brand-box{
            width: 90%;
            display: flex;
            flex-wrap: wrap;
            .img-box{
                width: 25%;
                img{
                    width: 100%;
                }
            }
            &.brand-box img:hover{
                -webkit-transform: scale(0.1.1);
                -moz-transform: scale(1.1);
                -ms-transform: scale(1.1);
                -o-transform: scale(1.1);
                transition: all .8s;
                border: 3px solid #aaa;
                box-shadow:0px 0px  10px 5px #aaa;
            }
        }
    }
}
    
</style>
