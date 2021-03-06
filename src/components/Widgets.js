
import React from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartArea, faChartBar, faChartLine, faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faUserPlus, faLongArrowAltRight, faCaretRight, faUsers, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';
import { CircleChart, BarChart, SalesValueChart, SalesValueChartphone } from "./Charts";

import ProfileCover from "../assets/img/profile-cover.jpg";

export const ProfileCardWidget = () => {
  return (
    <Card border="light" className="text-center p-0 mb-4">
      <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
      <Card.Body className="pb-5">
        <Card.Img src={ProfileCover} alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
        <Card.Title>Neil Sims</Card.Title>
        <Card.Subtitle className="fw-normal">Senior Software Engineer</Card.Subtitle>
        <Card.Text className="text-gray mb-4">New York, USA</Card.Text>

        <Button variant="primary" size="sm" className="me-2">
          <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Connect
        </Button>
        <Button variant="secondary" size="sm">Send Message</Button>
      </Card.Body>
    </Card>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">{title}</h5>
        <div className="d-xl-flex align-items-center">
          <div className="user-avatar xl-avatar">
            <Image fluid rounded src={photo} />
          </div>
          <div className="file-field">
            <div className="d-flex justify-content-xl-center ms-xl-3">
              <div className="d-flex">
                <span className="icon icon-md">
                  <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                </span>
                <input type="file" />
                <div className="d-md-block text-start">
                  <div className="fw-normal text-dark mb-1">Choose Image</div>
                  <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const CounterWidget = (props) => {
  const { icon, title, stat } = props;

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <div className="d-block d-xl-flex-column align-items-center text-center">
          <div className={`icon icon-shape icon-md rounded me-4 me-sm-0`}>
            <FontAwesomeIcon icon={icon} />
          </div>
          <h5>{stat}</h5>
          <p className="mb-1 small">{title}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export const RoomsBlock = (props) => {
  const { classTitle, building, floor, image, status } = props;

  let classes = "ClassRoomStatus";
  if (props.status === 'Disponible') {
    classes += " disponible"
  } else if (props.status === 'Occup??') {
    classes += " occupe"
  } else if (props.status === 'R??serv??') {
    classes += " reserve"
  }

  console.log(props.status);

  return (
    <Card className="border-0">
      <Card.Body className="p-0">
        <div className="d-block d-xl-flex-column align-items-center text-center">
          <img src={image} alt="classRoom" />
          <div className={classes}>
            {status}
          </div>
          <div>
            <h5 className="classRoomTitle">{classTitle}</h5>
            <div className="classRomeTextContainer">
              <p className="mb-1 small">{building}</p>
              <p className="mb-1 small">{floor}</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const CounterWidget2 = (props) => {
  const { icon, title, titleWhite, stat, statWhite } = props;

  return (
    <Card Card style={{ border: "none", background: "transparent"}} className="shadow-sm">
      <Card.Body>
        <div className="d-block d-xl-flex-column align-items-center text-center">
          <div className={`icon icon-shape icon-md rounded me-4 me-sm-0`}>
            <FontAwesomeIcon icon={icon} />
          </div>
          <h5>{stat}</h5>
          <p className="mb-1 small">{title}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export const CounterWidgetWhite = (props) => {
  const { icon, title, titleWhite, stat, statWhite } = props;

  return (
    <Card Card style={{ border: "none", background: "transparent"}} className="shadow-sm">
      <Card.Body>
        <div className="d-block d-xl-flex-column align-items-center text-center">
          <div className={`icon icon-shape icon-md rounded me-4 me-sm-0`}>
            <FontAwesomeIcon icon={icon} />
          </div>
          <h5>{stat}</h5>
          <h5 style={{color:"white"}}>{statWhite}</h5>
          <p className="mb-1 small">{title}</p>
          <p className="mb-1 small" style={{color:"white"}}>{titleWhite}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export const CircleChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.map(d => d.value);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <CircleChart series={series} />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <h5 className="mb-3">{title}</h5>

            {data.map(d => (
              <h6 key={`circle-element-${d.id}`} className="fw-normal text-gray">
                <FontAwesomeIcon icon={d.icon} className={`icon icon-xs text-${d.color} w-20 me-1`} />
                {` ${d.label} `}{`${d.value}%`}
              </h6>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CardWidget = (props) => {
  const { title, data = [] } = props;

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={12} className="px-xl-0">
            <h5 className="mb-3">{title}</h5>

            {data.map(d => (
              <Row className="d-block d-xl-flex align-items-center p-2" key={d.id}>
                <Col xs={12} xl={5} className="px-xl-0"> 
                  <h6 key={`circle-element-${d.id}`} className="fw-normal text-gray">
                    <FontAwesomeIcon icon={faCaretRight} className={`icon icon-xs w-20 me-1`} />
                    {` ${d.label} `}
                  </h6> 
                </Col>
                <Col xs={12} xl={4} className="px-xl-0">
                  <h6 key={`circle-element-${d.id}`} className="fw-normal text-gray">
                    {` ${d.value} `}
                    <FontAwesomeIcon icon={faUsers} className={`icon icon-xs w-20 me-1`} />
                  </h6>
                </Col>
                <Col xs={12} xl={3} className="px-xl-0">
                  <Card.Link href={d.link} target="_blank" className="text-blue text-decoration-none fw-normal">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className={`icon icon-xs w-20 me-1`} />
                  </Card.Link>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const BarChartWidget = (props) => {
  const { title, value, percentage, data = [] } = props;
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const series = data.map(d => d.value);
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h3>{value}</h3>
          <small className="mt-2">
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
            <span className={`${percentageColor} fw-bold`}>
              {percentage}%
            </span>
          </small>
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`bar-element-${d.id}`} className="d-flex align-items-center text-end mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <BarChart labels={labels} series={series} />
      </Card.Body>
    </Card>
  );
};

export const ProgressTrackWidget = () => {
  const Progress = (props) => {
    const { title, percentage, icon, color, last = false } = props;
    const extraClassName = last ? "" : "mb-2";

    return (
      <Row className={`align-items-center ${extraClassName}`}>
        <Col xs="auto">
          <span className={`icon icon-md text-${color}`}>
            <FontAwesomeIcon icon={icon} className="me-1" />
          </span>
        </Col>
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{title}</h6>
              <small className="fw-bold text-dark">
                <span>{percentage} %</span>
              </small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100} />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Progress track</h5>
      </Card.Header>
      <Card.Body>

        <Progress title="Rocket - SaaS Template" color="purple" icon={faBootstrap} percentage={34} />
        <Progress title="Pixel - Design System" color="danger" icon={faAngular} percentage={60} />
        <Progress title="Spaces - Listings Template" color="tertiary" icon={faVuejs} percentage={45} />
        <Progress title="Stellar - Dashboard" color="info" icon={faReact} percentage={35} />
        <Progress last title="Volt - Dashboard" color="purple" icon={faBootstrap} percentage={34} />
      </Card.Body>
    </Card>
  );
};

export const RankingWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3">
          <div>
            <h6><FontAwesomeIcon icon={faGlobeEurope} className="icon icon-xs me-3" /> Global Rank</h6>
          </div>
          <div>
            <Card.Link href="#" className="text-primary fw-bold">
              #755 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light py-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faFlagUsa} className="icon icon-xs me-3" />Country Rank</h6>
            <div className="small card-stats">
              United States <FontAwesomeIcon icon={faAngleUp} className="icon icon-xs text-success ms-2" />
            </div>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #32 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faFolderOpen} className="icon icon-xs me-3" />Category Rank</h6>
            <Card.Link href="#top" className="small card-stats">
              Travel &gt; Accomodation
            </Card.Link>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #16 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidget = (props) => {
  const { title, value, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-secondary-alt shadow-sm">
      <Card.Header className="d-flex flex-row align-items-center flex-0">
        <div className="d-block">
          <h5 className="fw-normal mb-2">
            {title}
          </h5>
          <h3>${value}</h3>
          <small className="fw-bold mt-2">
            <span className="me-2">Yesterday</span>
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
            <span className={percentageColor}>
              {percentage}%
            </span>
          </small>
        </div>
        <div className="d-flex ms-auto">
          <Button variant="secondary" size="sm" className="me-2">Month</Button>
          <Button variant="primary" size="sm" className="me-3">Week</Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <SalesValueChart />
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidgetPhone = (props) => {
  const { title, value, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-secondary-alt shadow-sm">
      <Card.Header className="d-md-flex flex-row align-items-center flex-0">
        <div className="d-block mb-3 mb-md-0">
          <h5 className="fw-normal mb-2">
            {title}
          </h5>
          <h3>${value}</h3>
          <small className="fw-bold mt-2">
            <span className="me-2">Yesterday</span>
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
            <span className={percentageColor}>
              {percentage}%
            </span>
          </small>
        </div>
        <div className="d-flex ms-auto">
          <Button variant="secondary" size="sm" className="me-2">Month</Button>
          <Button variant="primary" size="sm" className="me-3">Week</Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <SalesValueChartphone />
      </Card.Body>
    </Card>
  );
};

export const AcquisitionWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5>Acquisition</h5>
        <p>Tells you where your visitors originated from, such as search engines, social networks or website referrals.</p>
        <div className="d-block">
          <div className="d-flex align-items-center pt-3 me-5">
            <div className="icon icon-shape icon-sm icon-shape-danger rounded me-3">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className="d-block">
              <label className="mb-0">Bounce Rate</label>
              <h4 className="mb-0">33.50%</h4>
            </div>
          </div>
          <div className="d-flex align-items-center pt-3">
            <div className="icon icon-shape icon-sm icon-shape-quaternary rounded me-3">
              <FontAwesomeIcon icon={faChartArea} />
            </div>
            <div className="d-block">
              <label className="mb-0">Sessions</label>
              <h4 className="mb-0">9,567</h4>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};


export const DropdownMenu = (props) => {

  const { title, optionValue1, optionValue2, optionValue3, optionValue4, optionValue5 } = props;

  
  return (
    <select class="form-select DropdownMenu">
      <option selected>{title}</option>
      <option value={title + optionValue1}>{optionValue1}</option>
      <option value={optionValue2}>{optionValue2}</option>
      <option value={optionValue3}>{optionValue3}</option>
      <option value={optionValue4}>{optionValue4}</option>
      <option value={optionValue5}>{optionValue5}</option>
    </select>
  );
};

export const SwitchButton = (props) => {

  const { title } = props;

  return (
    <div class="form-check form-switch">
      <input class="form-check-input SwitchButtonInput" type="checkbox" id="flexSwitchCheckDefault" />
      <label class="form-check-label" for="flexSwitchCheckDefault">{title}</label>
    </div>
  );
};

export const Banner = (props) => {
  const { image, roomTitle, bulding, floor } = props;

  return (
    <div className="banner" style={{marginBottom: '-100px'}}>
      <img src={image} alt="banner" className="imageBanner" />
      <div className="bannerContent">
        <h2>{roomTitle}</h2>
        <div className="bannerContentRightColumn">
          <p>{bulding}</p>
          <p>{floor}</p>
        </div>
      </div>
    </div>
  );
};

export const ConnectedObjects = (props) => {
  const { title, icon, objectName, objectModel } = props;

  return (
    <Card className="ConnectedObjects">
      <Card.Body>
        <p>{title}</p>
        <div className="ConnectedObjectsList">
          <div className="ConnectedObject">
            <div className={`icon icon-shape icon-md rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <p>
              {objectName}
            </p>
            <p>
              {objectModel}
            </p>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="ConnectedObject">
            <div className={`icon icon-shape icon-md rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <p>
              {objectName}
            </p>
            <p>
              {objectModel}
            </p>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="ConnectedObject">
            <div className={`icon icon-shape icon-md rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <p>
              {objectName}
            </p>
            <p>
              {objectModel}
            </p>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="ConnectedObject">
            <div className={`icon icon-shape icon-md rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <p>
              {objectName}
            </p>
            <p>
              {objectModel}
            </p>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="ConnectedObject">
            <div className={`icon icon-shape icon-md rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <p>
              {objectName}
            </p>
            <p>
              {objectModel}
            </p>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="ConnectedObject">
            <div className={`icon icon-shape icon-md rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <p>
              {objectName}
            </p>
            <p>
              {objectModel}
            </p>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
          </div>
          
        </div>
      </Card.Body>
    </Card>
  );
};

export const ChartsPagePro1 = (props) => {
  const { title } = props;

  return(
  <Card>
    <Card.Body>
      <p>{title}</p>
    </Card.Body>
    </Card>
  )
};

export const ChartsPagePro2 = (props) => {
  const { title } = props;

  return(
  <Card className="HasMarginTop">
    <Card.Body>
      <p>{title}</p>
    </Card.Body>
    </Card>
  )
};

export const Intensity = (props) => {
  const { title } = props;

  return (
    <Card>
      <Card.Body>
        <p>{title}</p>
        <div className="progress IntensityProgressBar">
          <div className="progress-bar" role="progressbar" style={{ width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
          <div className="progress-bar bg-success" role="progressbar" style={{ width: "70%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
          <div className="progress-bar bg-info" role="progressbar" style={{ width: "100%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </Card.Body>
    </Card>
  )
}

export const ColorPicker = (props) => {
  const { title } = props;
  
  return (
    <Card className="HasMarginTop">
      <Card.Body>
        <p>{title}</p>
        <div className="ColorPickerProgressBar">
          {/* <input type="color" id="favcolor" name="favcolor" value="#ff0000" /> */}
          <div className="progress IntensityProgressBar">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: "100%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )

}

