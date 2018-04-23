import React from 'react';
import { connect } from 'react-redux';
import { func, shape, arrayOf, string, bool, any } from 'prop-types';
// import classNames from 'classNames'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as actions from '../actions';

export class Display extends React.Component {


  static propTypes = {
    sendDataAction: func.isRequired,
    statusCheckedAction: func.isRequired,
    data: arrayOf(any).isRequired,
    isLoading: bool.isRequired,
    isSuccess: bool.isRequired,
    error: shape({
      message: string
    })
  };
  static defaultProps = {
    error: null
  };
  // state= {
  //   search:""
  // }
  componentDidMount(){

  }
  studentDetails(studentDetails){
    return(
      <div className="studentDetails"> 
        <span><b>Name: </b>{studentDetails.studentName}</span>
        <span><b>BForm: </b>{studentDetails.bForm}</span>
        <span><b>DOB: </b>{studentDetails.dob}</span>
        <span><b>idMark: </b>{studentDetails.idMark? studentDetails.idMark:' - '}</span>
        <span>{studentDetails.hafiz? 'Hafiz':''}</span>
      </div>
      )
  }
  fatherDetails(fatherDetails){
    return(
      <div className="borderBottom"> 
        <h3>Father Details</h3>
        <p><b>Name:</b> {fatherDetails.fatherName}</p>
        <p><b>CNIC:</b> {fatherDetails.fatherCnic}</p>
        <p><b>Mobile:</b> {fatherDetails.fatherMobile}</p>
        <p><b>Address:</b> {fatherDetails.fatherAddress}</p>
      </div>
      )
  }
  classDetails(classDetails){
    return(
      <div className="borderBottom"> 
        <h3>Class Details</h3>
        <p><b>Admission Number: </b>{classDetails.admissionNumber}</p>
        <p><b>Computer Number: </b>{classDetails.computerNumber}</p>
        <p><b>Class: </b>{classDetails.selectClass}{classDetails.selectSection}</p>
        <p><b>Major Subject: </b>{classDetails.selectSubject}</p>
      </div>
      )
  }
  emergencyDetails(emergencyDetails){
    return(
      <div className="borderBottom"> 
        <h3>Emergency Details</h3>
        <p><b>Name: </b>{emergencyDetails.emergencyName}</p>
        <p><b>Relation: </b>{emergencyDetails.emergencyRelation}</p>
        <p><b>Contact: </b>{emergencyDetails.emergencyNumber}</p>
        <p><b>Medical Notes: </b>{emergencyDetails.medicalNotes}</p>
      </div>
      )
  }
  sendData(id){
    this.props.sendDataAction(id);
  }
  // searchData(){
  //   const result = this.props.data.find( v => v.studentHR.studentDetails.computerNumber == 1 );
  //   console.log(result)
  // }
  statusChecked(){
    // console.log('Props:', this.props)
    this.props.statusCheckedAction();
  }
  render() {
    console.log(this.props)
    // const { classes } = this.props;
    const { data, isLoading, error, isSuccess } = this.props;
    let received ;
    let status = "";
    let ok = "";
    const theme = createMuiTheme({
      overrides: {
        MuiButton: {
          // Name of the styleSheet
          root: {
            // Name of the rule
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
            margin: '10px 0',
            // border: '3px solid red'
            color: 'white',
            backgroundColor: 'red'
          },
        },
        MuiExpansionPanel: {
          // Name of the styleSheet
          root: {
            // Name of the rule
            // padding: '0 30px',
            boxShadow: '0 1px 1px 1px #eee',
            margin: '10px 0',
          },
        },
      },
    });

    const btn = createMuiTheme({
      overrides: {
        MuiButton: {
          root: {
            // Name of the rule
            // padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
            margin: '0 10px',
            // border: '3px solid red'
            color: 'white',
            backgroundColor: 'red'
          },
        },
      },
    });
    // const style = {
    //   alignItems: 'center'
    // };
    if(isSuccess){
      status = "Successfully Done."
      ok = <button className="btn" color="primary" classes={{root:'root'}} onClick={()=>this.statusChecked()}>OK</button>
    }
    if(isLoading){
      received = `isLoading`;
    } else if(error){
      received = error;
    }else{
      received = data.map(i =>{
          const studentDetails = this.studentDetails(i.studentHR.studentDetails);
          const fatherDetails = this.fatherDetails(i.studentHR.fatherDetails);
          const classDetails = this.classDetails(i.studentHR.classDetails);
          const emergencyDetails = this.emergencyDetails(i.studentHR.emergencyDetails);
          const mapdata = (
            <div className="border" key={i.computerNumber}>
              <div>
                <MuiThemeProvider theme={theme}>
                  <ExpansionPanel classes={{root: 'root'}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography color='primary'>{studentDetails}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        {fatherDetails}
                        {classDetails}
                        {emergencyDetails}
        
                        <Button 
                          variant="raised" 
                          color="secondary"
                          classes={{root:'root'}}
                          
                          id={i.computerNumber}
                          onClick={() => this.sendData(i)}
                        >Save
                        </Button>
                        {status}
                        {ok}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </MuiThemeProvider>  
                      
              </div>
            </div>
          );  
          return mapdata;
      });
    }
    return (
      <div className="app">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <TextField
                label="Student Name"
                placeholder="Enter Student Name"
                margin="normal"
                // onChange={(e)=>this.setState({search: e.target.value})}
              />
              <MuiThemeProvider theme={btn}>
                <Button 
                  variant="raised" 
                  color="primary"
                  classes={{root:'root'}}
                  // {onClick={() => this.searchData()}}
                >Search
                </Button>
              </MuiThemeProvider>  
            </Typography>
          </Toolbar>
        </AppBar>
        <div>{
          received
        }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ data, send }) {
  return {
    data: data.data,
    isLoading: data.isLoading,
    error: data.error,
    isSuccess: send.isSuccess
  };
}

export default connect(
  mapStateToProps, {sendDataAction: actions.sendDataAction, statusCheckedAction: actions.statusCheckedAction})(Display);