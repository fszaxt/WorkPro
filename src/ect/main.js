import "./ect.css"
const $ = require("jquery");
const copy = require("xe-clipboard");

const loopTask = () => {
     // 遍历表
     $("tr[datagrid-row-index]").each(function(){
         //添加右键复制
         $("td[field]",this).each(function(){
             if(!this.isRightClickCopy){
                 let that = this;
                 $(this).on("contextmenu",function(){
                    let text = $("div",that).text();
                    if(copy(text)){
                        console.log("copy success")
                    }else{
                        console.log("copy error")
                    }
                    return false;
                 })
                 this.isRightClickCopy = true;
             }
         })
     })
}

window.setTimeout(loopTask,50);