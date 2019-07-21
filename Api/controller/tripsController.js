const trips= require('../model/trips');

const tripsController = {
    
    getAllTrips:(req, res)=>{
        return res.status(200).json( {
            status:res.statusCode,
            trips,
        
        });
    }
};


module.exports = tripsController;