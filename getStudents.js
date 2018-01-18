const http = require('http');

module.exports={
	getData: function(callback){
		http.get('http://gs-class.herokuapp.com/nodejs/students.php', (responce) =>{
			var body =[];
			responce.on('data', (chunk) =>{
				body.push(chunk);
			});

			responce.on('end', () =>{
				callback(Buffer.concat(body).toString());
			});
		})
	} 
}



