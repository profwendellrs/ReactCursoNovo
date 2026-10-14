
//import { Ellipsis } from 'lucide-react';
import { CircleEllipsis } from 'lucide-react';

export function Tasks(props) {
   
    return (
    <div>
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow w-100">{props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
            <button className="bg-slate-400 text-white p-2 rounded-md w-full text-left">{task.title}</button>
            <button className="bg-slate-400 text-white p-2 rounded-md"><CircleEllipsis /></button>
            </li> 

        ))}</ul>
    </div>
    )
}