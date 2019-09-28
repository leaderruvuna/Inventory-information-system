import React from 'react';
import "../css/tabs-css/report.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../font-awsome/fontawesome-free-5.9.0-web/css/all.min.css";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class Report extends React.Component{
    constructor(){
        super();
        this.state = {
            startDate: new Date()
        };
    }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    render(){
        return (
            <div className="brand-main">
            <table class="table table-borderless" style={{width:780}}>
                <thead>
                  <tr>
                    <th  scope="col" hidden="true"></th>
                    <th  scope="col" hidden="true"></th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="email" class="label-size">START DATE:</label></td>
                <td><form action="" class="navbar-form navbar-right report-form">
                   <div class="input-group">
                   <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />   
                   </div>
                   </form>
                </td> 
                <td><label for="email" class="label-size">END DATE:</label></td>
                <td><form action="" class="navbar-form navbar-right report-form">
                   <div class="input-group">
                   <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                   </div>
                   </form>
                </td> 
                </tr>
                <tr>
                <td></td>
                <td>
                <button  class="btn btn-primary btn-raised " >Show Report</button>
                </td>
                <td>
                <button  class="btn btn-warning btn-raised " >Cancel</button>
            </td>
        </tr>
        </tbody>
    </table>
                 
    <table id="dtBasicExample" class="table table-striped table-bordered table-report" cellspacing="0"  >
      <thead class="thead-dark">
        <tr>
          <th class="th-sm">Product description
          </th>
          <th class="th-sm">Qty
          </th>
          <th class="th-sm">Price
          </th>
          <th class="th-sm">Total price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
        </tr>
        <tr>
        </tr>
        <tr>
        </tr>
       </tbody>
    </table>
     </div>
        );
    }
}
 
export default Report;