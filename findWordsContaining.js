function findWordsContainingCharacters(words, x) {
    var output = [];
    for (let i = 0; i < words.length; i++) {
        if(words[i].includes(x)){
            output.push(i);
        }
    }
    return output;
}


let check = findWordsContainingCharacters(["hamza", "ali", "potter", "arsal"], 'a')
console.log(check)