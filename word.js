const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Quang:lRywitTUtOQFgquC@cluster0.jethk.mongodb.net/databaseword2909?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
//  Quang lRywitTUtOQFgquC
