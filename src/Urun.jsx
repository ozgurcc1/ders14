function Urun({item}) {


  return (
      <li>
            <article className="card">
              <div className="card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-content">
                <h2 className="card-name">{item.name}</h2>
                <ol className="card-list">
                  <li>
                    Ürün adı:
                    <span>{item.title}</span>
                  </li>
                  <li>
                    Kategori: <span>{item.category}</span>
                  </li>
                  <li>
                    Fiyat: <span>{item.price}</span>
                  </li>
                </ol>
              </div>
            </article>
          </li>
  );
}

export default Urun;