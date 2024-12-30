const adduser = require('./module')


const createuser =async(req,res)=>{
   try {
    const data = req.body;
    const create = await adduser.query().insert(data)
    res.status(200).json({ success: true, data: create });
   } catch (error) {
    console.log(error.stack)
    res.status(500).json({message:error.message})
   }

}

module.exports={ createuser

}