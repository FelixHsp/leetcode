let arr = [2,3,1,5,4,9,8,5,6,4,7];
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let flag = arr[0];
    let i = 1;
    let j = arr.length - 1;
    while(i < j){
        while (arr[i] < flag && i < j){
            i ++;
        }
        while (arr[j] > flag && i < j){
            j --;
        }
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let leftArr;
    let rightArr;
    if(arr[i] >= flag){
        leftArr = arr.slice(1,i);
        rightArr = arr.slice(i);
        delete arr;
    }else if(arr[i] < flag){
        leftArr = arr.slice(1,i+1);
        rightArr = arr.slice(i+1);
        delete arr;
    }
    return [...quickSort(leftArr),flag,...quickSort(rightArr)];
}
console.log(quickSort(arr));