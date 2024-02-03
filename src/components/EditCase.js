import React, { Component } from 'react';

class EditCase extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            ville: '',
            quartier: '',
            date: '',
            listeCas: []
        }

        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeVille = this.handleChangeVille.bind(this);
        this.handleChangeQuartier = this.handleChangeQuartier.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);

    };
    handleChangeId(event) {
        this.setState({
            id: event.target.value
        });
    }

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

    componentDidMount() {
        try {
            fetch("http://localhost:8080/corona/cas/get/?id=" + this.props.match.params.id)
                .then(result => result.json())
                .then(result => {
                    this.setState({
                        id: result.id,
                        ville: result.ville,
                        quartier: result.quartier,
                        date: result.date,
                        listeCas: result
                    });
                });

        } catch (error) {
            console.log("Impossible to fetch" + error)
        }
    }
    handleAdd(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ title: 'React Get Request Example' })
        };
        try {
            fetch("http://localhost:8080/corona/cas/update/" + this.state.id + "?ville=" + this.state.ville + "&quartier=" + this.state.quartier + "&datecas=" + this.state.date, requestOptions)
                .then(result => result.json())
                .then(result => {
                    this.setState({
                        id: 0,
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

    }

    render() {
        return (
            <div className="col-xl-6 col-lg-5">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center ">
                        <h6 className="m-0 font-weight-bold text-primary">Formulaire</h6>
                    </div>
                    <div className="card-body">
                        {console.log(this.state.ville)}
                        <form onSubmit={this.handleAdd}>
                            <div className="form-group col-xl-6">
                                <label className="control-label" htmlFor="nom">Id</label>
                                <input type="text" name="id" readOnly="readOnly" className="form-control" value={this.state.id} onChange={this.handleChangeId} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label className="control-label" htmlFor="nom">Ville</label>
                                <input type="text" name="ville" className="form-control" value={this.state.ville} onChange={this.handleChangeVille} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label className="control-label" htmlFor="quartier">Quartier</label>
                                <input type="text" name="quartier" className="form-control" value={this.state.quartier} onChange={this.handleChangeQuartier} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label className="control-label" htmlFor="date">Date</label>
                                <input type="date" name="date" className="form-control" value={this.state.date} onChange={this.handleChangeDate} />
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

export default EditCase;

