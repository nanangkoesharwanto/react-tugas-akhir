import { Image } from "react-bootstrap";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#152a46" }} className="mb-4">
      <div className="container col-xxl-12 px-4">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="https://edspert.id/assets/img/banner_Edspert.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" style={{ color: "white", marginTop: 10 }}>
            <h1 className="display-5 lh-1 mb-3" style={{ fontWeight: 600 }}>
              Jadi expert bersama edspert.id
            </h1>
            <p className="lead my-4">
              Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
              bidangnya, untuk siapkan karir impian anda.
            </p>
            <Image
              src="https://edspert.id/assets/img/200people.png"
              className="d-block img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
