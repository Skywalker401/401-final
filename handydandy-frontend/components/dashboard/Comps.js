export default function Comps(props){
    return (
        <>
            <label> Hvac: </label>
            <input type="checkbox" name="hvac" value={false} defaultChecked={false} onChange={props.handleComps} />

            <label>Electrical: </label>
            <input type="checkbox" name="electrical" value={false} defaultChecked={false} onChange={props.handleComps} />

            <label>Carpentry: </label>
            <input type="checkbox" name="carpentry" value={false} defaultChecked={false} onChange={props.handleComps} />

            <label>Plumbing: </label>
            <input type="checkbox" name="plumbing" value={false} defaultChecked={false}  onChange={props.handleComps} />
        </>
    )
}