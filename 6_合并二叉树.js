var mergeTrees = function(t1, t2) {
    var t3=[];
    if(t1.length >= t2.length){
        for(var i = 0; i < t2.length; i ++){
            t3.push(t1[i]+t2[i]);
            console.log(t3)
        }
        for(var i = t2.length; i < t1.length; i++){
            t3.push(t1[i]+0);
        }
    }else if(t2.length >= t1.length){
        for(var i = 0; i < t1.length; i ++){
            t3.push(t1[i]+t2[i]);
            console.log(t3)
        }
        for(var i = t1.length; i < t2.length; i++){
            t3.push(t2[i]+0);
            console.log(t3)
        }
    }
    // return t3;
};
mergeTrees([1,3,2,5],[2,1,3,null,4,null,7])