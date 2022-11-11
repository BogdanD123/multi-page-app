import Dropdown from "react-bootstrap/Dropdown";
import "./DropDownButton.css";
function DropDownButton() {
  return (
    <Dropdown className="d-inline mx-2; ">
      <Dropdown.Toggle variant="dark " id="dropdown-autoclose-true">
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="items" href="#">
          Jewerlly
        </Dropdown.Item>
        <Dropdown.Item className="items" href="#">
          Electronics
        </Dropdown.Item>
        <Dropdown.Item className="items" href="#">
          Mens's Clothes
        </Dropdown.Item>
        <Dropdown.Item className="items" href="#">
          Women's Clothes
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownButton;
