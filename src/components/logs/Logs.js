import React, {  useEffect } from 'react';
import LogItem from './LogItem';
import { connect } from 'react-redux'
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types'
 import getLogs from '../../actions/logActions'


  const Logs = ({ log: { logs,loading }, getLogs}) => {

     
    useEffect(() => {

        getLogs();

        //eslint-disable-next-line

    },[]);

     

    if(loading || logs === null){
         <Preloader />
    }
    return (
       <ul className = "collection with-header">
           <li className="collection-header">
               <h4 className ="center">System Logs</h4>
           </li>

           {!loading || logs === null ? (<p className="center">No logs to Show .....</p>) :

            (
            logs.map(log => <LogItem log={log} key={log.id} />)
            )
           
           
           }

       </ul>
    )
}

Logs.propTypes = {

    log: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({

    log:state.log

})

export default connect(mapStateToProps,{ getLogs }) (Logs);