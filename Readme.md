<<<<<<< HEAD
# Sorter version 3

1. This is simple project with sorting data: alphabetically, with length text and randomly, with data input from user.
2. Using the function of dividing text and joining in an array:

```js
function takeWords(){
	StringText = textArea.value;
	words = StringText.split("\n");
}

function sortInTurn(){
	takeWords();
	listEl.innerHTML = words.join("<br>");
}
```
## Preview

https://brq1.github.io/Sorter/

## Usage

1. Enter a data in textarea. The input text must be entered 1 word in 1 line.
2. Next you select function to sort.
3. It is possible to add text at any time


=======