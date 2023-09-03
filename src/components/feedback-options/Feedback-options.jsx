

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return(
        <div>
            {options.map(option => (
                <button key={option} onClick={() => {onLeaveFeedback(`${option.toLowerCase()}`)}}>{option}</button>
            ))}
        </div>
    );
};