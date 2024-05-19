
interface BlogCardProps{
    authorName : string;
    title : string;
    content : string;
    publishedDate : string
}

export const BlogCard = (   {
    authorName,
    title,
    content,
    publishedDate
   }:BlogCardProps) => {

    return (
    <div className="p-5 border-b border-slate-200 pb-4 mt-4">
        <div className="flex">
          <Avatar name={authorName} size={6}/>  
          <div className="font-extralight pl-2 flex justify-center">{authorName}</div> 
          <div className="flex justify-center flex-col pl-2">
            <Circle/>
          </div>
          <div className="pl-2 font-thin text-slate-500">
          {publishedDate}
          </div>
    </div>
       <div className="text-xl font-semibold">
        {title}
       </div>
       <div className="text-md font-thin">
          {/* Add logic to check  */}
        {content.slice(0,100)+"..."}
       </div>
       <div className="text-slate-500 text-sm font-thin">
        {`${Math.ceil(content.length/100)}`}
       </div>
     
    </div>
  )
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-200">

    </div>
}

 export function Avatar({name,size = 4}:{name:string , size :number}){
return<div className={`relative inline-flex items-center justify-center w-${size} h-${size}
overflow-hidden bg-gray-200 rounded-full `}>
    <span className="text-xs font-extraligt text-gray-600 dark:text-gray-300">
        {name[0]}
    </span>
</div>
}