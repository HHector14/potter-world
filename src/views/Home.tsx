import CardMain from "../components/home/Card-main"
import CardInfo from "../components/home/Card-info"
import MiniCardInfo from "../components/home/Mini-card-info"
import style from '../components/home/Home.module.css'


export default function Home() {

  return (
    <>
      <CardMain />
      <div className={style.containerCardGrid}>
        <CardInfo icon="fa-people-group" colorbg="purplePink" title="Characters" description="Discover witches and wizards from the magical world" />
        <CardInfo icon="fa-house" colorbg="redOrange" title="Houses" description="Exploer the four Hogwarts houses and their traits" />
        <CardInfo icon="fa-magic" colorbg="blueCyan" title="Spells" description="Learn about magical spells and their incantations" />
        <CardInfo icon="fa-book" colorbg="greenMint" title="Books" description="Browse the complete Harry Potter book series" />

      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <MiniCardInfo colorTitle={'#7b3309'} title={'40+'} text={'Character'} />
        <MiniCardInfo colorTitle={'#59188d'} title={'4'} text={'Houses'} />
        <MiniCardInfo colorTitle={'#0d542b'} title={'7'} text={'Books'} />
      </div>
    </>
  )
}