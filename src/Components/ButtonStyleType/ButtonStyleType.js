function getButtonStyleType(styleType)
{
    const primaryButtonStyling="bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900";

    const secondaryButtonStyling="bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900";

    const warningButtonStyling="bg-yellow-500 border border-yellow-700 hover:bg-yellow-700 hover:border-yellow-900";

    const errorButtonStyling="bg-red-500 border border-red-700 hover:bg-red-700 hover:border-red-900";

    if(styleType==="Primary") return primaryButtonStyling;
    else if(styleType==="Secondary") return secondaryButtonStyling;
    else if(styleType==="Warning") return warningButtonStyling;
    else return errorButtonStyling;
}

export default getButtonStyleType;