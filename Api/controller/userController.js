
const users = require('../model/users');
const usersController = {
     signUp : (req, res) => {
        //  return res.status(200).json({
        //      status: res.statusCode,
        //      users,
        //  });
        jwt.sign({users: users},'secret key',(err, token) =>{
            res.json({
                token,
                users
            });
        });
     }
}

// jwt.sign({users: users},'secret key', (err, token) => {
// res.json({
//     token,
//         user,
//         v222:v1
//     });
// });
//FORMAT OF TOKEN
//AUTHORIZATION BEARER <Access token

//verify token
function verifyToken(req,res, next) {
//get auth header value
const bearerHeader = req.headers['authorization'];
//check if bearer is undefined 
if (typeof bearerHeader !== 'undefined') {
// splint at the space
const bearer = bearerHeader.split(' ');
//get token from array

//  const 
} else {
   //forbidden
   res.sendStatus(403);
}
}
module.exports= usersController;