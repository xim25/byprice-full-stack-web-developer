# Oh no!

Este proyecto es un desastre tienes que lograr que funcione correctamente para pasar esta prueba.

## Paso 1 - 5 puntos
Haz un fork de este proyecto.

## Paso 2 - 5 puntos
Haz un merge del branch `paso-2` en `master` y repara los conflictos.

## Paso 3 - 10 puntos
Haz un merge del branch `paso-3` en `master` y repara los conflictos.
Crea un servicio `/api/shortestword` este deberá ser un método `POST` que devuelva la longitud palabra más corta de un Array de hasta 8 de items.
- Deberá pasar los test ubicados en `/test/shortestword`.
- Entre menos código y más ingenioso más puntos.

## Paso 4 - 35 puntos
Haz un merge del branch `paso-4` en `master` y repara los conflictos.
Crea una UI en el `home.html` utilizando React donde se puedan listar, crear, editar y eliminar usuarios. 
- Agrega las propiedades que creas convenientes y documentales modelo `user` en el archivo `/server/models/user.js` 
- Utiliza `fetch`
- Utiliza la mayor cantidad de fetures de ES2015
- Utiliza `webpack` para construir el proyecto
- Crea minimo 5 tests para todos los endpoints de `/api/users`
- BONUS: Usa redux darle puntos extras a tu puntuación.

## Paso 5 - 15 puntos
Consume desde el browser el servicio `/api/animation` para obtener un svg el cual tendrás que animar usando sólo css y colocarlo en el home `home.html` debe lucir como en la siguiente animación:

## Paso 6 - 25 puntos
Crea un endpoint que consulte los siguientes enlaces y devuelve un json el servicio deberá estar en `/api/mini-scrapper` y debe pasar las pruebas (puedes utilizar las librerías que creas necesarias).
- https://articulo.mercadolibre.com.mx/MLM-606237538-celular-apple-iphone-6-64gb-4g-lte-_JM
- https://www.amazon.com.mx/Apple-Desbloqueado-Unlocked-Reacondicionado-Refurbished/dp/B076JKVKD4
- https://byprice.com/producto/1d5f0b32-6eca-4cba-bdaa-8e319710d6dd/iphone-xs-64gb-plata 

## Paso 7 - 5
Crea tu propio branch usando tu nombre ahora crea un tag de git que incluya la fecha con el formato `%Y-%m-%d` y subelo a git, posteriormente genera un pull request al proyecto original.

# TIPS

## Los commits cuenta
Entre más específicos sean tus commits mejor será evaluada la prueba.

## Documentación
La documentación también sumará a tu calificación.

## Best Practices
Utiliza Best Practices para que tu calificación aumente.

## Build del proyecto
Por defecto en CI se ejecutará `npm build` agrega las tareas necesarias para que el proyecto se construya correctamente para un ambiente de producción.

## Fórmula mágica
No existe una fórmula mágica para pasar esta prueba por lo cual cada pull request será analizado de manera independiente y a detalle, te sugerimos prestar especial atención en los test y asegurarte de que todos pasen ya que será el primer filtro a considerar.

Buena suerte :)
