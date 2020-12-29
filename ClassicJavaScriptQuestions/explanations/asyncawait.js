async function requestHandler(req, res){
    try{
        const user = await user.findById(req.userId);
        const tasks = await tasks.findById(req. user.tasksId)+; 
        tasks.completed = true;
        await tasks.save();
        res.send('Tasks Saved');
    } catch (e) {
        res.send(e);
    }
}