const Question = require('../models/question')

class queController{

  static add(req, res){
    let obj={
      title: req.body.title,
      desc: req.body.desc,
      userId: req.currentUserId
      // votes: {
      //   count: req.body.count,
      //   userId: req.currentUserId
      // }
    }

    Question.create(obj)
    .then(data =>{
      res.status(200).json(data)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static addVotes(req, res){

      let obj ={
        count: req.body.count,
        userId: req.currentUserId
      }

      let ct = req.body.count
      //findOne question with userId
      // if found{neutralized(whether the value is the same)}
      // else {add new data}

      Question.findOne(
      { _id:req.params.id, 'votes.userId': req.currentUserId})
      .then(data =>{

        if (data){

          if(data.votes[0].count == ct){
            // ini kalo sama
            console.log('dapet', data);
            return Question.findByIdAndUpdate(
              req.params.id,
              { $pull: { 'votes': { userId: req.currentUserId } } })
              // neautralize data
          }else{
            // kalo beda
            
            return Question.updateOne(
              { _id:req.params.id, 'votes.userId': req.currentUserId}, {
                '$set': {
                  'votes.$.count': ct
                }
              })
          }
          
         
        }else{
          // add new data
          console.log('gadapet');
          return Question.update(
            { _id: req.params.id },
            { $push: { votes: obj } })
          
        }
      })
      .then(databaru =>{
        console.log(databaru, 'data baru');
        
        res.status(201).json(databaru)
      })
      .catch(err =>{
        res.status(500).json(err)
      })

  }

  static remove(req, res){

    Question.deleteOne({ _id: req.params.id})
    .then(databaru =>{
      res.status(200).json(databaru)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static update(req, res){
    Question.updateOne({ _id: req.params.id},{
      title: req.body.title,
      desc: req.body.desc,
    })
    .then(databaru =>{
      res.status(200).json(databaru)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

}

module.exports = queController