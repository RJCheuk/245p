// 获取按钮和content元素
const content = document.getElementById("content");
const updateButton = document.getElementById("updateContent");

// 为按钮添加点击事件
updateButton.onclick = function() {
  // 更新文本内容
  content.innerHTML = "Bye-Bye World";

  // 更新样式，改变颜色为蓝色
  content.style.color = "blue";
};
