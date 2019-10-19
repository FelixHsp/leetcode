let event = {
    childrenList:[],
    listen:function(type,fn){
        !this.childrenList[type] && (this.childrenList[type]=[]);
        typeof fn == 'function' && (this.childrenList[type].push(fn));
    },
    triggle:function(type,grade){
        let fns = this.childrenList[type];
        if(!fns && fns === 0){
            return false;
        }
        fns.forEach(fn => {
            fn.apply(this, [arguments]);
        });
    },
    off:function(type,fn){
        var fns=this.childrenList[type];
        for(let i = 0; i < fns.length ; i++){
            if(fns[i] === fn){
                fns.splice(i,1);
            }
        }
    }
}
event.listen('math', arguments => {
    console.log(`${arguments[0]}最高分${arguments[1]}`)
})//创建一个订阅者
event.listen('english',arguments => {
    console.log(`${arguments[0]}最高分${arguments[1]}`)
})
event.listen('english',fn1=arguments => {
    console.log(`我们班${arguments[0]}最高分${arguments[1]}`)
})
event.off('english',fn1)
event.triggle('math',140);
event.triggle('english',145);