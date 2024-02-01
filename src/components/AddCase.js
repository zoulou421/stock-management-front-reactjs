import React, { Component } from 'react';

class AddCase extends Component {

    /* constructor(props) {
         super(props);
         this.state = {
             ville: '',
             quartier: '',
             date: '',
             listeCas: []
         }
         this.handleChangeVille = this.handleChangeVille.bind(this);
         this.handleChangeQuartier = this.handleChangeQuartier.bind(this);
         this.handleChangeDate = this.handleChangeDate.bind(this);
 
         this.handleAdd = this.handleAdd(this);
     };
 
     handleChangeVille(event) {
         this.setState({
             ville: event.target.value
         });
     }
 
     handleChangeQuartier(event) {
         this.setState({
             quartier: event.target.value
         });
     }
     handleChangeDate(event) {
         this.setState({
             date: event.target.value
         });
     }
 
     handleAdd = (event) => {
         event.preventDefault();
         const requestOptions = {
             method: 'POST',
             headers: { 'Content-Type': 'Application/json' },
             body: JSON.stringify({ title: 'React Post Request Example' })
         };
         try {
             fetch("http://localhost:8080/corona/cas/save?ville=" + this.state.ville + "&quartier=" + this.state.quartier + "&datecas=" + this.state.date, requestOptions)
                 .then(result => result.json())
                 .then(result => {
                     this.setState({
                         ville: '',
                         quartier: '',
                         date: '',
                         listeCas: result
                     });
                     //console.log(result[0])
                     console.log(result[0])
                     console.log("Ville" + this.state.listeCas);
                 })
         } catch (error) {
             console.log("connexion API impossible" + error);
         }
 
     }*/

    render() {
        return (
            <div className="col-xl-6 col-lg-5">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center ">
                        <h6 className="m-0 font-weight-bold text-primary">Formulaire</h6>
                    </div>
                    <div className="card-body">
                        <form >
                            <div className="form-group col-xl-6">
                                <label className="control-label" htmlFor="nom">Ville</label>
                                <input type="text" name="ville" className="form-control" value="" />
                            </div>

                            <div className="form-group col-xl-6">
                                <label className="control-label" htmlFor="quartier">Quartier</label>
                                <input type="text" name="quartier" className="form-control" />
                            </div>

                            <div className="form-group col-xl-6">
                                <label className="control-label" htmlFor="date">Date</label>
                                <input type="date" name="date" className="form-control" />
                            </div>

                            <div className="form-group">
                                <input type="submit" name="envoyer" className="btn btn-success" id="Envoyer" value="Envoyer" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCase;

