import React from "react";
import ImgLocation from '../images/location.png';
import { $ } from 'react-jquery-plugin';
import {
	LoadScript,
} from "@react-google-maps/api";
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from "react-places-autocomplete";

import Geocode from "react-geocode";

Geocode.setApiKey('AIzaSyCXTkpYxVyKe1b4YEg2nwlszp1mme595ko');
Geocode.setLanguage("en");
Geocode.setRegion("in");
Geocode.enableDebug();


class Map extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			location: {
				lat: 20.5937,
				lng: 78.9629,
			},
			address: "",
			search: "",
			errors: {},
			viewInfo: false,
			copied: false,
			// markers: [],

			
		};
	

	}
	handleChange = (search) => {
		this.setState({location: this.state.location, search: search});
	};
	//console.log(newData)

	handleSelect = (newAddress) => {
		let fields = newAddress;
		let errors = {};
	
		 if (!fields) {
			
			errors["newAddress"] = "Field needs filling...";
			console.log(this.state.errors["newAddress"]);
		  }else{
		
			$('.box1').hide();
			$('.box2').show();
		  }
		  this.setState({ errors: errors });
		localStorage.setItem('newAddress', newAddress);
		$('.current-location').html(localStorage.getItem("newAddress"));
		this.setState({location: this.state.location, search: newAddress});
		geocodeByAddress(newAddress)
			.then((results) => getLatLng(results[0]))
			.then((latLng) => {
				this.setState({location: latLng, address: this.state.address});
				this.getAddress();
				
			})
			.catch((error) => console.error("Error", error));
	};

	getAddress = () => {
		Geocode.fromLatLng(this.state.location.lat, this.state.location.lng).then(
			(response) => {
				const address = response.results[0].formatted_address;
				this.setState({...this.state, address: address, copied: false});
			},
			(error) => {
				console.error(error);
			},
		);
	};

	onMarkerDragEnd = (e) => {
		const lat = e.latLng.lat();
		const lng = e.latLng.lng();
		this.setState({location: {lat, lng}, copied: false});
		this.getAddress();
	};

	componentDidMount() {
		if (!navigator.geolocation) {
			alert("Allow to track your loaction");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position);
				this.setState({
					location: {
						lat: position.coords.latitude,
						lng: position.coords.longitude,

					}
				
				});


				this.getAddress();
			},
			(error) => {
				alert(JSON.stringify(error));
			},
			{
				enableHighAccuracy: true,
				timeout: 20000,
				maximumAge: 1000,
			},
		);
		
	}
	componentWillMount() {
		this.getLocation();
	  }
	  getLocation() {
    //get the built in location variable
    const geolocation = navigator.geolocation;

    //get the location
    geolocation.getCurrentPosition(
        //if success, this is called using the position as the data variable
        (position) => {
            console.log( position.coords.latitude );
            console.log( position.coords.longitude );
			var method = 'GET';
			var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=true&key=AIzaSyCXTkpYxVyKe1b4YEg2nwlszp1mme595ko';
			var async = true;
			fetch(url)
			.then(response => response.json())
			.then(data => console.log(data));
            //Set the myLocation variable with set to true, latittude, and longitude
            const newLocation = {
              set : true,
              latitude : position.coords.latitude,
              longitude : position.coords.longitude
            }
            //  this.setState({ myLocation : newLocation });
        }, 
        //if failure, this is called with error variable message printed
        (error) => {
            console.log( error.message );
        },

    );
	
  }
	
	render() {
		return (
			<>
				<LoadScript googleMapsApiKey='AIzaSyCXTkpYxVyKe1b4YEg2nwlszp1mme595ko&libraries=places'>
					
					<PlacesAutocomplete
						value={this.state.search}
						onChange={this.handleChange}
						onSelect={this.handleSelect}
					>
						{({
							getInputProps,
							suggestions,
							getSuggestionItemProps,
							loading,
						}) => (
							<>
							<div className='App__input'>
								<div className="inner_wrappr">
								<input
									{...getInputProps({
										placeholder: "Search Places ...",
										className: "location-search-input",
									})}
								/>
								<svg width="30px" height="30px" viewBox="0 0 22 22" onClick={this.getLocation} version="1.1">
                                                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <g id="Outlined" transform="translate(-543.000000, -1749.000000)">
                                                            <g id="Device" transform="translate(100.000000, 1650.000000)">
                                                                <g id="Outlined-/-Device-/-gps_fixed" transform="translate(442.000000, 98.000000)">
                                                                    <g>
                                                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                                                        <path d="M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M20.94,11 C20.48,6.83 17.17,3.52 13,3.06 L13,1 L11,1 L11,3.06 C6.83,3.52 3.52,6.83 3.06,11 L1,11 L1,13 L3.06,13 C3.52,17.17 6.83,20.48 11,20.94 L11,23 L13,23 L13,20.94 C17.17,20.48 20.48,17.17 20.94,13 L23,13 L23,11 L20.94,11 Z M12,19 C8.13,19 5,15.87 5,12 C5,8.13 8.13,5 12,5 C15.87,5 19,8.13 19,12 C19,15.87 15.87,19 12,19 Z" id="🔹-Icon-Color" fill="#8f8f8f"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                </svg>
								</div>
								<div className='autocomplete-dropdown-container'>
									{loading && (
										<div style={{fontSize: "bold", textAlign: "center"}}>
											Loading...
										</div>
									)}
									{suggestions.map((suggestion, index) => {
										const className = suggestion.active
											? "suggestion-active"
											: "suggestion-item";
										const style = suggestion.active
											? {backgroundColor: "#fafafa", cursor: "pointer"}
											: {backgroundColor: "#222", cursor: "pointer"};
										return (
											
											<div
												key={index}
												{...getSuggestionItemProps(suggestion, {
													className,
													style,
												})}
											>
											<span><div className="location-img-wrapper"><img className="location-img" src={ImgLocation} /></div>{suggestion.description}</span>
												
											</div>
										);
									})}
								</div>
								
												
							</div>
							<span className="error-message">{this.state.errors["newAddress"]}</span>
							</>
							
						)}
					</PlacesAutocomplete>
					{/*
					 <div className='App__Address'>
						{this.state.address.length === 0
							? "This Site request a location Access,Enable it to get your current Location"
							: this.state.address}

						<div
							className='App__copy'
							onClick={() => {
								navigator.clipboard.writeText(this.state.address);
								this.setState({...this.state, copied: true});
							}}
						>
							{this.state.copied
								? "Address Copied to Clipboard"
								: "click here to copy"}
						</div>
					</div> 
				
							*/}
				</LoadScript>
			</>
		);
	}
}

export default Map;