export default function TextField(props) {
    console.log(props);
    return( 
    <>
        <label htmlFor=""> {props.inputLabel} </label>
        <input name= {props.inputName} type="text" />
        <div>{props.children}</div>
    </>
    )
}