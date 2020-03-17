function writeCode(prefix, code, fn){
    let domCode = document.querySelector('#code')
    // 加一个前缀，保证每次都是在原先的基础上添加的，而不是完全覆盖
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(()=>{
        n = n + 1
        // domCode.innerHTML = code.substring(0, n)
        // code.innerHTML = code.innerHTML.replace('html', '<span style="color: yellow">html</span>')
        // 高亮
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = prefix + code.substring(0, n)
        // 每次往下拉10000像素，直到拉不动
        // domCode.scrollTop = 10000
        // 能拉的最长长度
        domCode.scrollTop = domCode.scrollHeight
        if(n >= code.length){
            window.clearInterval(id)
            fn.call()
        }
    },10)
}

function writeMarkdown(markdown, fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(()=>{
        n = n + 1
        domPaper.innerHTML = Prism.highlight(markdown.substring(0, n), Prism.languages.css, 'css');
        domPaper.scrollTop = domPaper.scrollHeight
        if(n >= markdown.length){
            window.clearInterval(id)
            fn.call()
        }
    },10)
}


var result = `/*
 * 面试官你好，我是xxx
 * 我将以动画的形式来介绍我自己
 * 只用文字介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
    transition: all 1s;
}

html{
    background: rgb(222,222,222);
    font-size: 16px;
}

#code{
    border: 1px solid red;
    padding: 16px;
}

/* 我 需 要 一 点 代 码 高 亮 */

.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/* 加 点 3D 效 果 */
#code{
    transform: rotate(360deg);
}

/*  不 玩 了 ，我 来 介 绍 一 下 我 自 己 吧 */
/* 我 需 要 一 张 白 纸 */
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}
#paper > .content{
    background: white;
    height: 100%;
    width: 100%;
}
`
var result2 = `
#paper{
}`

/* 接下来把Markdown变成HTML，比如marked.js */
/* 接下来给HTML家样式 */
/* 这就是我的会动的简历了 */

var md = `
# 自我介绍

我叫 xxx
1990年1月出生
xxx 学校毕业
希望应聘前端开发岗位

# 技能介绍

熟悉Javascript

# 项目介绍
1. xxx轮播
2. xxx简历
3. xxx画板

# 联系方式

QQ xxxxxxxxxxx
手机 xxxxxxxx
`
// 这个writeCode是定闹钟执行的，有延迟，需要使用回调
writeCode('', result, ()=>{
    createPaper(()=>{
        writeCode(result, result2, ()=>{
            writeMarkdown(md)
        })
    })
})
// 同步函数
function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

function fn3(preResult){
    
    var n = 0
    var id = setInterval(()=>{
        n += 1
        // 之前的代码是直接覆盖，但是这边只能一个一个添加
        code.innerHTML = preResult + result.substring(0, n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
        styleTag.innerHTML = preResult + result.substring(0, n)
        if(n >= result.length){
            window.clearInterval(id)
        }
    }, 10)
}