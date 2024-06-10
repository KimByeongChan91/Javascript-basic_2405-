const greet = (name: string, greeting?:string) =>{
    return `${greeting ?? 'hello'}, ${name}`
}
console.log(greet('김병찬'))
console.log(greet('김병찬', '안녕!'))
