import React from 'react';
import Note from './components/noteItems';
import '../routes/notes.css'

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesForText: '',
            notes: [],
        }
    }

    update(notesForText) {
        this.setState({notesForText: notesForText.target.value})
    }

    add() {
        if(this.state.notesForText === '') {return}
        let noteArr = this.state.notes;
        noteArr.push(this.state.notesForText);
        this.setState({notesForText:''});
        this.textInput.focus()
    }


    delete(index) {
        let noteArr = this.state.notes;
        noteArr.splice(index, 1);
        this.setState({notes: noteArr});
        this.textInput.focus()
    }

    render() {

        let notes = this.state.notes.map((val, key) => {
            return <Note key={key} text={val} deleteMethod={() => this.delete(key)} />
        })

        return(
            <div>
                <h1 className='container' style={{textAlign: 'center'}}>Notes</h1>
                {notes}
                <div className='button' onClick={this.add.bind(this)}>+</div>
                <input type='text' 
                    ref={((input) => {this.textInput = input})} 
                    className='textInput' 
                    value={this.state.notesForText} 
                    onChange={notesForText => this.update(notesForText)}
                    />
            </div>
        );
    }
}

export default Notes;