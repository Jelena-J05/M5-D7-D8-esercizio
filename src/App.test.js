import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('main rendering tests', () => {
  it('renders Welcome component', () => {
    render(<App />)
    const mainHeader = screen.getByRole('heading', {
      name: /Hey there👋, welcome to our bookstore!/i,
    })
    expect(mainHeader).toBeInTheDocument()
  })

  it('renders all the 150 books', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    expect(allTheBookCards).toHaveLength(150)
  })

  it('renders CommentArea component', () => {
    render(<App />)
    const reviewInputField = screen.getByPlaceholderText(
      /Please add your comment/i
    )
    expect(reviewInputField).toBeInTheDocument()
  })
})

describe('filter testing', () => {
  it("finds just one result for the word 'arrow'", () => {
    render(<App />)
    const filterInputField = screen.getByPlaceholderText(/Search for a book/i)
    fireEvent.change(filterInputField, { target: { value: 'arrows' } })
    const allTheBookCards = screen.getAllByTestId('book-card')
    expect(allTheBookCards).toHaveLength(1)
  })

  it("finds three results for the word 'witcher'", () => {
    render(<App />)
    const filterInputField = screen.getByPlaceholderText(/Search for a book/i)
    fireEvent.change(filterInputField, { target: { value: 'witcher' } })
    const allTheBookCards = screen.getAllByTestId('book-card')
    expect(allTheBookCards).toHaveLength(3)
  })
})

describe('SingleBook testing', () => {
  it('makes book card border change clicking on it', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    expect(firstBookCard).toHaveStyle('border: 3px solid red')
  })

  it('restores normal border after clicking on a second book', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    expect(firstBookCard).toHaveStyle('outline: 3px solid red')
    const secondBookCard = allTheBookCards[1]
    fireEvent.click(secondBookCard)
    expect(firstBookCard).not.toHaveStyle('outline: 3px solid red')
  })
})

describe('CommentList testing', () => {
  it('renders no book comments on load', () => {
    render(<App />)
    const allTheBookComments = screen.queryAllByTestId('single-comment')
    expect(allTheBookComments).toHaveLength(0)
  })

  it('renders comments clicking on a valid book', async () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    const allTheBookComments = await screen.findAllByTestId('single-comment')
    expect(allTheBookComments).not.toHaveLength(0)
  })
})
