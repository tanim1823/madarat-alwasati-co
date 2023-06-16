const info = {
  aim: "Alkey component ofthe Saudiv Vision 2030 initiative is a new economuic strategy that facilitates a more efficient, profitable, and dynamic private sector that will shape and drive a stream lined business environmentr across the Kingdom whilst stim ulating investment and wlentreprerneurial activity.",
  mission:
    "Our mission at MAC is to deliver unique and strategic solution across the Kingdom of Saudi Arabia. As a growing company, we focus on tackling cgallenges with insight, confidence, and a firm commitment to each and every client. The unlimited prospects that technology can present both now and in the future excite us greatlyt at MAC.",
  vision:
    "Our vision at MAC is to achieve excellentce and become a regional industry leader by providing innovative cost-effective and reliable Civil, Electrical and Mecahniocal services.",
};

const MissionVision = () => {
  return (
    <div
      style={{
        marginTop: "70px",
        marginBotton: "30px",
      }}
      className="container-fluid"
    >
      <div className="container">
        <div className="row mb-4 border rounded">
          <h2 className="display-4 text-info text-center">Our Aim</h2>
          <hr className="text-secondary" />
          <h4
            style={{
              textAlign: "center",
            }}
            className="lead text-secondary"
          >
            {info.aim}
          </h4>
        </div>
        <div className="row">
          <div className="col md-6">
            <h4 className="display-4 text-danger text-center">Our Mision</h4>
            <hr />
            <h5 className="lead text-secondary">{info.mission}</h5>
          </div>
          <div className="col md-6">
            <h4 className="display-4 text-warning text-center">Our Vision</h4>
            <hr />
            <h5 className="lead text-secondary">{info.vision}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
