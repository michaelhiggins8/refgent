import "./MakeAccountEntry.css";
function MakeAccountEntry({value,setState}){



    




return (<>

<div className="makeAccountEntry">
<input placeholder={value} onChange={(e)=>setState(e.target.value)}></input>
</div>

</>)



}export default MakeAccountEntry;