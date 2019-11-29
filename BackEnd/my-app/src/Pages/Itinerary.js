import React from 'react';
import { connect } from 'react-redux';
import { getItemsItinerary } from '../Redux/Actions/ItineraryActions';
import PropTypes from 'prop-types';


class Itinerary extends React.Component {

  static propTypes = {
		getItemsItinerary: PropTypes.func.isRequired,
		itinerary: PropTypes.object.isRequired,
  };
 componentDidMount() {
  let ciudad = this.props.match.params.ciudad;
  this.props.getItemsItinerary(ciudad);
    	}

  render() {
    const { itinerary } = this.props.itinerary;
    console.log(itinerary)
    return (
      <div>
        {itinerary.length >0 ? 
        <div>Hay</div> : 
        <div>No hay</div>}
      </div>
    );
	}
}

const mapStateToProps = state => ({
	itinerary: state.itemitinerary,
});

export default connect(mapStateToProps, { getItemsItinerary })(Itinerary);