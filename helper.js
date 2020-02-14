var helper = {};

helper.generateToken = function(){
    return Math.random().toString(36).slice(2)
};

helper.matchChats = function(waitingQueue, activeChats, chatBuffers){
    if(waitingQueue.length > 1){
        chatToken = helper.generateToken();
        temp = {};
        temp[chatToken] = [waitingQueue.shift(), waitingQueue.shift()];
        activeChats.push(temp);
        chatBuffers[chatToken] = [];
    }

    //console.log(waitingQueue, activeChats)
    return waitingQueue, activeChats;
};

module.exports = helper;