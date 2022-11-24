let links = document.querySelectorAll('.content__link');
let linkContent = links[0].innerHTML;
let linksNum = links.length;

function getMaxWidth(pics) {
  let temp = null;
  for (let pic of pics) {
    let width = pic.getBoundingClientRect().width;
    temp = (width > temp) ? width : temp;
  }
  return temp;
}

function getSumHeight(pics) {
  let temp = null;
  for (let pic of pics) {
    temp += pic.getBoundingClientRect().height;
    console.log(temp);
  }
  return temp;
}

let pics = document.querySelectorAll('.content__image');
let picsNum = pics.length;
let picWidth = pics[0].getBoundingClientRect().width;
let picMaxWidth = getMaxWidth(pics);
let picSumHeight = getSumHeight(pics);

document.getElementById('link_num').textContent = linksNum;
document.getElementById('link_content').textContent = linkContent;
document.getElementById('pics_num').textContent = picsNum;
document.getElementById('pic_width').textContent = picWidth + 'px';
document.getElementById('max_width').textContent = picMaxWidth + 'px';
document.getElementById('sum_height').textContent = picSumHeight + 'px';



