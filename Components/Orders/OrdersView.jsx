import styles from "./OrdersView.module.scss";
import { FaList, FaDownload, FaSearch } from "react-icons/fa";

import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Table,
} from "react-bootstrap";
const OrdersView = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <h3>Orders</h3>
          <p>My Orders</p>
        </div>
        <div>
          <div className="d-flex">
            <div>
              <FaList />
            </div>
            <div>
              <FaList />
            </div>
            <div>
              <FaList />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search"
            />
          </InputGroup>
        </div>
        <div>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <Button>
            <FaDownload /> Download
          </Button>
        </div>
      </div>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item Name</th>
              <th>Deliver To</th>
              <th>Order Date</th>
              <th>Transporter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td>
                <Button variant="outline-primary">Pending</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td>
                {" "}
                <Button variant="outline-warning">en route</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td>
                <Button variant="outline-danger">Wrong</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default OrdersView;
