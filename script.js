// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.

window.onload = () => {
  // 1.1 Basandote en el array siguiente, crea una lista ul > li
  // dinámicamente en el html que imprima cada uno de los paises.
  let body = document.querySelector('body')
  const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

  let ulCountries = document.createElement('ul')
  for (let value of countries) {
    let liContries = document.createElement('li')
    liContries.innerText = value
    ulCountries.appendChild(liContries)
  }

  body.appendChild(ulCountries)
  //////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  // 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
  let removeClase = document.querySelector('.fn-remove-me')
  removeClase.remove()
  ///////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  // 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
  // en el div de html con el atributo data-function="printHere".
  let divPrintHere = document.querySelector('[data-function="printHere"]')
  const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
  let ulCars = document.createElement('ul')
  for (let i = 0; i < cars.length; i++) {
    let liCars = document.createElement('li')
    liCars.innerText = cars[i]
    ulCars.appendChild(liCars)
  }
  divPrintHere.appendChild(ulCars)
  //OTRA MANERA DE HACERLO:
  //   let divPrintHere = document.querySelector('[data-function="printHere"]')
  //   const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
  //   let ulDiv = document.createElement('ul')
  //   let agrupador = ''
  //   cars.forEach((item) => {
  //     agrupador += `<li>${item}</li>`
  //   })
  //   ulDiv.innerHTML = agrupador
  //   divPrintHere.appendChild(ulDiv)

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
  // h4 para el titulo y otro elemento img para la imagen.
  const paises = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' },
  ]

  for (let item of paises) {
    let divCountries = document.createElement('div')
    let h4 = document.createElement('h4')
    h4.innerText = item.title
    let img = document.createElement('img')
    img.src = item.imgUrl

    divCountries.appendChild(h4)
    divCountries.appendChild(img)
    body.appendChild(divCountries)
  }

  //OTRA MANERA DE HACERLO
  //   for (let item of paises) {
  //     let divCountries = document.createElement('div')
  //     divCountries.innerHTML += `<h4>${item.title}</h4>
  //                                   <img src="${item.imgUrl}"/>`
  //     body.appendChild(divCountries)
  //   }

  // 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
  // elemento de la lista.
  let listadoDiv = document.querySelectorAll('div')
  let btnRemove = document.createElement('button')
  btnRemove.innerText = 'eliminar último'
  btnRemove.addEventListener('click', () => {
    listadoDiv[listadoDiv.length - 1].remove()
  })
  body.appendChild(btnRemove)
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.
//   for (let item of paises) {
//     let divCountries = document.createElement('div')
//     divCountries.innerHTML += `<h4>${item.title}</h4>
//                                   <img src="${item.imgUrl}"/>`
//     let btn = document.createElement('button')
//     btn.textContent = 'elimina'
//     btn.addEventListener('click', () => {
//       divCountries.remove()
//     })
//     body.appendChild(divCountries)
//     body.appendChild(btn)
//   }
