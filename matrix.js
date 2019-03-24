let matrix = [
    ['a','f','f','d','s','a'],
    ['f','o','a','g','s','a'],
    ['c','g','g','c','s','a'],
    ['r','g','g','1','o','f'],
    ['r','g','f','o','g','a'],
    ['r','g','g','x','s','a']
];

function wordInArr (matrix, [...word]){
    let arr = [];
    word.forEach( (letter) => {
        
        let found = [];
        matrix.forEach( (str, idx) => {
            let findStr = str.join(''), i=0;
            let c = findStr.lastIndexOf(letter);
            while (true) {
                i = findStr.indexOf(letter,i);
                if (i!==-1) { found.push([idx,i]); }
                if (i===c) { break; }
                i++;
            }

        });
        arr.push(found);
    });

    arr[1] = arr[1].filter(pos2 => arr[0].some(pos => {
       let result = pos2[0] === pos[0] 
              ? pos2[1]+1 === pos[1] || pos2[1]-1 === pos[1] 
                  ? true 
                  : false
          : pos2[1] === pos[1]
              ? pos2[0]+1 === pos[0] || pos2[0]-1 === pos[0] 
                  ? true 
                  : false
              : false;
        return result;
    }) );

    arr[2] = arr[2].filter(pos2 => arr[1].some(pos => {
       let result = pos2[0] === pos[0] 
              ? pos2[1]+1 === pos[1] || pos2[1]-1 === pos[1] 
                  ? true 
                  : false
          : pos2[1] === pos[1]
              ? pos2[0]+1 === pos[0] || pos2[0]-1 === pos[0] 
                  ? true 
                  : false
              : false;

        // if (result) { console.log(`position of letter2 - ${pos[0]} ${pos[1]}, letter - ${matrix[pos[0]][pos[1]]}`); }
        // if (result) { console.log(`position of letter3 - ${pos2[0]} ${pos2[1]}, letter - ${matrix[pos2[0]][pos2[1]]}`); }
        return result;
    }) );

    console.log('word - ' + word.join(''));
    console.log('result - ' + (arr[2].length > 0));
    console.log('----------------------------------');

}
wordInArr(matrix,'111');
wordInArr(matrix,'fog');
