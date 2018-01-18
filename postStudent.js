// Создайте отдельный модуль, 
// который будет считывать ваш файл с 
// учениками и отправлять эту информацию
// на POST 
// http://gs-class.herokuapp.com/nodejs/students.php.
//  Предусмотрите ситуацию, когда файл 
//  будет достаточно большой.


const request = require('request');

module.exports = {
    postData: function(post){
    if (req.method == 'POST'){
        http.get("http://gs-class.herokuapp.com/nodejs/students.php", (responce) =>{
            var body =[];
            responce.on('data', 'chunk' =>{
                body.push(chunk);
            });

            responce.on('end', () =>{
                res.write(body);
                res.end();
            });
        });
    }else{
        res.end();
    }


}