import Link from 'next/link';
interface iprops {
    url?:string;
    theme:string;
    className?:string;
    type?:string;
    children: React.ReactNode;

  }
function Button(props: iprops) {
  const InButton=()=>{
    return(
      <button className={`btn-1 btn-${props.theme} ${props.className}`}>
            {props.children}
        </button>
    )
  }
  return (
    <div>
      {props.url ? (
        <Link href={props.url}>
          <InButton />
          </Link>
      ) : (
        <InButton />
      )}      
    </div>
  )
}

export default Button
