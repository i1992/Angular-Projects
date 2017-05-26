console.log('Question 1')
let count = 5
const countDown = setInterval(() => {
	if (count == 0) {
		clearInterval(countDown)
	} else {
		console.log(count)
	}
	count-- 
}, 500)



const sortLetters = (letter) => {
	return new Promise((resolve, reject) => {
		letter.forEach((element) => {
			if(element == element.toUpperCase()) {
				console.log(`this letter was rejected: ${element}`)
			} else {
				console.log(`this letter was resolved: ${element}`)
			}
		})
	})
}

const letters = ['A', 'b', 'c', 'D', 'e']
setTimeout(() => {
console.log('')
console.log('Question 2')
	sortLetters(letters) 
		.then((result) => {
			console.log(result)
		})
		.catch((result) => {
			console.log(result)
		})
}, 3000)


const compare = ((reversed, word) => {
	if (reversed == word) {
		return true
	} else {
		return false
	}
})

const reverseWord = ((word) => {
	let reversed = word.split("").reverse().join("")
	if (compare(reversed, word)) {
		return true
	} else {
		return false
	}
}) 

const print = (word, callback) => {
    word.forEach((element) => { 
        if (reverseWord(element)) {
            callback(null, element)
        } else {
            callback(true, element)
        }
    })
}




const words = ['kayak', 'canoe']
setTimeout(() => {
    console.log('')
    console.log('Question 3')
    print(words, (err, result) => {
    if(err)
        console.log(false)
    else 
        console.log(true)
    })
}, 3100)

