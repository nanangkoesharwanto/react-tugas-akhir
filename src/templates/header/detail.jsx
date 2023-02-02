import { Image } from "react-bootstrap";
import girl from "../../assets/images/girl.png";

const Header = ({entity}) => {
  return (
    <div style={{ backgroundColor: "#152a46" }} className="mb-4">
      <div className="container col-xxl-12 px-4">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src={girl}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" style={{ color: "white", marginTop: 10 }}>
            <h1 className="display-5 lh-1" style={{ fontWeight: 600 }}>
            {entity.title}
            </h1>
            <p className="lead my-2">
            {entity.description.substring(0, 50)}...
            </p>
            <p className="mt-4">
              <div className="mb-2">Mentor</div>
              <div style={{ fontSize: 'larger', fontWeight: 'bold' }}>Name : {entity.title}</div>
              <div>Time : {entity.createdAt}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
