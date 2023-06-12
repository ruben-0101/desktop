const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./kutyak.db');

SQLITE:

const getKutyanevek=(req,res)=>{
    db.all("select * from kutyanevek",(err,rows)=>{
        if(err){
            res.send(err);
        } else {
            res.json(rows);
        }

    });
    //res.json({message:"Kutyanevek lekérése"});
}

const postKutyanevek=(req,res)=>{
    db.run("insert into kutyanevek (kutyanev) values(?)"
    ,[req.body.kutyanev],
    (err)=>{
        if(err){
            res.send(err);
        } else {
            res.json({message:"Adat beszúrva!"});
        }
    })
}

const patchKutyanevek=(req,res)=>{
    db.run("update kutyanevek set kutyanev=? where Id=?"
    ,[req.body.kutyanev,req.body.Id],
    (err)=>{
        if(err){
            res.send(err);
        } else {
            res.json({message:"Adat módosítva!"});
        }
    });
}

const deleteKutyanevek=(req,res)=>{
    db.run("delete from kutyanevek where Id=?"
    ,[req.body.Id],
    (err)=>{
        if(err){
            res.send(err);
        } else {
            res.json({message:"Adat törölve!"});
        }
    });
}


MYSQL:

const patchKutya=(req,res)=>{
    const {id,nevid,fajtaid,eletkor,utolsoell}=req.body;
    conn.query("UPDATE kutyak SET nevid=?,fajtaid=?,eletkor=?,utolsoell=? WHERE id=?"
    ,[nevid,fajtaid,eletkor,utolsoell,id]
    ,(err,result)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat módosítva!"+result.affectedRows});
        }
    })
}

const deleteKutya=(req,res)=>{
    const {id}=req.body;
    conn.query("DELETE FROM kutyak WHERE id=?"
    ,[id]
    ,(err,result)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat törölve!"+result.affectedRows});
        }
    })
}

const getKutyafajtak=(req,res)=>{
    conn.query("select * from kutyafajtak",(err,rows)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json(rows);
        }
    })
}

const postKutyafajta=(req,res)=>{
    const {nev,eredetinev}=req.body;
    conn.query("insert into kutyafajtak (nev,eredetinev) values(?,?)"
    ,[nev,eredetinev]
    ,(err,result)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(201).json({message:"Beszúrva:"+result.affectedRows+" sor."});
        }
    });
}

module.exports={
    getKutyanevek,
    postKutyanevek,
    patchKutyanevek,
    deleteKutyanevek
}