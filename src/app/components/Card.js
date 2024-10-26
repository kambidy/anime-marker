
import Image from "next/legacy/image";
export default function Card(props){
return(
<div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={props.imageUrl} layout="responsive" width={420} height={250} alt="pic" className= "rounded-[10px]" />
       <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">
          {props.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
	episodes {props.episodes}
        </span>
             </div>
    </div>
);

}
