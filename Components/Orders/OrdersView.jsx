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
      <div className='order-main'>
        <div className='d-flex order-header'>
          <div className='w-50 p-2'>
            <h3 className='m-0'>Orders</h3>
            <p className='m-0'>My Orders</p>
          </div>
          <div className='w-50 p-2 d-flex align-items-center justify-content-end'>
            <div className='icon-box mr-3'>
              <FaList className='icon-color' />
            </div>
            <div className='icon-box'>
              <FaList className='icon-color' />
            </div>
            <div className='icon-box'>
              <FaList className='icon-color' />
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end align-items-center filter-main'>
          <div>
            <InputGroup className='btn-search'>
              <InputGroup.Text id='inputGroup-sizing-default'>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                className='input-search'
                aria-label='Default'
                aria-describedby='inputGroup-sizing-default'
                placeholder='Search'
              />
            </InputGroup>
          </div>
          <div className='mx-3'>
            <DropdownButton
              id='dropdown-basic-button'
              className='btn-dropdown'
              title='Dropdown button'>
              <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <Button className='btn-download'>
              <FaDownload /> Download
            </Button>
          </div>
        </div>
        <div>
          <Table responsive>
            <thead className='tbl-head'>
              <tr>
                <th className='border-left-set'>Order ID</th>
                <th>Item Name</th>
                <th>Deliver To</th>
                <th>Order Date</th>
                <th>Transporter</th>
                <th className='border-right-set'>Status</th>
              </tr>
            </thead>
            <tbody className='tbl-body'>
              <tr>
                <td className='first-tab'>1</td>
                {Array.from({ length: 4 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
                <td>
                  <Button variant='outline-primary' className='btn-pending'>
                    Pending
                  </Button>
                </td>
              </tr>
              <tr>
                <td className='first-tab'>2</td>
                {Array.from({ length: 4 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
                <td>
                  {" "}
                  <Button variant='outline-warning' className='btn-recieved'>
                    Recieved
                  </Button>
                </td>
              </tr>
              <tr>
                <td className='first-tab'>3</td>
                {Array.from({ length: 4 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
                <td>
                  <Button variant='outline-danger' className='btn-enroute'>
                    en route
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default OrdersView;
