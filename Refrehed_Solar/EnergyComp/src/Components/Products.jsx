import "./styles/Products.css";
import ProductsImage from "./assets/Solar_Products.jpg";

export default function Products() {
  return (
    <>
      <section className="productsSection">
        <h1>Products & Services</h1>

          <h2 className="productTitles">Refurbished Solar Panels</h2>
        <div className="productsContainer">
          <div className="productsImg">
            <img src={ProductsImage} />
          </div>

          <div className="productsContents">
            <div className="contents1">
              <h2>Items:</h2>
              <p>Monocrystalline Solar Panels</p>
              <p>Polycrystalline Solar Panels</p>
              <p>Thin-Film Solar Panels</p>
              <p>Bifacial Solar Panels</p>
              <p>Monocrystalline PERC Solar Panels</p>
              <p>Monocrystalline Half-Cut Solar Panels</p>
              <p>Polycrystalline Half-Cut Solar Panels</p>
              <p>PERC Bifacial Solar Panels</p>
              <p>Smart Solar Panels </p>
              <p>Flexible Solar Panels</p>
            </div>

            <div className="contents2">
              <h2>Price P/W:</h2>
              <p>$0.50 - $0.70</p>
              <p>$0.40 - $0.60</p>
              <p>$0.35 - $0.50</p>
              <p>$0.60 - $0.80</p>
              <p>$0.60 - $0.80</p>
              <p>$0.55 - $0.75</p>
              <p>$0.45 - $0.65</p>
              <p>$0.70 - $0.90</p>
              <p>$0.80 - $1.00</p>
              <p>$0.90 - $1.20</p>
            </div>
          </div>
        </div>


        <h2 className="productTitles">Battery Backup Solutions</h2>
        <div className="productsContainer">
          <div className="productsImg">
            <img src={ProductsImage} />
          </div>

        <div className="productsContents">
          <div className="contents1">
            <h2>Items:</h2>
            <p>Lithium-Ion Battery Systems</p>
            <p>Lead-Acid Battery Banks</p>
            <p>Deep-Cycle Batteries</p>
            <p>Hybrid Energy Storage Systems</p>
            <p>Grid-Tied Battery Backup Systems</p>
            <p>Off-Grid Battery Systems</p>
            <p>Backup Power Inverters and Controllers</p>
            <p>Mobile Power Stations</p>
            <p>Flow Battery Systems</p>
            <p>Hydrogen Fuel Cell Backup Systems</p>
          </div>

          <div className="contents2">
            <h2>Price P/W:</h2>
            <p>$150 - $400</p>
            <p>$75 - $200</p>
            <p>$100 - $250</p>
            <p>$250 - $600</p>
            <p>$400 - $1,000</p>
            <p>$250 - $500</p>
            <p>$50 - $150</p>
            <p>$75 - $250</p>
            <p>$500 - $1,250</p>
            <p>$750 - $1,750</p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
