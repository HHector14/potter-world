import ColorCard from "../components/books/Color-card"
import BookCard from "../components/books/Book-card"
export default function Books() {
  return(
    <>
      <h2 className="title">Books </h2>
      <p className="description">Explore the magical world through the pages of the Harry Potter series</p>
            <div className="container" style={{margin: '10px 0'}}>
                <ColorCard color="yellowGold" icon="fa-book" title="7" description="Total Books" />
                <ColorCard color="purplePink" icon="fa-book" title="1997-2007" description="Publication Years" />
                <ColorCard color="blueCyan" icon="fa-book" title="3,407" description="Total Pages" />
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "100%", gap: "10px", margin: "20px 0"}}>
                <BookCard bookNumber={1} colorbg="redOrange" title="Harry Potter and the Philosopher's Stone" description="Harry discovers he is a wizard and begins his journey at Hogwarts." publishedDate="1997" pagesNumber={223} />
                <BookCard bookNumber={2} colorbg="greenMint" title="Harry Potter and the Chamber of Secrets" description="Harry returns to Hogwarts and faces the mystery of the Chamber of Secrets." publishedDate="1998" pagesNumber={251} />
                <BookCard bookNumber={3} colorbg="blueCyan" title="Harry Potter and the Prisoner of Azkaban" description="Harry learns about Sirius Black, an escaped prisoner with a connection to his past." publishedDate="1999" pagesNumber={317} />
                <BookCard bookNumber={4} colorbg="purplePink" title="Harry Potter and the Goblet of Fire" description="Harry competes in the dangerous Triwizard Tournament while facing new threats." publishedDate="2000" pagesNumber={636} />
                <BookCard bookNumber={5} colorbg="yellowGold" title="Harry Potter and the Order of the Phoenix" description="Harry forms Dumbledore's Army to fight against the oppressive Ministry of Magic." publishedDate="2003" pagesNumber={766} />
                <BookCard bookNumber={6} colorbg="blueSky" title="Harry Potter and the Half-Blood Prince" description="Harry discovers a mysterious book and learns about Voldemort's past." publishedDate="2005" pagesNumber={607} />
                <BookCard bookNumber={7} colorbg="yellow" title="Harry Potter and the Deathly Hallows" description="Harry, Ron, and Hermione go on a quest to find and destroy Voldemort's Horcruxes." publishedDate="2007" pagesNumber={759} />
            </div>

    </>
  )
}