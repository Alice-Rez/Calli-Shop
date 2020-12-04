<h1><img align="center" src="./README-materials/title.png" width="100%"> </h1>

[Live demo](https://callishop.alice-rez.vercel.app/)

Mock up of the e-shop selling calligraphies - project created at the end of the React module of my one year web development course. Just frontend application without server or database, so the order is not in reality send anywhere, but posses all basic functionalities of small e-shop with shopping without registration:

- user can choose quantity and add product to the basket

- in the basket they can also change quantities of the products or delete the whole basket item

- when product called "Customized names" is add to the basket, form for adding details such as which name should be written and if it should be written individually or added to one of the calligraphies appears (the options for choosing where the names will be written corresponds to items added to the basket - just the ones that have possibility to add name - as is written in product description in shop part - is displayed in select)

- user can go through the steps of the order - add personal information and choose shipping and payment option

- all forms have implemented basic validation

- user can go back in the order without necessity to fill the data once again

- at the end, user can see the summary of the whole order (where is also written, which name and for what calligraphy was added - if added) and "send it"

- the basket is emptied after sending the order, as well as the info about order in redux store

- for the demo purpose, the personal part of the order form as well as shipping/payment options are pre-filled to make exploration of the page easier for anybody - but definitely it is possible to change it

App state management is done using by Redux, for styling were used Styled Components. Calligraphies are my own handwork (all rights reserved!), just scanned and transformed to SVG.
