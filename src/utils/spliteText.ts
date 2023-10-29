import { RefObject } from 'react'

export const getElement = ({ current }: RefObject<HTMLElement>): Array<HTMLDivElement> => {
  const charElements = []
  const elementWords = current!.innerHTML.split(' ')
  current!.innerHTML = ''
  for (let i = 0; i < elementWords.length; i++) {
    const word = elementWords[i]

    const wordElement = document.createElement('div')
    wordElement.style.position = 'relative'
    wordElement.style.display = 'inline-block'

    for (let i = 0; i < word.length; i++) {
      const charElement = document.createElement('div')
      charElement.style.position = 'relative'
      charElement.style.display = 'inline-block'
      // charElement.classList.add('animation')
      charElement.innerHTML = word.charAt(i)
      charElements.push(charElement)
      wordElement.appendChild(charElement)
    }

    current!.appendChild(wordElement)

    if (i < elementWords.length - 1) {
      const spaceElement = document.createElement('div')
      spaceElement.style.position = 'relative'
      spaceElement.style.display = 'inline-block'
      spaceElement.innerHTML = '&nbsp;'

      current!.appendChild(spaceElement)
    }
  }
  return charElements
}

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getApplicationSize = (): { width: number; height: number } => {
  return {
    width: window.innerWidth,
    height: document.body.scrollHeight,
  }
}
