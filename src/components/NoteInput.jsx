import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charLimit: 50
        };

        this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
        this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleEventHandler(event) {
        const inputTitle = event.target.value;

        if (inputTitle.length <= this.state.charLimit) {
            this.setState({ title: inputTitle })
        }
    }

    onBodyEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);

        this.setState({ title: '', body: ''});
    }

    render() {
        const remainingChars = this.state.charLimit - this.state.title.length;
        
        return (
            <div className="note-input">
                <h2>➕ New Note</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Remaining text: {remainingChars}</p>
                    <input className="note-input__title" type="text" placeholder="Enter title ..." 
                        value={this.state.title} onChange={this.onTitleEventHandler} required />
                    <textarea className="note-input__body" type="text" placeholder="Write notes ..." 
                        value={this.state.body} onChange={this.onBodyEventHandler} required></textarea>
                    <button type="submit">Make</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;