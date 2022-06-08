import React from 'react';

class NoteList extends React.Component {

    render() {
        return(
            <div className='note col-sm-6' onClick={this.props.deleteMethod}>
               {this.props.text}
            </div>
        );
    }
}

export default NoteList;