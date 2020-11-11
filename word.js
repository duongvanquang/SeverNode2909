const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Quang:lRywitTUtOQFgquC@cluster0.jethk.mongodb.net/databaseword2909?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });

const Word = mongoose.model('Word', { 
    en: {type : String , trim : true , unique : true , require : true , uppercase : true},
    vn: {type : String , trim : true  , require : true , uppercase : true},
    isMemorized: {type : Boolean , default : false},
});

const kitty = new Word({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
//  Quang lRywitTUtOQFgquC
