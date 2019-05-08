import * as React from 'react';

export class FlexiComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    renderData = (data, eleArr = []) => {
        let map = {
            DropDown: this.renderDropDown,
            TextField: this.renderText
        };
        data.items.forEach((item) => {
            eleArr.push(map[item.type](item));
            if (item.hasOwnProperty('children')) {
                this.renderData(item.children, eleArr);
            }
        })
        return eleArr;
    }

    renderText = (data) => {
        return (
            <div key={data.name}>
                <label>{data.name}</label>
                <input type='text' name={data.name} onChange={this.onChange} />
            </div>
        )
    }

    renderDropDown = (data) => {
        return (
            <div key={data.name}>
                <label>{data.name}</label>
                <select name={data.name} onChange={this.onChange}>
                    {data.values.map((val, index) => <option key={index} value={val}>{val}</option>)}
                </select>
            </div>
        );
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                {this.renderData(this.props.config)}
                <button type='submit' onClick={() => this.props.onSubmit(this.state)}>Submit</button>
            </div>
        )
    }
}