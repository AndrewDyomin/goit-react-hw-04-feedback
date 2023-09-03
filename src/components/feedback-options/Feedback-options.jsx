

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return(
        <div>
            {options.map(option => (
                <button key={option} onClick={() => {onLeaveFeedback(`${option.toLowerCase()}`)}}>{option.charAt(0).toUpperCase() + option.slice(1)}</button>
            ))}
        </div>
    );
};