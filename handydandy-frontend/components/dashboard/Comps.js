export default function Comps(props){
    return (
        <>
            <label> Hvac: </label>
            <input type="checkbox" name="hvac" value='Hvac' defaultChecked={false} checked={props.isChecked} onChange={props.handleChange} />

            <label>Electrical: </label>
            <input type="checkbox" name="electrical" value='Electrical' defaultChecked={false} checked={props.isChecked} onChange={props.handleChange} />

            <label>Carpentry: </label>
            <input type="checkbox" name="carpentry" value='Carpentry' defaultChecked={false} checked={props.isChecked} onChange={props.handleChange} />

            <label>Plumbing: </label>
            <input type="checkbox" name="plumbing" value='Plumbing' defaultChecked={false} checked={props.isChecked} onChange={props.handleChange} />
        </>
    )
}