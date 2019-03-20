const db = require('../../../models/News/db_News');


module.exports = async (req, res, next) => {
    db.deleteNewsById(req.params.id)
        .then((result) => {
            if (result.id == req.params.id) {
                console.log('News was deleted');
                db.getsNews()
                    .then(result => {
                            res.status(201).json(result);
                        },(err) => {
                            res.status(400).json({err: err.message});
                        });
            }
        }, (err) => {
            res.status(400).json({err: err.message});
        });
}