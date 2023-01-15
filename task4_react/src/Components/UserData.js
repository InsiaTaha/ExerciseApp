import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Lottie from "lottie-react";
import diet from "./diet.json";
export default function UserData() {
    return (
        
        <div className="ContainerHead"style={{padding: "100px",display:"inline-flex"}}>
          
        <div className="FormGrid">
        
         <FormLayout/>
         </div>
        <div className="ImageGrid">
        <Lottie animationData={diet} loop={true} />
        </div>
        </div>
        
    )}

    const FormLayout=()=>{
        return(
            <>
            <div className="FormGridChild">
            <h2>Let's Track your Daily Exercise</h2>
         <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
          required
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
     
     
      <InputGroup className="mb-3">
      <InputGroup.Text>Activity Type</InputGroup.Text>
      <Form.Select aria-label="Default select example">
      <option>Select</option>
      <option value="Walk">Walk</option>
      <option value="Run">Run</option>
      <option value="Swim">Swim</option>
      <option value="Hike">Hike</option>
      <option value="BicycleRide">Bicycle Ride</option>
    </Form.Select>
      </InputGroup>
     
     
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Duration</InputGroup.Text>
        <Form.Control
          placeholder="Duration in mins"
          aria-label="Duration"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Date</InputGroup.Text>
      <Form.Group controlId="dob">

<Form.Control type="date" name="dob" placeholder="Date of Birth" />

</Form.Group>
</InputGroup>
<Button type="submit">Add Record</Button>
      
                </div>
                </>
        )

    }