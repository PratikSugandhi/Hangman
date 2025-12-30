import getButtonStyleType from "../ButtonStyleType/ButtonStyleType";
function Button({text, type="button", styleType, onClickHandler})
{
    return(
        <>
            <button
                type={type}
                onClick={onClickHandler}
                className={` px-4 py-2 ${getButtonStyleType(styleType)}  text-white rounded-md transition-all `}
            >
                {text}
            </button>
        </>
    )
}
export default Button;