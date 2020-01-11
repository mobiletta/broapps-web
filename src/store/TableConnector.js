import { connect } from 'react-redux';
//import { startEditingProduct, startEditingSupplier } from "./stateActions";
import { deleteOdds, deleteBet } from './modelActionCreators';
import { ODDS, BETS } from './dataTypes';
import { withRouter } from 'react-router-dom';
import { getData } from '../webservice/RestMiddleware';
import { DataGetter } from '../DataGetter';

export const TableConnector = (dataType, presentationComponent) => {
  const mapStateToProps = (storeData, ownProps) => {
    if (dataType === ODDS) {
      return { odds: storeData.modelData[ODDS] };
    } else {
      return {
        suppliers: storeData.modelData[BETS].map(bet => ({
          ...bet,
          odds: bet.odds.map(id => storeData.modelData[ODDS].find(p => p.id === Number(id)) || id).map(val => val.name || val),
        })),
      };
    }
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getData: type => dispatch(getData(type)),
      deleteCallback: dataType === ODDS ? (...args) => dispatch(deleteOdds(...args)) : (...args) => dispatch(deleteBets(...args)),
    };
  };

  const mergeProps = (dataProps, functionProps, ownProps) => {
    let routedDispatchers = {
      editCallback: target => {
        ownProps.history.push(`/${dataType}/edit/${target.id}`);
      },
      deleteCallback: functionProps.deleteCallback,
      getData: functionProps.getData,
    };
    return Object.assign({}, dataProps, routedDispatchers, ownProps);
  };

  return withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(DataGetter(dataType, presentationComponent)));
};
