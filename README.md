# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Flujo del Código
•	La aplicación inicia con la creación del componente inicial index.js donde se ejecuta el componente RuleOfThumb.js.

•	En RuleOfThumb.js se importa la base de datos de FireBase y se ejecuta AppRoter.js


•	El componente de AppRouter se crea porque para futuros updates se creará la ventana de Login y la de añadir algún otro referente

•	Se ejecuta AppScreen, que tiene como funcionalidad dividir en componentes la página, con el componente de NavBar.js, Header.js, AsideDescription.js, PreviousResults.js, AsideAddAnyoneElse.js y Footer.js.


•	Para esta prueba técnica solo se trabajó sobre PreviousResults.js

•	PreviousResults.js desestructura los datos importados desde FireBase y los pasa por el componente RulingItems.js


•	RulingItems.js realiza el despliegue de los datos de cada uno de los referentes encontrados en la base de datos, pero no procesa aún ni el botón para acción de votar, ni la barra inferior de resultados por lo que se ejecutan los componentes CurrentVote.js y Votes.js.

•	CurrentVote.js hace el despliegue de la lógica de la visualización de los botones durante el voto y la suma de los votos.


•	Votes.js contiene la barra inferior con los porcentajes y hace el cambio en las barras con respecto al porcentaje obtenido tras el voto.

