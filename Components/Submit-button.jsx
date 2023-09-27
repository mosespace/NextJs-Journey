export default function SubmitButton(props) {
    const { message, bg, button2, functionClick } = props;
    const buttonClassName = `${bg} ${button2}`; // I Combined the bg and button2 class names

    return (
        <button onClick={functionClick} className={buttonClassName}>
            Convert{message}
        </button>
    );
}
