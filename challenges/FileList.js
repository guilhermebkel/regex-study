const text = "mp3 file list: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3"

const dottedMP3 = /\.mp3/g

console.log(text.match(dottedMP3))