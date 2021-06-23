import Simpson from "../simphson/Simpson";

export default function Simphons ({items}) {
return (
    <div>
        <div className={'wrap'}>
            {
                items.map(value => <Simpson item={value}/>)
            }
        </div>
    </div>
   );
 }