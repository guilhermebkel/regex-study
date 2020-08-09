# Regex Study

A deep study about Regular Expressions.

**Regex** or **Regular Expressions** are a formal way to specify a text/word pattern. 

Example:

- You have a big text and you want to find some phone numbers inside it, so you can use a **Regex** to find for **Phone Number Patterns** easily inside this text.

## Flags

Flags can be used to specify how the pattern match will actually work. Per example if the match has to work all around the text or even if it is case sensitive or not.

```js
/**
 * g - find all patterns globally
 * i - w/o case sensitive
 */

const text = "Mota signed the document."

/**
 * Regex: 
 *  - /M|do/
 *  - /m|do/i
 * 
 * Will only match ["M"] (was supposed to find "M,m" or "do")
 * since the global flag is not specified. So, after finding
 * the first, it does not try to find the other.
 */
console.log(text.match(/M|do/))
console.log(text.match(/m|do/i))

/**
 * Regex:
 * 	- /m|do/gi
 * 
 * Will match ["M", "do"]
 */
console.log(text.match(/m|do/gi))
```

## Meta-characters

We can use meta-characters to make custom matches using some regex pattern. Below you're able to see examples of meta-characters:

#### Representatives
- **.** (point) - any character
- **[ ]** (group) - a group of permitted characters
- **[^]** (negated group) - a group of non permitted characters

#### Quantifiers
- **?** (optional) - 0 or 1 character
- **‎‎*‎** (asterisk) - 0 or more characters
- **+** (plus) - 1 or more characters
- **{n,m}** (keys) - from *n* to *m*

#### Anchors
- **^** (circumflex) - init of line
- **$** (sign) - end of line
- **\b** (border) - init or end of word

#### Others
- **‎\‎** (scape) - use meta-characters as literal character
- **‎|‎** (or) - *or* operation
- **‎( )‎** (group) - defines a group
- **‎\1...\9‎** (retriever) - gets already used groups

## Observations (characters)

1. When working with multiple lined text, it is important to use **back** (`) on string.

```js
const multipleLinedText = `
	a beautiful line.
	another great line.
`
```

2. Watch out the use of **tab**, since **tab** and **spaces** have a different way to be matched.

```js
const tab = '	'
console.log(tab.match(/\s/g)) // ['\t']

const space = ' '
console.log(space.match(/\s/g)) // [' ']
```