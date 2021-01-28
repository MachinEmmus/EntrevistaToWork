let text = "Hola que tal mi nombre es Emmus, tal, tal y estoy estudiando ingenieria informatica compito en ping y valorant y tengo muchas metas y propositos"

function normalize(word: string){
    return word.toLocaleLowerCase().replace(/[.!;,¡]/g, "");
}

function wordRepetition(text: string){
    let dict: {[key: string]: number} = {};
    let separateWords = text.split(" ");
    for (let word of separateWords){
        if (normalize(word) in dict){
            ++dict[normalize(word)];
        } else {
            dict[normalize(word)] = 1;
        }
    }
    console.log(dict);
}

wordRepetition(text);