const http = require('http');
const server = http.createServer();

const getStudents = require('./getStudents');
const writeFile = require('./writeFile')

server.on('request', (req,res) =>{

	getStudents.getData(function(students){
		writeFile.getFile(students,function(){
			res.end();
		})
	});

})

server.listen(3000);