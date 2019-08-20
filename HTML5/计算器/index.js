function init() {
    var num = document.getElementById("num");
    num.value = 0;
    num.disabled="disabled";

    var oButton=document.getElementsByTagName("input");
    var btn_num1;
    var fn;
    for (var i = 0;i<oButton.length;i++){
        oButton[i].onclick=function () {
            if (isNumber(this.value)) {
                // num.value=(num.value+this.value)*1;
                if (isNull(num.value)){
                    num.value=this.value;
                }else {
                    num.value=num.value+this.value;
                }
            }else {
                var btn_num = this.value;

                switch (btn_num) {
                    case "+":
                        btn_num1=Number(num.value);
                        num.value=0;
                        fh="+";
                        break;
                    case "-":
                        btn_num1=Number(num.value);
                        num.value=0;
                        fh="-";
                        break;
                    case "*":
                        btn_num1=Number(num.value);
                        num.value=0;
                        fh="*";
                        break;
                    case "/":
                        btn_num1=Number(num.value);
                        num.value=0;
                        fh="/";
                        break;
                    case ".":
                        num.value=dec_number(num.value);
                        break;
                    case "←":
                        num.value=back(num.value);
                        break;
                    case "c":
                        num.value="0";
                        break;
                    case "+/-":
                        num.value=sign(num.value);
                        break;
                    case "=":
                        switch(fn){
                            case "+":
                                num.value = btn_num1+Number(num.value);
                                break;
                            case "-":
                                num.value = btn_num1-Number(num.value);
                                break;
                            case "*":
                                num.value = btn_num1 * Number(num.value);
                                break;
                            case "/":
                                if (Number(num.value == 0)){
                                    num.value=0;
                                }else {
                                    num.value = btn_num1/Number(num.value);
                                }
                                break;
                        }
                        break;
                }
            }
        }
    }
}
/*正负号*/
function sign(n) {
    if (n.indexOf("-")== -1){
        n="-"+n;
    }else {
        n=n.substr(1,n.length);
    }
    return n;
}
/*退位键*/
function back(n) {
    n=n.substr(0,n.length-1);
    if(isNull(n)) {
        n = 0;
    }
    return n;
}
/*小数点*/
function dec_number(n) {
    if(n.index(".")== -1){
        n=n+".";
    }
    return n;
}
/*验证文本框是否为0或者空*/
function isNull(n) {
    if(n=="0"||n.length == 0){
        return true;
    }else
        return false
}
function isNumber(n) {
    // if (!(isNaN(n))){
    //     return true;
    // }else {
    //     return false
    // }
    return !isNaN(n);
}
function init_mooc() {
    document.getElementById("imooc").onclick = function (){
        window.location.href="http://www.baidu.com";
    }

}

























