console.log('Qustion 1:')
function reverseWord(word){
	return word.split("").reverse().join("")
	
}
console.log(reverseWord('hello'))
function reverseWord(word){
	return word.split("").reverse().join("")
	
}
console.log(reverseWord('world'))
console.log()

console.log('Qustion 2:')
function replaceVowels(word){
	return word.replace(/[aAeEiIoOuU]/ig,"*")
}
console.log(replaceVowels('javascript'))
function replaceVowels(word){
	return word.replace(/[aAeEiIoOuU]/ig,"*")
}
console.log(replaceVowels('angular'))
console.log()

console.log('Qustion 3:')
class Calculator {
	constructor(number = 0) {
		this.number = number
	}

	add(value) {
		this.number += value
		return this
	}

	substract(value) {
		this.number -= value
		return this
	}

	multiply(value) {
		this.number *= value
		return this
	}

	divide(value) {
		this.number /= value
		return this
	}

	clear() {
		this.number = 0
		return this
	}

	get print() {
		console.log(this.number)
        return this
    }
}

const calculator_v1 = new Calculator(2)
      calculator_v1
            .multiply(3)
            .add(10)
            .add(10)
            .divide(2)
            .substract(4)
            .print // 4
            .clear()
            .print // 0
console.log()
const calculator_v2 = new Calculator()
      calculator_v2
            .multiply(3)
            .add(10)
            .divide(2)
            .substract(4)
            .print // 1
            .clear()
            .print // 0
console.log()

console.log('Qustion 4:')
 const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
 const convertToObject = (media_arr) => {
 	const data = {}
 	media_arr.forEach((item) => {
 		data[item[0]] = item[1]
 	})
 	return data
 }
 console.log(convertToObject(media_arr))
console.log()
//question 5
console.log('Qustion 5:')
const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
convertToArray(media_obj)
function convertToArray(media_obj){
 	  console.log(Object.entries(media_obj))  
    }
    
    




    