
import jwt from "jsonwebtoken";

//Verificamos si el token es valido
export const isUserAuthenticated = (req, res, next) => {

  //Recibimos el token que esta en el header postman
  const authHeader = req.headers.authorization

  //Si no existe el token en el header entonces no esta autenticado
  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN'
    })
  } else {
    //Si existe el token en el header entonces lo desestructuramos
    const token = authHeader.split(' ')[1]  // ejemplo: "Bearer 1234567890" es un token del que solo necesitamos el "1234567890" asi lo dividimos en 2 partes y nos quedamos con la segunda parte.

    let payload; //creamos una variable para guardar el payload del token
    if (token) {
      try {

        // valida comparando el token con el secret-key, si es valido devuelve el payload, si no es valido devuelve un error.
        payload = jwt.verify(token, 'secret-key')

        //si el token es valido entonces continua con la siguiente funcion
        next()
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          // if the error thrown is because the JWT is unauthorized, return a 401 error
          return res.status(401).json({
            status: 401,
            message: 'UNAUTHORIZED'
          })
        }
        console.log(e)
        // otherwise, return a bad request error
        return res.status(400).end()
      }

    } else {
      return res.status(403).json({
        status: 403,
        message: 'FORBIDDEN'
      })
    }
  }
}