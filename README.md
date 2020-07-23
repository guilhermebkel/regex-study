# Regex Study

A deep study about Regular Expressions.

**Regex** or **Regular Expressions** are a formal way to specify a text/word pattern. 

Example:

- You have a big text and you want to find some phone numbers inside it, so you can use a **Regex** to find for **Phone Number Patterns** easily inside this text.

## Flags

Flags can be used to specify how the pattern match will actually work. Per example if the match has to work on all the text or even if it is case sensitive or not.

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
 * the first, it does not try to found the other.
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