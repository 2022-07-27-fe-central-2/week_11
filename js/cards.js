import { houses } from '../data/cards_data'

export const getCard = (data, cardIndex) => {
  const card = $('<div></div>').addClass(`card text-primary hidden card-${cardIndex}`)
  const cardHeader = $('<div></div>').text(data.question).addClass('card-header')
  const cardBody = $('<div></div>').addClass('card-body')


  const answers = data.answers.map((answer, answerIndex) => {
    const formCheck = $('<div></div>').addClass('form-check')
    const formCheckInput = $('<input>').addClass('form-check-input')
    .attr('type', 'radio').attr('name', `a-${cardIndex}`)
    .attr('id', `a-${cardIndex}-${answerIndex}`).attr('value', answer.value)
    const formCheckLabel = $('<label></label>').text(answer.text)
    .attr('for', `a-${cardIndex}-${answerIndex}`)
    return formCheck.append(formCheckInput).append(formCheckLabel)
  })
  cardBody.append(answers)
  card.append(cardHeader).append(cardBody)
  // console.log(card)
  return card
}

export const getFinalCard = (resArray) => {
  const maxIndex = resArray.reduce((acc, cur) => {
    if (cur === houses.get('g')) {
      acc[0] = acc[0] + 1
    }
    if (cur === houses.get('h')) {
      acc[1] = acc[1] + 1
    }
    if (cur === houses.get('r')) {
      acc[2] = acc[2] + 1
    }
    if (cur === houses.get('s')) {
      acc[3] = acc[3] + 1
    }
  }, [0,0,0,0]).reduce((acc, cur, i, arr) => {
    // reassign accumulator if current value is greater than arr at acc
    acc = cur > arr[acc] ? i : acc
  },0)
  const HouseEnum = {
    0: 'Gryffindor',
    1: 'Hufflepuff',
    2: 'Ravenclaw',
    3: 'Slytherin'
  }

  const card = $('<div></div>').addClass('card text-primary')
  const cardHeader = $('<div></div>').text('Congratulations you belong to house...')
  const cardBody = $('<div></div>').addClass('card-body')
  const cardText = $('<h3></h3>').text(HouseEnum[maxIndex])

  cardBody.append(cardText)

  card.append(cardHeader).append(cardBody)
}