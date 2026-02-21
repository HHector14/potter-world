import type { BookCard } from "../../types/books";
import style from "./Books.module.css";

export default function BookCard({ colorbg,bookNumber, title, description, publishedDate, pagesNumber }: BookCard) {
  return (
     <div className={style.booksCard}>
                    <div className={`${style.booksCardIcon} ${colorbg}`}>
                        <p className={`text ${style.emoji}`}>📖</p>
                        <p className={`text ${style.emojiText}`}>#{bookNumber}</p>
                    </div>
                    <div className={style.booksCardText}>
                        <p className="text subtitle">{title}</p>
                        <p className="text description">{description}</p>
                        <div style={{display: "flex", margin: "10px 0"}}>
                            <div
                                style={{display: "flex", justifyContent: "center", alignItems: "center", padding: ".5rem", borderRadius: "8px", backgroundColor: "var(--bg-published-card)", marginRight: "10px"}}>
                                <i style={{color:"#e37c13"}} className="fa-regular fa-calendar"></i>
                                <p style={{marginLeft: "5px", fontWeight: 200}} className="text description">Published: {publishedDate}</p>
                            </div>
                            <div
                                style={{display: "flex", justifyContent: "center", alignItems: "center", padding: ".5rem", borderRadius: "8px", backgroundColor: "var(--bg-pages-card)"}} >
                                <i style={{color: "#2769fc"}} className="fa-regular fa-file"></i>
                                <p style={{marginLeft: "5px", fontWeight: 200}} className="text">{pagesNumber} pages</p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}