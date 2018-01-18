// 4
// Создайте другой модуль, который будет получать 
// массив учеников и записывать их в файл. 
// Если файла не существует - он должен быть создан.
//  Если файл не пустой, он должен быть 
//  предварительно очищен.

const fs = require('fs');
// const getStudents = require('./getStudents');

module.exports={

	getFile : function(array,callback){
		// getStudents.getData(function(body){

		// fs.exists('./newFile.txt', ( exists) => {
		// 	if(exists) {
		// 		fs.writeFile('./newFile.txt', "",() =>{
		// 			console.log("File Cleared");
	 //    		});
		// 	} else {
		// 		console.log('Error2')
		// 	}
		// 	});

		fs.writeFile("newFile.txt", array, (err) => {
			if (err){
					console.log('Error1');
			}

			callback();
		
			});
		
   		// });
	}

	}


















