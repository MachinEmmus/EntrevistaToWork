function requestHandler(req, res){
    user.findById(req.UserId, function (err, user) => {
        if(err){
            res.send(err)
        } else {
            Task.findById(user.taskId, function(err, tasks) =>{
                if (err){
                    res.send(err)
                } else {
                    tasks.completed = true;
                    tasks.save(function(err) => {
                        if(err){
                            res.send(err)
                        } else {
                            res.send("Task Completed")
                        }
                    })
                }
            })
        }

    })
}
//wheteaver code