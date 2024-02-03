import React, { Component } from 'react'

export default class ListCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCas: []
        }
    }

    componentDidMount() {
        try {
            fetch("http://localhost:8080/corona/cas")
                .then(result => result.json())
                .then(result => {
                    this.setState({
                        listCas: result
                    });
                    console.log(this.state.listCas)
                });

        } catch (error) {
            console.log("Impossible to fetch" + error)
        }
    }

    render() {
        return (
            <div className="container-fluid" style={{ marginTop: 50 }}>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Ville</th>
                            <th>Quartier</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.listCas.map(function (cas) {
                                return (
                                    <tr>
                                        <td>{cas.id}</td>
                                        <td>{cas.ville}</td>
                                        <td>{cas.quartier}</td>
                                        <td>{cas.date}</td>
                                        <td><a href={"/cas/get/" + cas.id}></a>Edit</td>
                                        <td><a href={"/cas/delete/" + cas.id}></a>delete</td>
                                    </tr>

                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
