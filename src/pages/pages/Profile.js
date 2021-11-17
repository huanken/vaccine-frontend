import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Row,
  UncontrolledDropdown
} from "reactstrap";

import {
  Briefcase,
  Home,
  MapPin,
  MessageSquare,
  MoreHorizontal
} from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";

import unsplash1 from "../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../assets/img/photos/unsplash-2.jpg";

import UserApi from '../../api/UserApi';

const ProfileDetails = () => {

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getUserProfile = async () => {
      try {

        // const result = await UserApi.getProfile();
        // console.log(result);
        // setUserInfo(result);

      } catch (error) {
        console.log(error);
        // TODO notification
      }
    }

    getUserProfile();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="mb-0">
          Profile Details
      </CardTitle>
      </CardHeader>
      <CardBody className="text-center">
        <img
          src={userInfo.avatarUrl ? `http://127.0.0.1:8887/Avatar/${userInfo.avatarUrl}` : avatar1} // 'http://127.0.0.1:8887/Avatar/1613126336858.png'
          alt={userInfo.firstName + " " + userInfo.lastName}
          className="img-fluid rounded-circle mb-2"
          width="128"
          height="128"
        />

        <CardTitle tag="h5" className="mb-0">
          {userInfo.firstName + " " + userInfo.lastName}
        </CardTitle>
        <div className="text-muted mb-2">{userInfo.role}</div>

        <div>
          <Button size="sm" color="primary" className="mr-1">
            Follow
        </Button>
          <Button size="sm" color="primary">
            <MessageSquare width={16} height={16} /> Message
        </Button>
        </div>
      </CardBody>

      <hr className="my-0" />

      <CardBody>
        <CardTitle tag="h5">Skills</CardTitle>
        <Badge color="primary" className="mr-1 my-1">
          HTML
      </Badge>
        <Badge color="primary" className="mr-1 my-1">
          JavaScript
      </Badge>
        <Badge color="primary" className="mr-1 my-1">
          Sass
      </Badge>
        <Badge color="primary" className="mr-1 my-1">
          Angular
      </Badge>
        <Badge color="primary" className="mr-1 my-1">
          Vue
      </Badge>
        <Badge color="primary" className="mr-1 my-1">
          React
      </Badge>
        <Badge color="primary" className="mr-1 my-1">
          Redux
      </Badge>
        <Badge color="primary" className="mr-1 my-1">
          UI
      </Badge>
        <Badge color="primary" className="mr-1 my-1">
          UX
      </Badge>
      </CardBody>

      <hr className="my-0" />
      <CardBody>
        <CardTitle tag="h5">About</CardTitle>
        <ul className="list-unstyled mb-0">
          <li className="mb-1">
            <Home width={14} height={14} className="mr-1" /> Lives in{" "}
            <Link to="/dashboard/default">San Francisco, SA</Link>
          </li>

          <li className="mb-1">
            <Briefcase width={14} height={14} className="mr-1" /> Works at{" "}
            <Link to="/dashboard/default">GitHub</Link>
          </li>
          <li className="mb-1">
            <MapPin width={14} height={14} className="mr-1" /> From{" "}
            <Link to="/dashboard/default">Boston</Link>
          </li>
        </ul>
      </CardBody>
      <hr className="my-0" />
      <CardBody>
        <CardTitle tag="h5">Elsewhere</CardTitle>

        <ul className="list-unstyled mb-0">
          <li className="mb-1">
            <FontAwesomeIcon icon={faGlobe} fixedWidth className="mr-1" />
            <Link to="/dashboard/default">staciehall.co</Link>
          </li>
          <li className="mb-1">
            <FontAwesomeIcon icon={faTwitter} fixedWidth className="mr-1" />
            <Link to="/dashboard/default">Twitter</Link>
          </li>
          <li className="mb-1">
            <FontAwesomeIcon icon={faFacebook} fixedWidth className="mr-1" />
            <Link to="/dashboard/default">Facebook</Link>
          </li>
          <li className="mb-1">
            <FontAwesomeIcon icon={faInstagram} fixedWidth className="mr-1" />
            <Link to="/dashboard/default">Instagram</Link>
          </li>
          <li className="mb-1">
            <FontAwesomeIcon icon={faLinkedin} fixedWidth className="mr-1" />
            <Link to="/dashboard/default">LinkedIn</Link>
          </li>
        </ul>
      </CardBody>
    </Card>
  )
};

const Activities = () => (
  <Card>
    <CardHeader>
      <div className="card-actions float-right">
        <UncontrolledDropdown>
          <DropdownToggle tag="a">
            <MoreHorizontal />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardTitle tag="h5" className="mb-0">
        Activities
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Media>
        <img
          src={avatar5}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Ashley Briggs"
        />
        <Media body>
          <small className="float-right text-navy">5m ago</small>
          <strong>Ashley Briggs</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Today 7:51 pm</small>
          <br />
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar1}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Chris Wood"
        />
        <Media body>
          <small className="float-right text-navy">30m ago</small>
          <strong>Chris Wood</strong> posted something on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Today 7:21 pm</small>
          <div className="border text-sm text-muted p-2 mt-1">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante.
          </div>
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar4}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Stacie Hall"
        />
        <Media body>
          <small className="float-right text-navy">1h ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Today 6:35 pm</small>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar2}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Carl Jenkins"
        />
        <Media body>
          <small className="float-right text-navy">3h ago</small>
          <strong>Carl Jenkins</strong> posted two photos on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Today 5:12 pm</small>
          <div className="row no-gutters mt-1">
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash1} className="img-fluid pr-2" alt="Unsplash" />
            </div>
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash2} className="img-fluid pr-2" alt="Unsplash" />
            </div>
          </div>
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar2}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Carl Jenkins"
        />
        <Media body>
          <small className="float-right text-navy">1d ago</small>
          <strong>Carl Jenkins</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Yesterday 3:12 pm</small>
          <Media className="mt-1">
            <img
              src={avatar4}
              width="36"
              height="36"
              className="rounded-circle mr-2"
              alt="Stacie Hall"
            />
            <Media body className="pl-3">
              <div className="border text-sm text-muted p-2 mt-1">
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem. Maecenas nec odio et ante tincidunt tempus.
              </div>
            </Media>
          </Media>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar4}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Stacie Hall"
        />
        <Media body>
          <small className="float-right text-navy">1d ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Yesterday 2:43 pm</small>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar1}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Chris Wood"
        />
        <Media body>
          <small className="float-right text-navy">1d ago</small>
          <strong>Chris Wood</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Yesterdag 1:51 pm</small>
        </Media>
      </Media>

      <hr />
      <Button color="primary" block>
        Load more
      </Button>
    </CardBody>
  </Card>
);

const Profile = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Profile</h1>

    <Row>
      <Col md="4" xl="3">
        <ProfileDetails />
      </Col>
      <Col md="8" xl="9">
        <Activities />
      </Col>
    </Row>
  </Container>
);

export default Profile;
