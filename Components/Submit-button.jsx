function SubmitButton (props){
    const {message, bg, functionClick} = props
    return (
        <button onClick={functionClick} className={bg}>Submit Your Request{message}</button>
    )
}
export default SubmitButton;