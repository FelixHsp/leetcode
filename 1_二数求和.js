var twoSum = function(nums, target) {
    var index = [];
    for(var i = 0 ; i < nums.length ; i++){
        for(var j = i+1 ; j < nums.length ; j++){
            (target == nums[i] + nums[j]) && (index.push(i,j))
        }
    }
    return index
};