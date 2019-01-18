/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
//     {
//       demo_link: 'https://codepen.io/haoyang/pen/jrvrQq',
//       img_link: 'https://ooo.0o0.ooo/2016/11/24/5836d81f48cd2.png',
//       code_link: 'https://codepen.io/haoyang/pen/jrvrQq',
//       title: 'Fisher-Yates 洗牌算法动画',
//       core_tech: 'JavaScript',
//       description: 'Fisher-Yates 洗牌算法动画。算法详情见 <a href ="https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/">这里</a>。'
//     }, 
     {
      demo_link: '/page/textareahight.html',
      img_link: '/textarea.png',
      code_link: 'https://github.com/xueying258456/maxueying.github.io/tree/master/page',
      title: 'textarea 高度自适应',
      core_tech: 'jQuery BootStrap CSS3',
      description: '当字符输入达到行上限，输入框自动加一行显示。'
    },
    {
      demo_link: 'http://gaohaoyang.github.io/test/headerTransition/',
      img_link: 'https://ooo.0o0.ooo/2016/06/20/5768c1597d1fe.png',
      code_link: 'https://github.com/Gaohaoyang/test/tree/master/headerTransition',
      title: 'Header Transition 渐变动画',
      core_tech: 'jQuery BootStrap CSS3',
      description: 'CSS3 动画效果，当页面滚动到指定距离时，header 区的背景色由透明变为蓝色。仿照了网站 <a target="_blank" href ="https://quorrajs.org/">https://quorrajs.org/</a> 的 Header 区动画效果。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/mask-fade-out/',
      img_link: '/zhao.png',
      code_link: 'https://github.com/Gaohaoyang/mask-fade-out',
      title: '遮罩层按指定路径缩小消失',
      core_tech: 'jQuery CSS',
      description: '使用 animate 方法，做到兼容 IE8。曾在联想服务官网上线3个月。'
    },  {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0001/work/Gaohaoyang/index.html',
      img_link: '/module.png',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0001/work/Gaohaoyang',
      title: '个人博客模板',
      core_tech: 'HTML CSS',
      description: '完成百度前端学院的任务。深刻的理解了BFC、浮动、inline-block间距，多列布局等技术。'
    },{
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/index.html',
      img_link: '/task2.png',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '一些小的demo',
      core_tech: 'HTML CSS',
      description: '任务二的展示主页，里面包含五个小 demo。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/baidu-ife-practice/task0003/',
      img_link: '/task3.png',
      code_link: 'https://github.com/Gaohaoyang/baidu-ife-practice/tree/master/task0003',
      title: 'ToDo 应用',
      core_tech: 'JavaScript LocalStorage',
      description: '任务三，ToDo 单页应用，主要使用了 LocalStorage 存储数据，使用 JSON 模拟了 3 张数据表。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/ToDo-WebApp/',
      img_link: '/task3.png',
      code_link: 'https://github.com/Gaohaoyang/ToDo-WebApp',
      title: '优化ToDo 应用(移动端)',
      core_tech: 'JavaScript LocalStorage requireJS Sass Gulp XSS',
      description: '在任务三中，做了一个 PC 端的 ToDo 应用。任务四是将它优化，以适应移动端设备。'
    },{
      demo_link: 'http://gaohaoyang.github.io/ghost-button-css3/',
      img_link: '/button.png',
      code_link: 'https://github.com/Gaohaoyang/ghost-button-css3',
      title: 'Ghost Button 幽灵按钮',
      core_tech: 'CSS3',
      description: '使用 CSS3 中的旋转、缩放、过渡、动画等效果，制作出很酷的按钮效果。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/shadow-demo-css3',
      img_link: '/shadow.png',
      code_link: 'https://github.com/Gaohaoyang/shadow-demo-css3',
      title: 'CSS3 阴影特效',
      core_tech: 'CSS3',
      description: 'CSS3 中的阴影、旋转等效果，制作出曲边阴影和翘边阴影。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/learning-AngularJS/2-3-bookstore-add-sth-by-myself/',
      img_link: '/angularJS.png',
      code_link: 'https://github.com/Gaohaoyang/learning-AngularJS/tree/master/2-3-bookstore-add-sth-by-myself',
      title: 'AngularJS 结合动画效果',
      core_tech: 'AngularJS CSS3',
      description: '使用 AngularJS 中的 ngAnimate 加 CSS3里面的一些旋转效果，做出页面切换的效果。'
    },  {
      demo_link: 'http://gaohaoyang.github.io/test/bootstrap-zhihu/',
      img_link: '/zhihu.png',
      code_link: 'https://github.com/Gaohaoyang/test/tree/master/bootstrap-zhihu',
      title: '仿知乎页面',
      core_tech: 'HTML BootStrap',
      description: '使用BootStrap仿照知乎做了一个静态页面。'
    }
  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a target="_blank" class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a target="_blank" href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a target="_blank" href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
