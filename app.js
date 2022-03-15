const subArray = (arr) => {
    let map = {};
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum == 0 || map[arr[i]]) {
            return console.log('yes');
        }
        map[arr[i]] = true;
    }
    return console.log('false');
}

const array = [1, 4, -2, -2, 5, -4, 3];

subArray(array);


