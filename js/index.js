import { header, jumbotron, footer } from './static.js'
import { cardsData } from '../data/cards_data.js'
import { getCard, getFinalCard } from './cards.js'

$(function() {
  // indices
  let cardIndex = 0
  const resArray = [null,null,null,null,null]

  console.log('document is ready')
  const body = $('body')

  // the following are the static elements
  // header
  // const header = $('<h1></h1>').text('Sorting Hat').addClass('container text-center my-5')
  // jumbotron
  // const jumbotron = $('<div></div>').addClass('container d-flex justify-content-center my-5')
  // const sortingHatImg = $('<img/>').addClass('sorting-hat').attr('src', '../assets/Sorting_Hat.webp')
  // jumbotron.append(sortingHatImg)
  // footer
  // const footer = $('<div></div>').addClass('container d-flex justify-content-between my-5')
  // const img1 = $('<img />').addClass('crest gryffindor').attr('src', '../assets/Gryffindor_crest.webp')
  // const img2 = $('<img />').addClass('crest slytherin').attr('src', '../assets/Slytherin_Crest.webp')
  // const img3 = $('<img />').addClass('crest ravenclaw').attr('src', '../assets/Ravenclawcrest.webp')
  // const img4 = $('<img />').addClass('crest hufflepuff').attr('src', '../assets/Hufflepuff_crest.webp')
  // footer.append(img1).append(img2).append(img3).append(img4)

  // the following are the dynamic elements
  const cardContainer = $('<div></div>').addClass('container my-5')
  const row = $('<div></div>').addClass('row')
  const col = $('<div></div>').addClass('col-12 col-lg-6 mx-auto')

  const navClickHandler = (dir) => {
    cards[cardIndex].addClass('hidden')
    const inputVal = $(`input[name='a-${cardIndex}']:checked`).val()
    resArray[cardIndex] = inputVal
    cardIndex = dir === 'next' ? cardIndex+1 : cardIndex-1
    if (cardIndex === 5) {
      const finalCard = getFinalCard(resArray)
      row.append(finalCard)
    } else {
      cards[cardIndex].removeClass('hidden')
      console.log(resArray)
    }
    // todo: if cardIndex is 5, so pass last card, and next button is pressed
    // should call getFinalCard passing in resArray
    // should return final card, append to col

  }

  const cards = cardsData.map((cardData, i) => {
    const card = getCard(cardData, i)
    const buttonContainer = $('<div></div>').addClass('container d-flex justify-content-center')
    const prevButton = $('<button></button>').addClass('btn btn-primary mx-2 mt-4 prevButton').text('Prev').attr('type', 'button').on('click', () => navClickHandler('prev'))
    const nextButton = $('<button></button>').addClass('btn btn-primary mx-2 mt-4 nextButton').text('Next').attr('type', 'button').on('click', () => navClickHandler('next'))
    i > 0 ? buttonContainer.append(prevButton).append(nextButton) :
    buttonContainer.append(nextButton)
    card.append(buttonContainer)
    return card
  })
  cards[cardIndex].removeClass('hidden')

  // selectedCard.removeClass('hidden')
  // const card = $('<div></div>').addClass('card text-primary card-1')
  // const cardHeader = $('<div></div>').text('Sample Question 1').addClass('card-header')
  // const cardBody = $('<div></div>').addClass('card-body')

  // const formCheck1 = $('<div></div>').addClass('form-check')
  // const formCheckInput1 = $('<input>').addClass('form-check-input').attr('type', 'radio').attr('name', 'a-1').attr('id', 'a-1-1').attr('value', 'a-1-1')
  // const formCheckLabel1 = $('<label></label>').text('answer-1-1').attr('for', 'a-1-1')
  // const formCheck2 = $('<div></div>').addClass('form-check')
  // const formCheckInput2 = $('<input>').addClass('form-check-input').attr('type', 'radio').attr('name', 'a-1').attr('id', 'a-1-2').attr('value', 'a-1-2')
  // const formCheckLabel2 = $('<label></label>').text('answer-1-2').attr('for', 'a-1-2')
  // const formCheck3 = $('<div></div>').addClass('form-check')
  // const formCheckInput3 = $('<input>').addClass('form-check-input').attr('type', 'radio').attr('name', 'a-1').attr('id', 'a-1-3').attr('value', 'a-1-3')
  // const formCheckLabel3 = $('<label></label>').text('answer-1-3').attr('for', 'a-1-3')
  // const formCheck4 = $('<div></div>').addClass('form-check')
  // const formCheckInput4 = $('<input>').addClass('form-check-input').attr('type', 'radio').attr('name', 'a-1').attr('id', 'a-1-4').attr('value', 'a-1-4')
  // const formCheckLabel4 = $('<label></label>').text('answer-1-4').attr('for', 'a-1-4')

  // const buttonContainer = $('<div></div>').addClass('container d-flex justify-content-center')
  // const button = $('<button></button>').addClass('btn btn-primary mx-2 mt-4 nextButton').text('Next').attr('type', 'button')
  // buttonContainer.append(button)

  // card.append(cardHeader).append(cardBody)
  // cardBody.append(formCheck1)
  // formCheck1.append(formCheckInput1).append(formCheckLabel1)
  // cardBody.append(formCheck2)
  // formCheck2.append(formCheckInput2).append(formCheckLabel2)
  // cardBody.append(formCheck3)
  // formCheck3.append(formCheckInput3).append(formCheckLabel3)
  // cardBody.append(formCheck4)
  // formCheck4.append(formCheckInput4).append(formCheckLabel4)
  // cardBody.append(buttonContainer)

  cardContainer.append(row)
  row.append(col)
  col.append(cards)

  // appending to the body in order
  body.append(header)
  body.append(jumbotron)
  body.append(cardContainer)
  body.append(footer)
})