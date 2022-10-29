export default function Comps(props){
    return (
        <div className="flex flex-col w-full">
            <div className="">
                <label className="p-2"> Hvac: </label>
                <input className="" type="checkbox" name="hvac" value={false} defaultChecked={false} onChange={props.handleComps} />
            </div>
            <div>
                <label>Electrical: </label>
                <input className="" type="checkbox" name="electrical" value={false} defaultChecked={false} onChange={props.handleComps} />
            </div>
            <div>
                <label>Carpentry: </label>
                <input type="checkbox" name="carpentry" value={false} defaultChecked={false} onChange={props.handleComps} />
            </div>
            <div>
                <label>Plumbing: </label>
                <input type="checkbox" name="plumbing" value={false} defaultChecked={false} onChange={props.handleComps} />
            </div>
        </div>
    )
}