export default function Comps(props){
    return (
        <>
            <label> Hvac: </label>
            <input type="radio" name="hvac" value='Hvac' defaultChecked={false} checked={props.isChecked} onChange={props.checkComps} />

            <label>Electrical: </label>
            <input type="radio" name="electrical" value='Electrical' defaultChecked={false} checked={props.isChecked} onChange={props.checkComps} />

            <label>Carpentry: </label>
            <input type="radio" name="carpentry" value='Carpentry' defaultChecked={false} checked={props.isChecked} onChange={props.checkComps} />

            <label>Plumbing: </label>
            <input type="radio" name="plumbing" value='Plumbing' defaultChecked={false} checked={props.isChecked} onChange={props.checkComps} />
        </>
    )
}