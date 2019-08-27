
var mongoHost = '172.30.245.117'
var mongoPort = 27017
console.log("mongohost:port ="+mongoHost+":"+mongoPort);
module.exports = {
	'secret': 'saregama',
	//'database':'mongodb://localhost/demo'
	//'database': 'mongodb://'+process.env.MONGODB_USER+':'+process.env.MONGODB_PASSWORD+'@'+process.env.MONGODB_SERVICE_HOST+':27017/'+process.env.MONGODB_DATABASE
	'database': 'mongodb://'+'mongouser'+':'+'password'+'@'+mongoHost+':'+mongoPort+'/'+'userdb'
};
