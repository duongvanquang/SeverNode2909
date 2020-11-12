const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Quang:lRywitTUtOQFgquC@cluster0.jethk.mongodb.net/databaseword2909?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });

const Word = mongoose.model('Word', { 
    en: {type : String , trim : true , unique : true , require : true , uppercase : true},
    vn: {type : String , trim : true  , require : true , uppercase : true},
    isMemorized: {type : Boolean , default : false},
});
// SELECT
{/* Word.find ({})
.then(words =>console.log(words))
.catch(error => console.log(error)) */}
//  Quang lRywitTUtOQFgquC
// INSERT
const word = new Word ({en:'two',vn:'mot'})
word.save()
.then(word => console.log(word))
.catch(error => console.log(error))


// UPDATE
//word.findByIdAnUpdate()

