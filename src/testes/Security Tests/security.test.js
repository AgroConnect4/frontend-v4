const request = require('supertest')
const app= require('../../App.jsx')

descrbe('Security Test', ()=>{
    it('should prevent SQL Injection', async()=>{
        const response = await request(app)
        .post('/login')  
        .send({username:"' OR '1'='1", password:"' OR '1'='1"}) 


        expect(response.status).toBe(401)  
        expect(response.body.message).toBe('Login invalido') 
    })

    it('should prevent XSS attacks', async()=>{
        const response= await request(app)
        .post('/comments')
        .send({comment: "<script> alert ('XSS') </script>"})

        expect(response.status).toBe(400) 
        expect(response.body.message).toBe('Comentario invalido....')
    })
})