<template>
    <div class="msite-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark" >
        <a class="navbar-brand" href="#">Eend商城</a>
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
            <h1 class="title reveal-bottom">
                <span class="reveal-right">Leading</span>
                <span class="reveal-bottom">the</span>
                <span class="reveal-bottom">fashion</span>
                <span class="reveal-left">trend</span>
            </h1>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img class="img-responsive reveal-top" src="http://back.zhayanwang.com/yingwangkeji/studio_src/1425900/201811271817539788.jpg" alt="">                </div>
                    <div class="swiper-slide">
                        <img class="img-responsive"  src="http://back.zhayanwang.com/yingwangkeji/studio_src/1417957/201811271759202476.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img-responsive" src="http://back.zhayanwang.com/yingwangkeji/studio_src/1362147/201811271757561033.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img-responsive" src="http://back.zhayanwang.com/yingwangkeji/studio_src/379/201811271755466475.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img-responsive" src="http://back.zhayanwang.com/yingwangkeji/studio_src/1362837/201811281832229701.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img-responsive" src="http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811271753487916.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="jumbotron">
            <h1 class="display-4 reveal-top">Eend商城——全球设计师原创服装平台</h1>
            <p class="lead reveal-right">Eend商城汇聚了全球原创服装设计师作品的设计与展示，是国内新一代设计师原创服装电商平台，集设计师时尚产品销售展示、品牌推广于一体，致力于为都市女性提供高性价比的原创设计服装品牌及个性潮流服装，帮助并引导终端用户找到与自身气质品味相匹配的原创时装</p>
            <hr class="my-4">
            <p class="reveal-bottom">Developed by Eend of the Post-90s Youtht</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg reveal-left" href="#" role="button">Learn more</a>
            </p>
        </div>

        <div class="classification">
            <div class="popular-container">
                <h1 class="Popular-title reveal-top">热门推荐</h1>
                <div class="Popular-text-box">
                    <p class="reveal-right">我不追随时尚，我本身就是时尚</p>
                    <p class="reveal-left">别随大流，不要让时尚左右你，而是自己去决定自己是什么样的，用自己的穿衣风格和生活方式来表达自己。</p>
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


        
<!-- 官方============================================================== -->
        <div class="official-container1">
            <header>
                <span class="reveal-right">官</span>
                <span class="reveal-bottom">方</span>
                <span class="reveal-top">精</span>
                <span class="reveal-left">选</span>
            </header>
            <ul>
                <li class="li-container reveal-right">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%A5%B0%E5%93%81.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-top">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-right">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom">
                    <img src="https://pic.lily.sh.cn/%E7%8E%8B%E7%9C%9F%E5%84%BF3.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-top">
                    <img src="https://pic.lily.sh.cn/%E7%B4%AB%E5%A4%96%E5%85%89%E7%B3%BB%E5%88%971.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left">
                    <img src="https://pic.lily.sh.cn/%E7%8E%8B%E7%9C%9F%E5%84%BF2.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-right">
                    <img src="https://pic.lily.sh.cn/%E7%B4%AB%E5%A4%96%E5%85%89%E7%B3%BB%E5%88%973.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio/1378691/201712131625327433.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio_src/1417886/201809211335136823.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>123元</p>
                    </div>
                </li>
                
            </ul>
        </div>

<!-- 品牌============================================================== -->

        <div class="brand-container1">
            <header>
                <span class="reveal-left">品</span>
                <span class="reveal-top">牌</span>
                <span class="reveal-right">精</span>
                <span class="reveal-bottom">选</span>
            </header>
            <ul>
                <li class="li-container reveal-right libox">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-top">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-top">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left">
                    <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 女装============================================================== -->

        <div class="female-container">
            <header class="header-container">
                <span class="reveal-right">潮</span>
                <span class="reveal-bottom">流</span>
                <span class="reveal-top">女</span>
                <span class="reveal-left">装</span>
            </header>
            <ul>
                <li class="li-container reveal-right li-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%A5%B0%E5%93%81.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-top li-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left li-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-right li-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom li-box">
                    <img src="https://pic.lily.sh.cn/%E7%8E%8B%E7%9C%9F%E5%84%BF3.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-top li-box">
                    <img src="https://pic.lily.sh.cn/%E7%B4%AB%E5%A4%96%E5%85%89%E7%B3%BB%E5%88%971.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left li-box">
                    <img src="https://pic.lily.sh.cn/%E7%8E%8B%E7%9C%9F%E5%84%BF2.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-right li-box">
                    <img src="https://pic.lily.sh.cn/%E7%B4%AB%E5%A4%96%E5%85%89%E7%B3%BB%E5%88%973.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom li-box">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio/1378691/201712131625327433.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left li-box">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio_src/1417886/201809211335136823.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom li-box">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio/1378691/201712131625327433.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left li-box">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio_src/1417886/201809211335136823.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>   
            </ul>
        </div>


    <!--  男装=========================================================  -->
        <div class="male-container">
            <header class="header-container">
                <span class="reveal-right">潮</span>
                <span class="reveal-bottom">流</span>
                <span class="reveal-top">男</span>
                <span class="reveal-left">装</span>
            </header>
            <ul>
                <li class="li-container reveal-right li-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%A5%B0%E5%93%81.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-top li-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left li-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-right li-box">
                    <img src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom li-box">
                    <img src="https://pic.lily.sh.cn/%E7%8E%8B%E7%9C%9F%E5%84%BF3.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-top li-box">
                    <img src="https://pic.lily.sh.cn/%E7%B4%AB%E5%A4%96%E5%85%89%E7%B3%BB%E5%88%971.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left li-box">
                    <img src="https://pic.lily.sh.cn/%E7%8E%8B%E7%9C%9F%E5%84%BF2.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-right li-box">
                    <img src="https://pic.lily.sh.cn/%E7%B4%AB%E5%A4%96%E5%85%89%E7%B3%BB%E5%88%973.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom li-box">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio/1378691/201712131625327433.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-left li-box">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio_src/1417886/201809211335136823.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>122元</p>
                    </div>
                </li>
                <li class="li-container reveal-bottom li-box">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio/1378691/201712131625327433.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>121元</p>
                    </div>
                </li>
                <li class="li-container reveal-left li-box">
                    <img src="http://back.zhayanwang.com/yingwangkeji/studio_src/1417886/201809211335136823.jpg" alt="">
                    <div class="Price-container">
                        <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                        <p class="Price"><span>￥</span>123元</p>
                    </div>
                </li>   
            </ul>
        </div>
        <!--- ========================  footer  ============================-->
        <div class="footer">
            <div class="header-container">
                <h2>Eend商城</h2>
                <ul>
                    <li><a href="">关于我们</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">合作伙伴</a></li>
                    <li><a href="">招聘信息</a></li>
                    <li><a href="">法律声明</a></li>
                </ul>
            </div>
            <div class="bottom-container">
                <ul>
                    <li>
                        <p>地址：中国经济开发市深圳市福田</p>
                        <p>邮编：105820</p>
                        <p>总机：(8610)17620445033</p>
                    </li>
                    <li>
                        <p><a href="">京ICP证070512号</a></p>
                        <p><a href="">深圳市公安局朝阳分局备案编号：11010502582098</a></p>
                        <p><a href="">信息网络传播视听节目许可证0115826号</a></p>
                        <p><a href="">广播电视节目制作经营许可证（京）字第1587号</a></p>
                    </li>
                    <li>
                        <p>Copyright © 2006-2018 Yoka.com, All rights reserved.</p>
                        <p>Eend商城 版权所有</p>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import scrollReveal from 'scrollreveal';
export default {
    data(){
        return{
            isMask: true,
            scrollReveal: scrollReveal(),
            
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
        }),
        this.scrollReveal.reveal('.reveal-top', {
            // 动画的时长
            duration: 500,
            // 延迟时间
            delay: 500,
            // 动画开始的位置，'bottom', 'left', 'top', 'right'
            origin: 'top',
            // 回滚的时候是否再次触发动画
            reset: false,
            // 在移动端是否使用动画
            mobile: false,
            // 滚动的距离，单位可以用%，rem等
            distance: '200px',
            // 其他可用的动画效果
            opacity: 0.001,
            easing: 'linear',
            scale: 0.9,
        });
        this.scrollReveal.reveal('.reveal-bottom', {
            // 动画的时长
            duration: 500,
            // 延迟时间
            delay: 500,
            // 动画开始的位置，'bottom', 'left', 'top', 'right'
            origin: 'bottom',
            // 回滚的时候是否再次触发动画
            reset: false,
            // 在移动端是否使用动画
            mobile: false,
            // 滚动的距离，单位可以用%，rem等
            distance: '200px',
            // 其他可用的动画效果
            opacity: 0.001,
            easing: 'linear',
            scale: 0.9,
        });
        this.scrollReveal.reveal('.reveal-left', {
            // 动画的时长
            duration: 500,
            // 延迟时间
            delay: 500,
            // 动画开始的位置，'bottom', 'left', 'top', 'right'
            origin: 'left',
            // 回滚的时候是否再次触发动画
            reset: false,
            // 在移动端是否使用动画
            mobile: false,
            // 滚动的距离，单位可以用%，rem等
            distance: '200px',
            // 其他可用的动画效果
            opacity: 0.001,
            easing: 'linear',
            scale: 0.9,
        });
        this.scrollReveal.reveal('.reveal-right', {
            // 动画的时长
            duration: 500,
            // 延迟时间
            delay: 500,
            // 动画开始的位置，'bottom', 'left', 'top', 'right'
            origin: 'right',
            // 回滚的时候是否再次触发动画
            reset: false,
            // 在移动端是否使用动画
            mobile: false,
            // 滚动的距离，单位可以用%，rem等
            distance: '200px',
            // 其他可用的动画效果
            opacity: 0.001,
            easing: 'linear',
            scale: 0.9,
        });
        
    }
}
</script>

<style lang="scss" scoped>
.msite-container{
    height: 5000px;
    .navbar{
        padding-top: 20px;
        padding-bottom: 20px; 
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
            span{
                display: inline-block;
            }
        }
        .swiper-container {
            width: 95%;
            height: 300px;
            
            .swiper-slide{
                // width: 25rem;
                width: 33%;
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
    .official-container1,.female-container,.male-container{
        width: 100%;
        padding: 50px;
        background: #0e3342;
        margin-top: 20px;
        overflow: hidden;
        span{
            display: inline-block;
        }
        header{
            width: 100%;
            padding-bottom: 30px;
            color: #ccc;
            font-size: 30px;
        }
        ul{
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            padding:0;
            li{
                float:left; 
                position:relative; 
                margin:2px; 
                position:relative; 
                width:20%; 
                min-height: 400px;
                margin:0; 
                padding:0; 
                list-style:none;
                img{ 
                    width:100%; 
                    height:100%;
                    position:absolute; 
                    top:0; 
                    left:0; 
                    display:block; 
                    transition:all 400ms ease; 
                    -moz-transition:all 400ms ease; 
                    -webkit-transition:all 400ms ease; 
                    -o-transition:all 400ms ease}
                    
                &.li-container img:hover{
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    -o-transform: scale(1.1);
                    transition: all .5s;
                    border: 3px solid #aaa;
                    box-shadow:0px 0px  10px 5px #aaa; 
                    z-index:9999999
                    
                }
                .Price-container{
                    position: absolute;
                    z-index: 1111;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    padding: 10px;
                    background: rgba(51, 51, 51, 0.5);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .title{
                        width: 200px;
                        height: 20px;
                        color: #fff;
                        font-size: 16px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .Price{
                        font-size: 18px;
                        font-weight: bold;
                        margin: 0;
                        color: #fff;
                        span{
                            font-size: 12px;
                        }
                    }
                }
                &.li-container:hover{
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    -o-transform: scale(1.1);
                    transition: all .5s;
                    border: 3px solid #aaa;
                    box-shadow:0px 0px  10px 5px #aaa; 
                    z-index:9999999
                }
            }
        }
    }
    .brand-container1{
        width: 100%;
        padding: 50px;
        background: #333;
        margin-top: 20px;
        overflow: hidden;
        span{
            display: inline-block;
        }
        header{
            width: 100%;
            padding-bottom: 30px;
            color: #ccc;
            font-size: 30px;
        }
        ul{
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            padding:0;
            li{
                float:left; 
                position:relative; 
                margin:2px; 
                position:relative; 
                width:25%; 
                min-height: 400px;
                margin:0; 
                padding:0; 
                list-style:none;
                img{ 
                    width:100%; 
                    height:100%;
                    position:absolute; 
                    top:0; 
                    left:0; 
                    display:block; 
                    transition:all 400ms ease; 
                    -moz-transition:all 400ms ease; 
                    -webkit-transition:all 400ms ease; 
                    -o-transition:all 400ms ease}
                &.li-container img:hover{
                    -webkit-transform: scale(0.6.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    -o-transform: scale(1.1);
                    transition: all .8s;
                    border: 3px solid #aaa;
                    box-shadow:0px 0px  10px 5px #aaa;
                    z-index:9999999
                }
                .Price-container{
                    position: absolute;
                    z-index: 1111;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    padding: 10px;
                    background: rgba(51, 51, 51, 0.5);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .title{
                        width: 200px;
                        height: 20px;
                        color: #fff;
                        font-size: 16px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .Price{
                        font-size: 18px;
                        font-weight: bold;
                        margin: 0;
                        color: #fff;
                        span{
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
    
    .female-container{
        width: 100%;
        background: #000;
        .header-container{
            width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #000;
            padding: 2px;
            border: 2px solid #fff;
            margin: 30px auto;
            color: #fff;
        }
        ul{
            display: flex;
            justify-content: center;
            background: #fff;
            .li-box{
                width: 20%;
                height: 100%;
                margin: 15px;
                &.li-box:nth-child(2){
                    margin-top:50px;
                }
                &.li-box:nth-child(5){
                    margin-top:50px;
                }
                &.li-box:nth-child(8){
                    margin-top:50px;
                }
                &.li-box:nth-child(4){
                    margin-top:50px;
                }
                &.li-box:nth-child(10){
                    margin-top:50px;
                }
                &.li-box:nth-child(11){
                    margin-top:50px;
                }
                &.li-box:hover{
                    box-shadow:none;
                }
                &.li-box img:hover{
                    box-shadow:none;
                }
            }
        }
    } 
    .male-container{
        background: #fff;
        .header-container{
            width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            padding: 2px;
            border: 2px solid #000;
            margin: 30px auto;
            color: #000;
        }
        ul{
            display: flex;
            justify-content: center;
            background: #000;
            .li-box{
                width: 20%;
                height: 100%;
                margin: 15px;
                &.li-box:nth-child(1){
                    margin-top:50px;
                }
                &.li-box:nth-child(3){
                    margin-top:50px;
                }
                &.li-box:nth-child(6){
                    margin-top:50px;
                }
                &.li-box:nth-child(8){
                    margin-top:50px;
                }
                &.li-box:nth-child(9){
                    margin-top:50px;
                }
                &.li-box:nth-child(12){
                    margin-top:50px;
                }
                &.li-box:hover{
                    box-shadow:none;
                }
                &.li-box img:hover{
                    box-shadow:none;
                }
            }
        }
    }
    .footer{
        width:100%;
        background: #000;
        padding: 40px 0 10px 0;
        .header-container{
            width: 80%;
            display: flex;
            justify-content: space-around;
            margin: 0 auto;
            color: #fff;
            h2{
                width: 30%;
                padding: 20px;
            }
            ul{
                width: 70%;
                padding: 20px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                li{
                    list-style-type:none;
                    a{
                        text-decoration: none;
                        color: #ccc;
                    }
                    a:hover{
                        color: #fff;
                    }
                }
            }
        }
        .bottom-container{
            width: 80%;
            margin: 0 auto;
            ul{
                width: 100%;
                display: flex;
                justify-content: space-around;
                justify-items: center;
                padding: 0;
                li{
                    width: 33%;
                    list-style-type:none;
                    color: #ccc;
                    padding-left: 15px;
                    p{
                        font-size: 14px;
                        a{
                            text-decoration: none;
                            color: #cccc;
                        }
                        a:hover{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
    
</style>
