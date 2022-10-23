import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt  from 'bcrypt';
//2 endpoint que permite el registro

export const register = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8) //encriptacion de las claves porque nunca debemos guardar las claves sin esto en la base de datos, porque seria una falla de seguridad (usamos una libreria que se llama bcryptjs) que encripta nuestra contraseña.
    });
    res.status(201).json({
      "message": "User Created",
      "userId": user.id
    });
  } catch (err) {
    console.log(err);
  }
}

export const login = async (req, res) => { //consulta con el correo si ese usuario existe luego se comparan las dos claves (la que ingreso con la que esta en la base de dato) (ambas se encriptan) si no son validas dice clave invalida, si se hace se realiza un token.
  try { 
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      return res.status(404).send({
        message: `No user found with email ${req.body.email}`
      });
    }

    //comparing passwords
    const passwordIsValid = bcrypt.compareSync(
      req.body.password, //se compara la clave que el usuario ingreso con la de la base de datos
      user.password
    );
  
    // checking if password was valid and send response accordingly
    if (!passwordIsValid) {
      return res.status(401)
        .send({
          message: "Invalid Password" 
        });
    }

    //signing token with user id
    const token = jwt.sign({// se crea este payload si voy a la pagina de jwt el loguin me va a tirar estos datos.
      id: user.id,
      name: user.name,
    }, 'secret-key', { //es una variable de entorno es la firma de la request, del back end, es muy confidencial es super sensible, si alguien tiene el secret-key del backen se puede manipular cualquier token. modificando el token puedo volver a firmarlo. (tiene un tiempo de validez, con el secret-key modifico el token y se entro.) por eso tiene que ser una variable de entorno y no puede estar de ningun modo en bruto en el codigo.
      expiresIn: 86400 
    });
    // secret-key and expiresIn should be in .env file

    //responding to client request with user profile success message and  access token .
    res.status(200)
      .send({
        user: {//depende de la respuesta del login.. 
          id: user.id,
          email: user.email,
          name: user.name,
        },
        message: "Login successfull",
        accessToken: token,
      });
  } catch (err) {
    console.log(err);
  }
}