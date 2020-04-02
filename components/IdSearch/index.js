import React from 'react';

class IdSearch extends React.Component {

    idSearchFormSubmit = () => {


        let id = document.querySelector('#idSearch').value;

        
        if(year.length === 0) {
            id = "0";
        }

        fetch("http://localhost:80/api/pokemon/id/" + id)
        .then((res) => { return res.json() })
        .then((processed) => {
            
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <input 
                    type="text" 
                    id="idSearch" 
                    onKeyUp={this.IdSearchFormSubmit} 
                />
            </div>
        );
    }

}

export default IdSearch;