import React, { Component } from 'react'
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class CreateEvent extends Component {
    state = {
        organization: {
            name: "HPI Polska"
        },
        event: {
            title: "",
            content: "",
            startDate: new Date('2014-08-18T21:11:54'),
            endDate: new Date('2014-08-18T21:11:54')
        }
    }
    
    handleDateChange = (date) => {
      console.log(date);
    }

    handleSubmit = () => {
        console.log("Event created");
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create new event in organization {this.state.organization.name}
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={this.state.event.endDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={this.state.event.startDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    </MuiPickersUtilsProvider>
                    

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-1">Create</button>
                    </div>
                </form>
            </div>


        );
    }
}

export default CreateEvent;