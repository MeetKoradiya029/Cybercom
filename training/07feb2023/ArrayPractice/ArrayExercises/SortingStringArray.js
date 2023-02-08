const str = ["meet","kalpesh","mihir","sudhir"];

console.log(str.sort());


var i = 0, j;
        while(i < str.length) {
            j = i + 1;
            while(j < str.length) {
                if (str[j] < str[i]) {
                    var temp = str[i];
                    str[i] = str[j];
                    str[j] = temp;
                }
                j++;
            }
            i++;
        }
console.log(str)