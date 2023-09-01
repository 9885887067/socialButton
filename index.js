const Button = props => {
  const {className,buttonText}=props;
    return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  <div className="bg-container">
        <div className="social-button-container">
            <h1 className="heading">Social Button</h1>

        </div>
        <div className="button-container">
            <Button buttonText="Like" className="Like-button"></Button>
            <Button buttonText="comment" className="comment-button"></Button>
            <Button buttonText="share" className="share-button"></Button>

        </div>

    </div>
)

ReactDOM.render(element, document.getElementById('root'))
