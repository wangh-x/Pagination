const items = document.querySelectorAll('.item')
const pages = document.querySelector('.pages')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
// 一页显示数据行数
const len = 5
// 页数
let pageNum = Math.ceil(items.length / len)
let str = ''
for (let i = 0; i < pageNum; i++) {
  i == 0 ?
    str += `<li class='active'>${i + 1}</li>` :
    str += `<li>${i + 1}</li>`
}
pages.innerHTML = str
const changePage = (index) => {
  const lis = document.querySelectorAll('.pages li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].className = ''
  }
  lis[index - 1].className = 'active'
  // 分页功能实现
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = 'none'
  }
  for (let i = (index - 1) * len; i < index * len && i < items.length; i++) {
    items[i].style.display = 'block'
  }
  // 左右箭头能不能按
  index == '1' ?
    prev.style.pointerEvents = 'none' :
    prev.style.pointerEvents = 'all'
  index == lis.length + '' ?
    next.style.pointerEvents = 'none' :
    next.style.pointerEvents = 'all'
}
changePage(1)
pages.addEventListener('click', (e) => {
  changePage(e.target.innerText)
})
prev.addEventListener('click', (e) => {
  const lis = document.querySelectorAll('.pages li')
  for (let i = 0; i < lis.length; i++) {
    if (lis[i].className == 'active') {
      changePage(i)
      break
    }
  }
})
next.addEventListener('click', (e) => {
  const lis = document.querySelectorAll('.pages li')
  for (let i = 0; i < lis.length; i++) {
    if (lis[i].className == 'active') {
      changePage(i + 2)
      break
    }
  }
})