const text = '.$+*?-'

const metaCharacters = /[+.?*$]/g
console.log(text.match(metaCharacters))

const allMetaCharacters = /[$-?]/g
console.log(text.match(allMetaCharacters))

const selectedMetaCharacters = /[$\-?]/g
console.log(text.match(selectedMetaCharacters))