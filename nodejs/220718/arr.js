function checkduplicate(arr) {
    // 쌤 방법 
    let set = new Set(arr);
    return arr.length != set.size;

    // 나의 바보같은 모숩
    for (i=0; i<arr.length; i++) {
        let num = arr.pop();
        let check = arr.includes(num);
            if (check == true ) {
                return check;
            }
        arr.unshift(num);
        return check;
    }
}

console.log(checkduplicate([1,2,3,4]));
console.log(checkduplicate([4,2,3,4]));
