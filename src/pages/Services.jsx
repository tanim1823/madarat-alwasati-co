import { Link } from "react-router-dom";
import Modal from "../components/Modal";

/** Images import */
import traningImg from "../assets/images/services/traning.jpg";
import constructionImg from "../assets/images/services/construction.jpg";
import cleanImg from "../assets/images/services/clean.jpg";

const services = [
  {
    id: 1,
    title: "Training & Consultancy",
    subTitle: "We provide best Training & Consultancy service",
    url: traningImg,
    description:
      "We offer a wide ranger of training programs ( Traning and Development ) for all organizational levels and sizes. We provide traning services in the public, private, and social-sectors. We aim to deliver highly effective, life-changing, practical, interactive (through simulation games), goaloriented and life transforming traning courses.",
  },
  {
    id: 2,
    title: "Constructions & Maintenance.",
    subTitle: "Best Construction Comany in Saudi Arab.",
    url: constructionImg,
    description:
      "MAC offers construction maintainance services to our clients. We all make sure the job is done, with as little disruption as possible to your regular business operations. We provide experienced person for any task you have, including.",
  },
  {
    id: 3,
    title: "Cleaning Services",
    subTitle: "One of our main service with expert.",
    url: cleanImg,
    description: `Our team has been providing industrial and waste cleaning services for many years, exceeding and setting industry standards all the while. Our on-site industrial cleaning services mean we come to you and take care whatever's necessary to get the job done. <br/ > 
    Our services can be performed at your convenience, and we also offer 24/7 emergency service. <br/>
    Our team can help with the disposal of broken thermometers, light bulbs, household hazardous wastes such as paint or gardening chemicals, and more. <br/ >
    We're alse adept at handling spill cleanups. Our team handles biohazard situations reporting, soil remedation, vacuum truck services waste profiling, ans more.
    `,
  },
];

const Services = () => {
  return (
    <>
      {/* Page Title */}
      <section className="page-title bg-dark">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Title */}
            <div className="title-column col-md-6 col-sm-8 col-xs-12">
              <h1>Our Services</h1>
            </div>
            {/*Bread Crumb */}
            <div className="breadcrumb-column col-md-6 col-sm-4 col-xs-12">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/*Services Section Two*/}
      <section className="services-section-two grey-bg">
        <div className=" mx-3 row row-cols-1 row-cols-md-3 g-2 ">
          {/*Services Block Four*/}
          {services.map((service) => (
            <div key={service.id} className="col">
              <div
                className="card"
                style={{
                  height: "550px",
                }}
              >
                <img
                  height="300px"
                  src={service.url}
                  className="card-img-top p-3"
                  alt="Training & Consultancy"
                />
                <div className="card-body">
                  <h4 className="card-title">{service.title}</h4>
                  <p className="lead">{service.subTitle}</p>
                  <Modal
                    className={`arrow flaticon-forward-arrow bg-warning p-2 rounded`}
                    id={`service_${service.id}`}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-4 text-center text-secondary">{`Don't hesitate to contract us when you need our services for your home or business `}</h3>
      </section>
      {/*End Services Section Two*/}
    </>
  );
};

export default Services;
