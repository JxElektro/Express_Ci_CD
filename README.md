# DealershipExpress

# Migraciones

(++) = Creacion de un Archivo
(--) = Eliminacion de un Archivo
(¬¬) = Modificacion de un Archivo
(=>) = Run de un Archivo
(xx) = Error

1.- (++) Archivos base - App.js como punto de entrada de la aplicación - database.js para la conexión a la base de datos

2.- (++) modelos de la base de datos + /models que contiene los modelos de la base de datos - /controllers que contienen las funciones de los modelos

3.- (++) las rutas de la aplicación - /routes que contiene las rutas de la aplicación

4.- (++) las tablas desde dbeaver porque era mas rapido y no se tenia que hacer por consola

5.- (++) request.sql para con ejemplos practicos para postman

6.- (++) variables de entorno

7.- (++) .gitignore para ignorar los archivos de node_modules

8.- (++) models/user.js para el modelo de usuario

9.- (++) controllers/user.js para las funciones del modelo de usuario

10.- (¬¬) Authentificaciones

11.- (=>) Se probaron en en postman

12.- (++) 4 archivos de migracion

13.- (¬¬) Pobladas basado en los modelos

14.- (++) /**test** para las pruebas

15.- (++) teardown.js para limpiar la base de datos al terminar las pruebas

16.- (++) test.auth.js para las pruebas de autenticacion

17.- (xx) test.dealership.js para las pruebas de usuarios ( No Esta Funcionando , creo que no llega el payload)

18.- (=>) Test

19.- (++) CI.yml

20.- (++) CD.yml

21.- (++) index.js para el servidor ya que el app.js no funciono

23.- (¬¬) app.js para el servidor se quito el listen y se agrego un console.log(process.env.ENV);

24.- (=>) CI Pass

25.- (=>) CD Pass

26.- (++) usuario de render

27.- (++) proyecto en render

28.- (++) variables de entorno en render

29.- (xx) no funciona el deploy en render

30.- (++) variables de entorno del la base de datos de render a github

31.- (¬¬) config.js con las variables de entorno de render

32.- (=>) Deplpy Render Pass

33.- (=>) Se prueba el deploy desde render y funciona

34.- (++) Conexion a la base de datos de render a postgress 

![cicd](https://user-images.githubusercontent.com/107572992/199629477-8cd24a11-4672-43ee-a2cf-abfe0172aa60.jpg)
![Deployment](https://user-images.githubusercontent.com/107572992/199629507-db4cfb4c-c9cd-4c66-9d09-e9fe9d3f9ded.jpg)
![PostmanDeployment](https://user-images.githubusercontent.com/107572992/199629527-cb30537b-317b-4207-a88c-c12e1b0d6322.png)
![postgres](https://user-images.githubusercontent.com/107572992/199629539-bd98aa81-04f7-4902-9613-f23ba2284b75.jpg)
![postgres2](https://user-images.githubusercontent.com/107572992/199629543-49873e33-e2cd-470a-932e-c6b4e19c46bc.jpg)




