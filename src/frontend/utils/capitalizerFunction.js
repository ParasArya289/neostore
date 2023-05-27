export const singleStrCapitalizer = (str) =>str[0].toUpperCase()+str.slice(1,str.length)

export const capitalizer = (str) => {
  let temp=[]
  if(typeof(str) === 'string'){
    return singleStrCapitalizer(str)
  }else{
    for(let word of str){
      temp.push(singleStrCapitalizer(word))
    }
  }
  return temp.join(', ')
}