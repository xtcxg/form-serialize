$.fn.ser = function(){
    var res=[];
    data = this.serialize();
    arr1 = data.split("&");
    for(var element of arr1){
        // console.log(element);
        var arr2=element.split("=");
        var re = '"'+arr2[0]+'":"'+arr2[1]+'"';
        res.push(re);
    }
    return JSON.parse('{'+res.toString()+'}');
}