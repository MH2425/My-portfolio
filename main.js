/**
 * JS cho chuyển tab các nội dung trong About
 */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

//function được kích hoạt khi một trong 3 tab Skills/Experience/Education được nhấn vào
function opentab(tabname) {
    for(tablink of tablinks)/* lặp qua tất cả các tab-links */ {
        tablink.classList.remove("active-link"); //loại bỏ class active-link
    }
    //Khiến tất cả các tab-links không được active ngay từ đầu

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab"); //loại bỏ class active-link
    }
    //Khiến tất cả các tab-contents không được hiển thị ngay từ đầu
    
    event.currentTarget.classList.add("active-link");
    //Thêm class active-link vào tab bị nhấn chuột
    document.getElementById(tabname).classList.add("active-tab"); 
    //Thêm class active-tab vào tab có nội dung muốn hiển thị (sau khi bấm chuột vào)
    //Tóm lại, khi một tab được nhấn vào thì
        //bỏ class "active" trong mọi tab
        //thêm class "active" vào tab được nhấn chuột vào
        //KQ: Hiển thị chỉ nội dung của 1 tab được chọn
}

/**
 * JS cho đóng mở menu của mobile
 */
var sidemenu = document.getElementById("side-menu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

