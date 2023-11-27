import { useState } from "react";
import "./WinterBackground.css";


function WinterBackground() {
  const [showGiftCard, setShowGiftCard] = useState(false);
  
  const hideGiftCard = () => {
    if (showGiftCard) setShowGiftCard(false);
  }

  const enableGiftCard = () => {
    setShowGiftCard(true);
  }

  return (
    <div className="winter-background">
      <div className="welcome-text-wrapper">
        <h3>Du fandt mig!</h3>
        <p>Klik på gaven for at åbne</p>
      </div>
      <div className="trees"></div>
      <div className="ground">
        <div className="gift-wrapper" onClick={enableGiftCard}>
          <div className="shadow"></div>
          <img className="gift-img" src="gave-billed.png" />
        </div>
      </div>
      {showGiftCard && <GiftCard onClick={hideGiftCard} />}
    </div>
  );
}

export default WinterBackground;


function GiftCard({onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">
        <h2>Glædelig 4. advent skatter</h2>
      </div>
      <div className="card-body">
        <p>Du får her et gavekort til en tur på en valgfri restaurant <span className="paren">(for 2)</span>, på min regning.</p>
        <p>Der er ingen grænser for tid, sted, budget eller snask.</p>
        <p>Det eneste du skal gøre er at vælge restauranten.</p>
        <p className="paren">(Jeg sagde ikke at det ville være nemt)</p>
        <p className="obs">OBS. Gavekortet <span className="emphasize">skal</span> indløses i dette liv.</p>
      </div>
    </div>
  )
}