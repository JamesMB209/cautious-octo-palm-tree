import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export default function TagButtons(props) {
    return (
        <>
            <ToggleButtonGroup type="checkbox" value={props.tags} onChange={(e) => props.onChange(e)}>
                <ToggleButton id={`tbg-btn-1` + props.id} value={"Home"} >
                    Home
                </ToggleButton>
                <ToggleButton id={`tbg-btn-2` + props.id} value={"Work"} >
                    Work
                </ToggleButton>
                <ToggleButton id={`tbg-btn-3` + props.id} value={"School"} >
                    School
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}