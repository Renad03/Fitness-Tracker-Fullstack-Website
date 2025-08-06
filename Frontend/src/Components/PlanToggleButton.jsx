import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function PlanToggleButton() {
    const [value, setValue] = useState([1, 2]);

    const handleChange = (val) => setValue(val);

    return (
        <ToggleButtonGroup className="btn-group" type="checkbox" value={value} onChange={handleChange}>
            <ToggleButton className="btn m-2 bg-danger border-0 rounded" value={1}>
                monthly
            </ToggleButton>
            <ToggleButton className="btn m-2 bg-danger border-0 rounded" id="tbg-btn-2" value={2}>
                Annually
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default PlanToggleButton