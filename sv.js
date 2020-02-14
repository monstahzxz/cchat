var express = require('express');
var helper = require('./helper');
var bodyParser = require('body-parser');
var cors = require('cors');
var helmet = require('helmet');

var waitingQueue = [];
var activeChats = [];
var chatBuffers = {};
var app = express();

app.use(bodyParser.json())
//app.use(helmet());
app.use(cors());
// app.use(cors({
//     origin: function(origin, callback){
//       if(!origin) return callback(null, true);
//       if(allowedOrigins.indexOf(origin) === -1){
//         var msg = 'The CORS policy for this site does not ' +
//                   'allow access from the specified Origin.';
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     }
//   }));


app.get('*.*', express.static('./dist/static', {maxAge: '1y'}));

app.get('/getToken', function(req, res){
    token = helper.generateToken();
    waitingQueue.push(token);
    res.send({ userToken: token });
});

app.get('/match', function(req, res){
    userToken = req.get('token');
    for(chat of activeChats){
        // console.log(chat)
        for(chatToken in chat){
            // console.log(chatToken);
            // console.log(chat[chatToken])
            // console.log(typeof(userToken));
            // console.log(userToken);
            if(chat[chatToken].includes(userToken)){
                // console.log(chatToken);
                res.send({ chatToken: chatToken });
            }
        }
    }
    res.end();
});

app.post('/send', function(req, res){
    // console.log('IN');
    userToken = req.get('token');
    chatToken = req.get('chatToken');
    msg = req.body.msg;
    if(msg.indexOf('>') == -1){
        console.log(userToken, chatToken, msg);
        if(chatToken in chatBuffers){
            chatBuffers[chatToken].push({author: userToken, msg: msg});
        }
        res.end();
    }
});

app.get('/receive', function(req, res){
    userToken = req.get('token');
    chatToken = req.get('chatToken');
    if(chatToken in chatBuffers){
        if(chatBuffers[chatToken].length > 0){
            msgArray = [];
            for(chatObj of chatBuffers[chatToken]){
                if(chatObj.author != userToken){
                    // console.log(chatObj);
                    msgArray.push(chatObj.msg);
                    chatBuffers[chatToken].shift();
                }
            }
            if(msgArray.length > 0){
                res.send({ msgs: msgArray });
            }  
        }
    }
    res.end();
});

setInterval(function(){
    helper.matchChats(waitingQueue, activeChats, chatBuffers);
}, 1000);
setInterval(function(){
    //console.log('sss', chatBuffers);
}, 1000);

app.listen(3006, () => console.log('Listening!'));