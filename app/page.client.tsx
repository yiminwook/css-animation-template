const Client = () => {
  return (
    <div>
      <div className="container border">
        <label>typing animation</label>
        <div className="typing"></div>
      </div>
      <div className="container border overflaw-hidden">
        <label>scrolling (to left) animation</label>
        <div className="scroll-text scroll-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          quasi numquam tempora soluta, omnis ratione sit veritatis possimus
          mollitia, sapiente, error a vel obcaecati modi? Numquam id ducimus
          suscipit voluptates?
        </div>
      </div>
      <div className="container border">
        <label>card animation</label>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Client;
