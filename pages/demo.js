import React, { Component } from 'react';
import Link from 'next/link';

class DemoPage extends Component {
    constructor() {
        super();
        this.state = {
            textValue: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ textValue: event.target.value });
    }

    render() {

        const styles = {
            container: {
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            },
        }

        return (
            <div style={styles.container}>

                <h2>This is our second React/Next.js page</h2>
                <p>I'm a Component Class</p>

                <form>
                    <label>
                        TextInput:
                        <br />
                        <textarea value={this.state.textValue} onChange={this.handleChange} />
                    </label>
                </form>

                <br />
                <br />

                <p>{this.state.textValue}</p>


                <Link href="/firstpage">
                    <a>Go Back</a>
                </Link>
            </div>
        )
    }
}

export default DemoPage;