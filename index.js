function introduction(firstname) {
    console.log `Hi, my name is ${firstname}.`
    return `Hi, my name is ${firstname}.`;
}
function introductionWithLanguage (firstname, language) {
    console.log `Hi, my name is ${firstname} and I am learning to program in ${language}.`;
    return `Hi, my name is ${firstname} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional (firstname, language = "Javascript") {
    console.log `Hi, my name is ${firstname} and I am learning to program in ${language}.`
    return `Hi, my name is ${firstname} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional (firstname, language = "Javascript") {
    console.log `Hi, my name is ${firstname} and I am learning to program in ${language}.`
    return `Hi, my name is ${firstname} and I am learning to program in ${language}.` 
}
introductionWithLanguageOptional ("Gracie" , "Python") {
    console.log(introductionWithLanguageOptional ("Grace", "Python"))
}