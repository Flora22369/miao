var flora22369={
    chunk:function(array, size = 1){
        var rest = []
        var temp = []
        for(var i=0 ; i<array.length ; i++){
            temp.push(array[i])
            if(temp.length===size){
                rest.push(temp)
                temp = []
            }
        }
        if(temp[0]){
            rest.push(temp)
        }
        return rest
    },
         
}