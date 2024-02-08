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
                            this.state.listCas.map(function (cas, i) {
                                return (
                                    <tr key={i}>
                                        <td>{cas.id}</td>
                                        <td>{cas.ville}</td>
                                        <td>{cas.quartier}</td>
                                        <td>{cas.date}</td>
                                        <td><a href={"/cas/get/" + cas.id}>Edit</a></td>
                                        <td><a href={"/cas/delete/" + cas.id}>Delete</a></td>
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
