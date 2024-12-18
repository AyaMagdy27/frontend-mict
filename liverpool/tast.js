let sidebar = document.getElementsByClassName ("sidebar") [0];
let sidebar_content = document.getElementsByClassName ("content-wrapper") [0];
window.onscroll = () => {
let scrollTop = window.scrolly;
let viewporteight = window. innerHeight;
let contentHeight = sidebar_content-getBoundingClientRect).height;
let sidebarTop = sidebar-getBoundingClientRect).top + window.pageYOffset;

if(scrollTop ›= contentHeight - viewportHeight + sidebarTop) k sidebar_content.style.transform =
translate(-${contentHeight - viewportHeight + sidebarTop}px)*;
sidebar_content.style position = "fixed";
else {
sidebar_content.style.transform =
"";
sidebar_content.style.position = "";
}
};