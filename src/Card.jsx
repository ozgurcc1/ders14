import Buton from "./Buton"
function Card({gorsel, urunAdi}) {

  return (
      <div className="card" >
          <img src={gorsel} alt="gorseller" />

          <h3>{urunAdi}</h3>
          <Buton>Sepete Ekle</Buton>
      </div>
  )
}

export default Card;