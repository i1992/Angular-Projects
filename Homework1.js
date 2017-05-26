console.log('Question 1')

function reverseWord(str) {
	let count = str.length-1
	let reverse = ''
	while(count >= 0){
	
	 	reverse += str[count]	
	 	count--	
	 }
	return reverse
}

console.log(reverseWord('hello'))
function reverseWord(str) {
	let count = str.length-1
	let reverse = ''
	while(count >= 0){
	
	 	reverse += str[count]	
	 	count--	
	 }
	return reverse
}

console.log(reverseWord('world'))
console.log()

console.log('Question 2')

//javascript
function replaceVowels(str) {
	let count = 0
	let replace = ''
	//for(let i = 0; i <= str.length - 1; i++) {
		while (count <= str.length -1){
		if(str[count] == 'a' || str[count] == 'e' || str[count] == 'i' || str[count] == 'o' || str[count] == 'u') {
			replace += '*'
		} else {
			replace += str[count]
		}
		count++
	}
	return replace
}
console.log(replaceVowels('javascript'))
function replaceVowels(str) {
	let count = 0
	let replace = ''
	//for(let i = 0; i <= str.length - 1; i++) {
		while (count <= str.length -1){
		if(str[count] == 'a' || str[count] == 'e' || str[count] == 'i' || str[count] == 'o' || str[count] == 'u') {
			replace += '*'
		} else {
			replace += str[count]
		}
		count++
	}
	return replace
}
console.log(replaceVowels('angular'))
console.log()

console.log('Question 3')
function countLetters(arr) {
	let occurances  = {}
	for(var i = 0; i < arr.length; ++i) {
		if (!occurances[arr[i]]) {
			occurances[arr[i]] = 1
		} else {
			occurances[arr[i]] += 1
		}
	}
	return occurances
}

console.log(countLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']))
console.log()

console.log('Question 4')
function oddsAndEvens(nums) {

	let count = 0
	odds = []
	evens = []

	while(count < nums.length) {
		if (nums[count] % 2 != 0) {
			odds.push(nums[count])
		} else {
			evens.push(nums[count])
		}
		count++
	}

	console.log(odds)
	console.log(evens)
}

console.log(oddsAndEvens([ 21, 99, 43, 1, 8, 2, 48, 82]))
console.log()

console.log('Question 5')



console.log('Question 6')
function markupValue(arr, markupval) {
	let car = {}
	let mrkup = 0
	const totalMarkup = []

	for(let i = 0; i < arr.length; i++) {
		 let markup = (arr[i].wholesale * (markupval/100) ) + arr[i].wholesale 
		 mrkup += (arr[i].wholesale * (markupval/100) ) 
		 car[arr[i].type] = markup
	}
	totalMarkup.push({'Total' : mrkup})
	console.log(totalMarkup)
	return car
}

const cars = [
  { type: 'hybrid', wholesale: 25000 },
  { type: 'minivan', wholesale: 28000 },
  { type: 'sedan', wholesale: 31500 },
  { type: 'convertible', wholesale: 45750 }
]

console.log(markupValue(cars, 10.5))