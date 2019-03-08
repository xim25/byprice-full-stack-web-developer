# ByPrice Full Stack Developer

Este proyecto es un desastre tienes que lograr que funcione correctamente para pasar esta prueba.

## Paso 1 - 5 puntos
Haz un fork de este proyecto.

## Paso 2 - 5 puntos
Haz un merge del branch `step-2` en `master` y repara los conflictos.

## Paso 3 - 10 puntos
Haz un merge del branch `step-3` en `master` y repara los conflictos.
Crea un servicio `/api/shortestword` este deberá ser un método `POST` que devuelva la longitud palabra más corta de un Array de 2 hasta 8 de items.
- Deberá pasar los test ubicados en `/test/shortestword`.
- Entre menos código y más ingenioso más puntos.

## Paso 4 - 15 puntos
Haz un merge del branch `step-4` en `master` y repara los conflictos.
Crea servicios RESTful para listar, crear y eliminar usuarios, programa primero sus pruebas.
- Agrega las propiedades que creas convenientes y documentales modelo `user` en el archivo `/server/models/user.js`
- Crea un test para crear un usuario 
- Crea un test para listar usuarios
- Crea un test para eliminar un usuario
- Crea un servicio para crear un usuario
- Crea un servicio para listar usuarios
- Crea un servicio para eliminar un usuario

## Paso 5 - 25 puntos
Crea una UI en el `home.html` utilizando `React` y `@material-ui/core` donde se puedan listar, crear y eliminar usuarios utilizando los servicios anteriores.
- No es necesario utilizar todas las propiedades que del modelo `user` basta con nombre y correo electrónico
- Utiliza `fetch`
- Utiliza la mayor cantidad de features de ES2015
- Utiliza `webpack` para construir el proyecto
- BONUS: Usa redux darle puntos extras a tu puntuación.

## Paso 5 - 10 puntos
Utiliza la imagen svg para animarla usando sólo css debe lucir como en la siguiente animación:
<img src="https://s3-us-west-2.amazonaws.com/byprice-app/attachments/logo-fx.gif"/>

## Paso 6 - 25 puntos
Crea un endpoint que consulte los siguientes enlaces y devuelva un json el servicio deberá estar en `/api/mini-scrapper` y debe pasar las pruebas en `tests/miniScrapper.js` (puedes utilizar las librerías que creas necesarias).
- https://articulo.mercadolibre.com.mx/MLM-606237538-celular-apple-iphone-6-64gb-4g-lte-_JM
- https://www.amazon.com.mx/Apple-Desbloqueado-Unlocked-Reacondicionado-Refurbished/dp/B076JKVKD4
- https://byprice.com/producto/1d5f0b32-6eca-4cba-bdaa-8e319710d6dd/iphone-xs-64gb-plata 

## Paso 8 - 5
Por defecto en CI se ejecutará `npm run build` (`npx webpack`) agrega las tareas necesarias. 
Crea tu propio branch usando tu nombre en minúsculas con el prefijo `ninja-` ej: `ninja-juan` ahora crea un tag de git que incluya la fecha con el formato `%Y-%m-%d` y subelo a git, posteriormente genera un pull request al proyecto original.

# TIPS

## Los commits cuenta
Entre más específicos sean tus commits mejor será evaluada la prueba.

## Documentación
La documentación también sumará a tu calificación.

## Best Practices
Utiliza Best Practices para que tu calificación aumente.

## Build del proyecto
Puedes agregar más tareas a webpack si lo crees conveniente.

## Revisión
Cada pull request será analizado de manera independiente y a detalle, te sugerimos prestar especial atención en los test y asegurarte de que todos pasen ya que será el primer filtro a considerar.

Buena suerte :)
