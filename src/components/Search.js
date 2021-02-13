import { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SearchResult from "./SearchResult";
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SearchResults:[],
			SearchUnitdetails:[],
			SearchNearLocations:[],
			SearchFilterName :"",
            name : {},
            isOpen:false,
            Maplat:"",
            Maplng:""
		}
    }
    componentDidMount(props) {
        console.log("Params ID:" ,this.props.match.params.zip )
        this.setState({name: ''})
        axios.get("https://veheal-prod.herokuapp.com/gvs/api/search/"+this.props.match.params.zip)
		//axios.get("/search/"+this.props.match.params.zip)
        .then(response =>{ 
            console.log(response)
            console.log("Latitude:",response.data.siteLocations[0].latitude)
            console.log("Longitude:",response.data.siteLocations[0].longitude)
            this.setState({Maplat: response.data.siteLocations[0].latitude})
            this.setState({Maplng: response.data.siteLocations[0].longitude})
            this.setState({SearchResults: response.data.siteLocations})	
            var siteId = response.data.siteLocations[0].locationCode
            console.log("Site ID:", siteId)
            //axios.get("https://veheal-prod.herokuapp.com/gvs/api/units/"+siteId)
           axios.get("/units/"+siteId)
        .then(Myresponse =>{ 
            console.log(Myresponse)
            this.setState({SearchUnitdetails: Myresponse.data.units})
        })
        .catch(error => {
            console.log(error)
        })
        })
        .catch(error => {
            console.log(error)
        })
		
        this.setState({SearchFilterName: ""})
       
    }

    handleClick = () =>{
        let zip = document.getElementById('zipCode').value
        //alert("I'm working on"+zip);
		axios.get("https://veheal-prod.herokuapp.com/gvs/api/search/"+zip)
		//axios.get("/search/"+zip)
        .then(response =>{ 
			console.log(response)
			console.log(response.data.siteLocations[0].content.gvsnearsites)
			this.setState({SearchResults: response.data.siteLocations})
			this.setState({SearchNearLocations: response.data.siteLocations[0].content.gvsnearsites})
            this.setState({Maplat: response.data.siteLocations[0].latitude})
            this.setState({Maplng: response.data.siteLocations[0].longitude})
        })
        .catch(error => {
            console.log(error)
        })
	}

    getDetils = (locationCode)=>{
        //alert("I'm working on"+locationCode);
		axios.get("https://veheal-prod.herokuapp.com/gvs/api/units/"+locationCode)
		//axios.get("/units/"+locationCode)
        .then(Myresponse =>{ 
            console.log(Myresponse)
            this.setState({SearchUnitdetails: Myresponse.data.units})
        })
        .catch(error => {
            console.log(error)
        })
	}
	
	FilterText = (event) => {
		alert("file Value", event.target.value)
		//this.setState({fileterName: fname})
		this.setState({SearchFilterName: event.target.value})
	}
    ShowAll = ()=>{
    document.getElementById('WareHouseDiv').style.display = "none"
    document.getElementById('ClimateDiv').style.display = "none"
    document.getElementById('VehicleDiv').style.display = "none"
    document.getElementById('DriveupDiv').style.display = "none"
    document.getElementById('RegularDiv').style.display = "block"
    }
	DriveUp = () =>{
	document.getElementById('RegularDiv').style.display = "none"
    document.getElementById('WareHouseDiv').style.display = "none"
    document.getElementById('ClimateDiv').style.display = "none"
    document.getElementById('VehicleDiv').style.display = "none"
    document.getElementById('DriveupDiv').style.display = "block"
	}
	VehicleStore = () =>{
	document.getElementById('RegularDiv').style.display = "none"
    document.getElementById('DriveupDiv').style.display = "none"
    document.getElementById('WareHouseDiv').style.display = "none"
    document.getElementById('ClimateDiv').style.display = "none"
    document.getElementById('VehicleDiv').style.display = "block"
	}
	ClimateControll = () =>{
    document.getElementById('RegularDiv').style.display = "none"
    document.getElementById('DriveupDiv').style.display = "none"
    document.getElementById('VehicleDiv').style.display = "none"
    document.getElementById('WareHouseDiv').style.display = "none"
    document.getElementById('ClimateDiv').style.display = "block"
      
        
	}
	WarehouseOffice = () =>{
		document.getElementById('RegularDiv').style.display = "none"
    document.getElementById('DriveupDiv').style.display = "none"
    document.getElementById('VehicleDiv').style.display = "none"
    document.getElementById('ClimateDiv').style.display = "none"
    document.getElementById('WareHouseDiv').style.display = "block"
	}
    openFilterSearch = () => {
		document.getElementById("filter_search").style.display = "block"
	}
	closeFilterSearch=()=> {
		document.getElementById("filter_search").style.display = "none"
	}
    handleToggleOpen = () => {
        alert("hi")
        this.setState({isOpen: !this.state.isOpen})
    }
    render(){
        const { SearchResults, 
            SearchUnitdetails, 
            SearchNearLocations, 
            SearchFilterName,
            isOpen, 
            Maplat, 
            Maplng} = this.state
        return(
            <div className="green-skin">
                 <div className="header header-light">
                  <div className="container">
                  <Navbar bg="white" expand="lg">
  <Navbar.Brand href="/">
  <img src={require('./logo.png').default} className="logo" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
  <Nav.Link href="/">Locations</Nav.Link>
  <NavDropdown title="Storage Options" id="basic-nav-dropdown">
  <NavDropdown.Item href="!#">Why Choose Us</NavDropdown.Item>
  <NavDropdown.Item href="!#">Personal Storage</NavDropdown.Item>
  <NavDropdown.Item href="!#">Business Storage</NavDropdown.Item>
  <NavDropdown.Item href="!#">Vehicle Storage</NavDropdown.Item>
  <NavDropdown.Item href="!#">GVS Services</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title="Storage Tools" id="basic-nav-dropdown">
  <NavDropdown.Item href="!#">Size Guide</NavDropdown.Item>
  <NavDropdown.Item href="!#">Space Calculator</NavDropdown.Item>
  <NavDropdown.Item href="!#">Tips</NavDropdown.Item>
  <NavDropdown.Item href="!#">Packing Supplies</NavDropdown.Item>
  <NavDropdown.Item href="!#">FAQs</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title="Company" id="basic-nav-dropdown">
  <NavDropdown.Item href="!#">About Us</NavDropdown.Item>
  <NavDropdown.Item href="!#">Contact</NavDropdown.Item>
  <NavDropdown.Item href="!#">Careers</NavDropdown.Item>
  </NavDropdown>
  <Nav.Link href="#link">Contact Us</Nav.Link>
  <Nav.Link href="#link">FAQ's</Nav.Link>
  
  <Nav.Link href="!#" className="cust-btn" style={{color:"#fff",padding:"10px 15px"}}>Pay Bill Now</Nav.Link>
  </Nav>
  </Navbar.Collapse>
  </Navbar>
                  </div>
                  <div className="clearfix"></div>
                  </div>

                  <div className="clearfix"></div>

                  <div className="page-title">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">

						<span className="ipn-subtitle">Home / Find Sef Storage / Texas / Austin / 1000 E 50TH ST</span>

					</div>
				</div>
			</div>
		</div>

        <div className="container">

<div className="row">
    <div className="col-lg-12 col-md-12">
        <div className="row">

            <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="simple-sidebar sm-sidebar" id="filter_search"  style={{left:0}}>							

                    <div className="search-sidebar_header">
                        <h4 className="ssh_heading">Close Filter</h4>
                        <button onClick={this.closeFilterSearch} className="w3-bar-item w3-button w3-large"><i className="ti-close"></i></button>
                    </div>
                  
                    <div className="sidebar-widgets">
                        <div className="find">
                            <h5 className="mb-3">Find the right storage:</h5>
                            
                            <div className="search">
										<div className="row">
										<div className="col-lg-9 col-md-9">
											<input type="text" className="form-control input-btm-bdr" id="zipCode" placeholder="Zip, City or address" />
										</div>
										<div className="col-lg-3 col-md-3 p-2 text-right">
											<button className="btn green-btn" onClick={this.handleClick}>Search</button>
										</div>
										</div>
									</div>
                        </div>
                        
                        <div className="row other-locations m-0">
                            <div className="col-md-12 col-lg-12">
                                <h4 className="text-center">Other Locations Near You</h4>
                            </div>
                            {
                        SearchNearLocations.length ?
						SearchNearLocations.map(Slocation => 
                            <div className="row" key= {Slocation.siteLocation.siteID} style={{borderTop: "1px solid grey"}}>
                            <div className="col-lg-4 col-md-4 col-sm-4 p-2" >
											<img src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+Slocation.siteLocation.locationCode+'.png'} className="img-responsive img-bdr" alt=""/>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8">
											<h6>{Slocation.siteLocation.address1}<br/>
											{Slocation.siteLocation.city}</h6>
											<p style={{color: "green", textAlign: "center"}}>Distance: {Slocation.distance} miles</p>
										</div>
                            
                        </div>)
                        :null
                        }
                        
                </div>        
                    </div>
                </div>

                <div className="simple-sidebar sm-sidebar" id="filter_search"   style={{left:0}}>							

                    <div className="search-sidebar_header">
                        <h4 className="ssh_heading">Close Filter</h4>
                        <button onClick={this.closeFilterSearch} className="w3-bar-item w3-button w3-large"><i className="ti-close"></i></button>
                    </div>
                 
                    <div className="sidebar-widgets" style={{height:"600px", position:"relative"}}>
                        
                    <Map
          google={this.props.google}
          zoom={4}
          onClick={this.onMapClicked}
          initialCenter={{
            lat:  32.808739000,
            lng: -96.8298850000
          }}
        >
   {            SearchResults.length ?
                SearchResults.map((marker, index) =>(
                    <Marker
                        key={index}
                        id={index}
                        position={{lat: marker.latitude, lng: marker.longitude}}
                        icon={{
                            url: require('../assets/img/map-icon-new.png').default,
                        }}
                        onClick={() => this.handleToggleOpen()}
                        > 
                         {this.state.isOpen && (
              <InfoWindow onCloseClick={() => this.handleToggleClose()}>
                <span>Something</span>
              </InfoWindow>
            )}
                    </Marker>
                )) : null
            }
  
            </Map>
                        
                    </div>
                </div>
            
                <div className="col-lg-12 col-md-12">
                    <div className="filter_search_opt">
                        <a onClick={this.openFilterSearch}>Find the right storage:<i className="ml-2 ti-menu"></i></a>
                        
                    </div>
                </div>
            </div>

            <div className="col-lg-8 col-md-12 col-md-12 list-layout flex-second">
                <div className="row">

                    <div className="col-lg-12 col-md-12">
                            <h4>Extra Space Storage Facilities Near {this.props.match.params.zip }</h4>
                            <h6>Best Prices Near You</h6>
                    </div>
                   
                    <div className="col-lg-12 col-md-12" >
                            <div className="row">
                            {
                                    SearchUnitdetails.length ?
									SearchUnitdetails.sort((a, b) => a.webRate > b.webRate ? 1 : -1)
									.slice(0, 3)
									.map(SearchDetail => 
                                <div className="col-md-4 col-lg-4 p-2">
                                    <div className="box-bg">
                                        <h4>{SearchDetail.unitTypeName}</h4>
                                        <h6>{SearchDetail.unitSize}</h6>
                                        <div className="row">
                                        <div className="col-md-6 col-6 col-lg-6 p-1">
                                            <div className="price-disable-block">
                                            <p>IN-STORE</p>
                                            <h4>${(SearchDetail.webRate)*1.5}</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6 col-lg-6 p-1">
                                            <div className="price-enable-block">
                                            <p>WEBRATE</p>
                                            <h4>${SearchDetail.webRate}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>)
                                :null
                                }
                               
                            </div>
                            {/* <div className="tag-text">no credit card required</div>
                            <div className="tag-text">month-tomonth rent</div>
                            <div className="tag-text">unit size can be changed at move-in</div> */}
                    
                    </div>
                    </div>
                   
<div className="container">
<div className="row">
<div className="col-md-12 col-lg-12 p-1">
<Tabs>
    <TabList>
      <Tab>Storage Units</Tab>
      <Tab>Features</Tab>
      <Tab>What Fits Inside</Tab>      
    </TabList>

  <TabPanel>
    <div className="tab-pane fade active show" id="storage" role="tabpanel" aria-labelledby="home-tab">
     <div className="col-lg-12 col-md-12 p-0">
         <div className="row">
             <div className="col-md-6 col-lg-6">
                 <h4>Narrow Your Search</h4>
             </div>
             {/* <div className="col-md-6 col-lg-6 text-right text-12">
                 <p>Unit Size Guide</p>
             </div> */}
         </div>
         <div className="row">
                <div className="col-md-2 col-lg-3 col-6  mt-1">
                <button className="btn btn-block cust-btn"  onClick={this.ClimateControll}> Climate Controlled</button>
                </div>
                <div className="col-md-2 col-lg-3 col-6  mt-1">
                <button className="btn btn-block cust-btn"   onClick={this.VehicleStore}> Vehicle Storage</button>
                </div>
                <div className="col-md-2 col-lg-3 col-6   mt-1">
                <button className="btn btn-block cust-btn"   onClick={this.DriveUp}> Drive-Up Access  </button>
                </div> 
                <div className="col-md-2 col-lg-3 col-6  mt-1">
                <button className="btn btn-block cust-btn"   onClick={this.WarehouseOffice}> Warehouse/Office</button>
                </div>
                <p onClick={this.ShowAll} style={{marginLeft:"20px"}}>Clear All Filters</p>
             
        </div>     
         <div className="filter_search_opt" style={{height:"400px", position:"relative"}}>
                        
         <Map
          google={this.props.google}
          zoom={4}
          onClick={this.onMapClicked}
          initialCenter={{
            lat:  32.808739000,
            lng: -96.8298850000
          }}
        >
   {            SearchResults.length ?
                SearchResults.map((marker, index) =>(
                    <Marker
                        key={index}
                        id={index}
                        position={{lat: marker.latitude, lng: marker.longitude}}
                        icon={{
                            url: require('../assets/img/map-icon-new.png').default,
                        }}
                        label= {index+1}
                        > 
                    </Marker>
                )) : null
            }
  
            </Map>
                            
                        </div>
         <div className="row">
                    <div className="col-md-12 col-lg-12 sizes-block" >
                        <div className="row">
                        <div className="col-md-12 col-lg-12">
                        <h3>Select a Facility Below</h3>
                        </div>
                        {/* <div className="col-md-4 col-lg-4 text-right">
                            <div className="form-group row">
                            <label  className="col-sm-4 col-form-label">Sort by</label>
                            <div className="col-sm-8">
                            <select className="form-control select-style" id="sort">
                            
                            </select>
                            </div>
                            </div>
                         </div> */}
                         </div>
                         <div id="RegularDiv" >
                         {
                        SearchResults.length ?
						SearchResults
                        .map((SearchResult, index) => 
                        <div className="row bdr-btm">
                            <div className="col-lg-1 col-md-1 col-2 p-1"><div className="map-icon-text"><p>{index+1}</p></div></div>
                            <div className="col-lg-5 col-md-5 col-10 p-0">
                                <h6>Great Value Storage {SearchResult.content.city} {SearchResult.content.statecode}</h6>
                                <p className="lh-16">{SearchResult.content.address} {SearchResult.content.climate}</p>
                                <div className="listing-rating">
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                </div>
                                <p className="review-txt">{Math.floor(Math.random() * 200) + 200} Reviews</p>
                            </div>
                            <div className="col-lg-1 col-md-1 p-0">
                                
                            </div>
                            <div className="col-lg-3 col-md-3 P-0">
                                <div className="price-enable-block">
                                            <p>STARTING AT</p>
                                            <h4>$ 27</h4>
                                            </div>
                            </div>
                            <div className="col-md-2 col-lg-2 p-0 mt-3">
                            <a href={'/facility-result/'+SearchResult.locationCode} className="btn btn-block cust-btn">View Facility</a>
                            </div>
                        </div> 
                    )
                        :null
                        }
                        </div>
                    
                         <div id="ClimateDiv"  style={{display:"none"}}>
                         {
                        SearchResults.length ?
						SearchResults
                        .filter(filterresult => filterresult.content.climate == true)
                        .map((SearchResult, index) => 
                        <div className="row bdr-btm">
                            <div className="col-lg-1 col-md-1 col-3"><div className="map-icon-text"><p>{index+1}</p></div></div>
                            <div className="col-lg-5 col-md-5 p-0">
                                <h6>Great Value Storage {SearchResult.content.city} {SearchResult.content.statecode}</h6>
                                <p className="lh-16">{SearchResult.content.address} {SearchResult.content.climate}</p>
                                <div className="listing-rating">
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                </div>
                                <p className="review-txt">{Math.floor(Math.random() * 200) + 200} Reviews</p>
                            </div>
                            <div className="col-lg-1 col-md-1 p-0">
                                
                            </div>
                            <div className="col-lg-3 col-md-3 P-0">
                                <div className="price-enable-block">
                                            <p>STARTING AT</p>
                                            <h4>$ 27</h4>
                                            </div>
                            </div>
                            <div className="col-md-2 col-lg-2 p-0 mt-3">
                            <a href={'/facility-result/'+SearchResult.locationCode} className="btn btn-block cust-btn">View Facility</a>
                            </div>
                        </div> 
                    )
                        :null
                        }
                        </div>
                        <div id="DriveupDiv"  style={{display:"none"}}>
                         {
                        SearchResults.length ?
						SearchResults
                        .filter(filterresult => filterresult.content.driveup == true)
                        .map((SearchResult, index) => 
                        <div className="row bdr-btm">
                            <div className="col-lg-1 col-md-1 col-3"><div className="map-icon-text"><p>{index+1}</p></div></div>
                            <div className="col-lg-5 col-md-5 p-0">
                                <h6>Great Value Storage {SearchResult.content.city} {SearchResult.content.statecode}</h6>
                                <p className="lh-16">{SearchResult.content.address} {SearchResult.content.climate}</p>
                                <div className="listing-rating">
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                </div>
                                <p className="review-txt">{Math.floor(Math.random() * 200) + 200} Reviews</p>
                            </div>
                            <div className="col-lg-1 col-md-1 p-0">
                                
                            </div>
                            <div className="col-lg-3 col-md-3 P-0">
                                <div className="price-enable-block">
                                            <p>STARTING AT</p>
                                            <h4>$ 27</h4>
                                            </div>
                            </div>
                            <div className="col-md-2 col-lg-2 p-0 mt-3">
                            <a href={'/facility-result/'+SearchResult.locationCode} className="btn btn-block cust-btn">View Facility</a>
                            </div>
                        </div> 
                    )
                        :null
                        }
                        </div>
                        <div id="VehicleDiv"  style={{display:"none"}}>
                         {
                        SearchResults.length ?
						SearchResults
                        .filter(filterresult => filterresult.content.vehicle == true)
                        .map((SearchResult, index) => 
                        <div className="row bdr-btm">
                            <div className="col-lg-1 col-md-1 col-3"><div className="map-icon-text"><p>{index+1}</p></div></div>
                            <div className="col-lg-5 col-md-5 p-0">
                                <h6>Great Value Storage {SearchResult.content.city} {SearchResult.content.statecode}</h6>
                                <p className="lh-16">{SearchResult.content.address} {SearchResult.content.climate}</p>
                                <div className="listing-rating">
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                </div>
                                <p className="review-txt">{Math.floor(Math.random() * 200) + 200} Reviews</p>
                            </div>
                            <div className="col-lg-1 col-md-1 p-0">
                                
                            </div>
                            <div className="col-lg-3 col-md-3 P-0">
                                <div className="price-enable-block">
                                            <p>STARTING AT</p>
                                            <h4>$ 27</h4>
                                            </div>
                            </div>
                            <div className="col-md-2 col-lg-2 p-0 mt-3">
                            <a href={'/facility-result/'+SearchResult.locationCode} className="btn btn-block cust-btn">View Facility</a>
                            </div>
                        </div> 
                    )
                        :null
                        }
                        </div>
                        <div id="WareHouseDiv"  style={{display:"none"}}>
                         {
                        SearchResults.length ?
						SearchResults
                        .filter(filterresult => filterresult.content.warehouse_office == true)
                        .map((SearchResult, index) => 
                        <div className="row bdr-btm">
                            <div className="col-lg-1 col-md-1 col-3"><div className="map-icon-text"><p>{index+1}</p></div></div>
                            <div className="col-lg-5 col-md-5 p-0">
                                <h6>Great Value Storage {SearchResult.content.city} {SearchResult.content.statecode}</h6>
                                <p className="lh-16">{SearchResult.content.address} {SearchResult.content.climate}</p>
                                <div className="listing-rating">
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                <i className="fa fa-star filled"></i>
                                </div>
                                <p className="review-txt">{Math.floor(Math.random() * 200) + 200} Reviews</p>
                            </div>
                            <div className="col-lg-1 col-md-1 p-0">
                                
                            </div>
                            <div className="col-lg-3 col-md-3 P-0">
                                <div className="price-enable-block">
                                            <p>STARTING AT</p>
                                            <h4>$ 27</h4>
                                            </div>
                            </div>
                            <div className="col-md-2 col-lg-2 p-0 mt-3">
                            <a href={'/facility-result/'+SearchResult.locationCode} className="btn btn-block cust-btn">View Facility</a>
                            </div>
                        </div> 
                    )
                        :null
                        }
                        </div>
                    </div>
                    <p>*Excludes administrative and insurance fees</p>
                 
         </div>
     </div>
 </div>
</TabPanel>
<TabPanel>
    <div className="tab-pane fade show" id="features" role="tabpanel" aria-labelledby="profile-tab">
     <div className="row dark-bg">
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/car-icon.png').default} />
             <p>RV, Car, Boat Parking</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/covered-parking.png').default} />
             <p>Covered Parking</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/lock.png').default} />
             <p>Fenced & Gated</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/onsite-manager.png').default} />
             <p>Onsite Manager</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/security.png').default} />
             <p>Security Camera</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/delivery-truck.png').default} />
             <p>Delivery Acceptance</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/steering.png').default} />
             <p>Drive up Access</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/pay-online.png').default} />
             <p>Pay Online</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/box.png').default} />
             <p>Moving Supplies</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/calender.png').default} />
             <p>Month to Month Lease</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/lamp.png').default} />
             <p>Well Lit Property</p>
         </div>
         <div className="col-4 col-md-2 col-lg-2 p-0">
             <img src={require('../assets/img/protection.png').default} />
             <p>Protection Plan Available</p>
         </div>
     </div>
 </div>
    </TabPanel>
    <TabPanel>
    <h2> What fits inside </h2>
    <p className="small"> An equally important decision you'll need to make is choosing the size of your unit. Storage typically comes in the following standard sizes: </p>
    <Tabs>
    <TabList>
      <Tab>Tiny <br /> 5' x 5'</Tab>
      <Tab>Small <br /> 5' x 10'</Tab>
      <Tab>Medium <br /> 10' x 10'</Tab>
      <Tab>Large <br /> 510' x 15'</Tab>
      <Tab>Huge <br /> 10' x 20'</Tab>
      <Tab>Gigantic <br /> 10' x 30'</Tab>
    </TabList>
    <TabPanel>
    <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
<div className="tab-content">
<div className="row container-fluid-padding">
   <div className="col-md-4 pt-5"><img className="img-fluid" src={"https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/GVS_picsArtboard5@3x.png"} /></div>
   <div className="col-md-1"> </div>
   <div className="col-md-6 pt-5 align-top">
      <h5> Tiny - 5'x5' </h5>
      <h6>Walk-in Closet</h6>
      <p>This size unit yields 25 square feet of space. Although these 5x5 units are small, they are an excellent size to store all of your extra items, like garden tools, seasonal items, office supplies, or your miscellaneous boxes.</p>
   </div>
   <div className="col-md-1"> </div>
</div>
</div>
</div>
    </TabPanel>

    <TabPanel>
    <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
<div className="tab-content">
<div className="row container-fluid-padding">
   <div className="col-md-4 pt-5"><img className="img-fluid" src={"https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/GVS_picsArtboard6@3x.png"} /></div>
   <div className="col-md-1"> </div>
   <div className="col-md-6 pt-5">
      <h5> Small - 5'x10' </h5>
      <h6>Walk-in Closet</h6>
      <p>This size unit yields a total of 50 square feet of space, perfect for storing an entire bedroom or office. Are you looking to remodel a room or office? Now you can have the space to keep all of the contents during construction instead of clogging up other rooms!</p>
   </div>
   <div className="col-md-1"> </div>
</div>
</div>
</div>
    </TabPanel>

     <TabPanel>
     <div className="tab-pane fade show" id="contact" role="tabpanel" aria-labelledby="contact-tab">
<div className="tab-content">
<div className="row container-fluid-padding">
   <div className="col-md-4 pt-5"><img className="img-fluid" src={"https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/GVS_picsArtboard7@3x.png"} /></div>
   <div className="col-md-1"> </div>
   <div className="col-md-6 pt-5">
      <h5> Medium  10'x 10' </h5>
      <h6>Walk-in Closet</h6>
      <p>Did you just buy a new house and need to move out of your small apartment, but the house is still being built? This 100 square foot unit should hold all your items! It is ideal for storing an entire living room and two full bedrooms.</p>
   </div>
   <div className="col-md-1"> </div>
</div>
</div>
</div>
    </TabPanel>

     <TabPanel>
     <div className="tab-pane fade show" id="Large-10" role="tabpanel" aria-labelledby="contact-tab">
<div className="tab-content">
<div className="row container-fluid-padding">
   <div className="col-md-4 pt-5"><img className="img-fluid" src={"https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/GVS_picsArtboard8@3x.png"} /></div>
   <div className="col-md-1"> </div>
   <div className="col-md-6 pt-5">
      <h5> Large 10'x 15' </h5>
      <h6>Walk-in Closet</h6>
      <p>With 150 square feet of space, this large unit can typically store the content of 3 bedrooms. This space is also ideal for larger items like televisions, pianos, couches, or tables. </p>
   </div>
   <div className="col-md-1"> </div>
</div>
</div>
</div>
    </TabPanel>

     <TabPanel>
     <div className="tab-pane fade show" id="Huge-10" role="tabpanel" aria-labelledby="contact-tab">
<div className="tab-content">
<div className="row container-fluid-padding">
   <div className="col-md-4 pt-5"><img className="img-fluid" src={"https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/GVS_picsArtboard9@3x.png"} /></div>
   <div className="col-md-1"> </div>
   <div className="col-md-6 pt-5">
      <h5> Huge - 10'x20' </h5>
      <h6>Walk-in Closet</h6>
      <p>Are you in-between homes and need to store all of your family's belongings? This is the perfect space for you, capacitating roughly 5 bedrooms, and accommodating larger items like washers, dryers and refrigerators.</p>
   </div>
   <div className="col-md-1"> </div>
</div>
</div>
</div> 
	</TabPanel>

     <TabPanel>


     <div className="tab-pane fade show" id="Gigantic" role="tabpanel" aria-labelledby="Gigantic-tab">
<div className="tab-content">
<div className="row container-fluid-padding">
   <div className="col-md-4 pt-5"><img className="img-fluid" src={"https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/GVS_picsArtboard10@3x.png" }/></div>
   <div className="col-md-1"> </div>
   <div className="col-md-6 pt-5">
      <h5> Gigantic - 10'x30' </h5>
      <h6>Walk-in Closet</h6>
      <p>Now this is some serious storage! This unit has a whopping 300 square feet of space, ideal for a 5 to 7 bedroom house, easily storing entertainment centers, refrigerators, beds, couches, and more!</p>
   </div>
   <div className="col-md-1"> </div>
</div>
</div>
</div>
    </TabPanel>
</Tabs>
  </TabPanel>
</Tabs>
</div>
</div>
</div>
</div>
 </div>
 </div>
 </div>
    </div>

<section className="call-to-act-wrap">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">

					<div className="call-to-act">
						<div className="call-to-act-head text-center">
							<h2>Get directions starting from:</h2>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
    <footer className="dark-footer skin-dark-footer">
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h4>Locations</h4>
					</div>
					<div className="col-lg-3 col-md-3">
						<div className="footer-widget">
							<h4 className="widget-title">Texas (43)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Austin, TX (3)</a></li>
								<li><a href="!#">Baytown, TX (3)</a></li>
								<li><a href="!#">Canyon Lake, TX (3)</a></li>
								<li><a href="!#">Cedar park, TX (3)</a></li>
								<li><a href="!#">Dallas, TX (3)</a></li>
								<li><a href="!#">Deer park, TX (3)</a></li>
								<li><a href="!#">Fort Worth, TX (3)</a></li>
								<li><a href="!#">Houston, TX (3)</a></li>
								<li><a href="!#">La Porte, TX (3)</a></li>
								<li><a href="!#">Leander, TX (3)</a></li>
								<li><a href="!#">Mesquite, TX (3)</a></li>
								<li><a href="!#">Pasadena, TX (3)</a></li>
								<li><a href="!#">San Benito, TX (3)</a></li>
								<li><a href="!#">Texas City, TX (3)</a></li>
								<li><a href="!#">Tomball, TX (3)</a></li>

							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-3">
						<div className="footer-widget">
							<h4 className="widget-title">Tennessee (4)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Memphis, TN (4)</a></li>

							</ul>
							<h4 className="widget-title">Ohio (16)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Boardman, OH (1)</a></li>
								<li><a href="!#">Centerville, OH (1)</a></li>
								<li><a href="!#">Columbus, OH (1)</a></li>
								<li><a href="!#">Dayton, OH (1)</a></li>
								<li><a href="!#">Lewis Center, OH (1)</a></li>
								<li><a href="!#">Mansfield, OH (1)</a></li>
								<li><a href="!#">Mason, OH (1)</a></li>
								<li><a href="!#">Miamisburg, OH (1)</a></li>
								<li><a href="!#">Reynoldsburg, OH (1)</a></li>
								<li><a href="!#">Trotwood, OH (1)</a></li>
								<li><a href="!#">Worthington, OH (1)</a></li>
								<li><a href="!#">Youngstown, OH (1)</a></li>


							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-3">
						<div className="footer-widget">
							<h4 className="widget-title">New York (2)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Hyde Park, NY (1)</a></li>
								<li><a href="!#">Newburg, NY (1)</a></li>
							</ul>
							<h4 className="widget-title">Nevada (1)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Las Vegas, NV (1)</a></li>
							</ul>
							<h4 className="widget-title">Mississippi (3)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Brandon, MS (1)</a></li>
								<li><a href="!#">Flowood, MS (1)</a></li>
								<li><a href="!#">Hattiesburg, MS (1)</a></li>
							</ul>
							<h4 className="widget-title">Missouri (1)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Kansas City, MO (1)</a></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-3">
						<div className="footer-widget">
							<h4 className="widget-title">Indiana (1)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Indianapolis, IN (1)</a></li>
							</ul>
							<h4 className="widget-title">Illinois (2)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Champaign, IL (1)</a></li>
								<li><a href="!#">Urbana, IL (1)</a></li>
							</ul>
							<h4 className="widget-title">Colorado (2)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Aurora, CO (1)</a></li>
								<li><a href="!#">Commerce City, CO (1)</a></li>
							</ul>
							<h4 className="widget-title">California (1)</h4>
							<ul className="footer-menu">
								<li><a href="!#">Santa Clarita, CA (1)</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-12 col-md-12">
						<hr/>
					</div>
					<div className="footer-middle">
						<div className="col-lg-3 col-md-4">
							<div className="footer-widget">
								<h4 className="widget-title">STORAGE OPTIONS</h4>
								<ul className="footer-menu">
									<li><a href="!#">Car Storage</a></li>
									<li><a href="!#">Boat Storage</a></li>
									<li><a href="!#">RV Storage</a></li>
									<li><a href="!#">Business Storage</a></li>
									<li><a href="!#">Warehouse Storage and Office space</a></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-4">
							<div className="footer-widget">
								<h4 className="widget-title">STORAGE TOOLS</h4>
								<ul className="footer-menu">
									<li><a href="!#">Size Guide</a></li>
									<li><a href="!#">Space Calculator</a></li>
									<li><a href="!#">Self Stoarge Tips</a></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-4">
							<div className="footer-widget">
								<h4 className="widget-title">GREAT VALUE STORAGE</h4>
								<ul className="footer-menu">
									<li><a href="!#">Company Info</a></li>
									<li><a href="!#">About Us</a></li>
									<li><a href="!#">Contact Us</a></li>
									<li><a href="!#">Careers</a></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-4">
							<div className="footer-widget">
								<h4 className="widget-title">PAYMENT</h4>
								<button className="btn btn-block pay-bill-btn">Pay Bill Now</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div className="footer-bottom">
			<div className="container">
				<div className="row align-items-center">

					<div className="col-lg-6 col-md-6">
						<p className="mb-0">© 2019 , All Rights Reserved</p>
					</div>

					<div className="col-lg-6 col-md-6 text-right">

						<ul className="footer-bottom-social">
							<li><a href="!#"> Privacy Policy</a></li>
							<li><a href="!#"> Terms of service</a></li>
							<li><a href="!#"><i className="ti-facebook"></i></a></li>
							<li><a href="!#"><i className="ti-twitter"></i></a></li>
							<li><a href="!#"><i className="ti-instagram"></i></a></li>
							<li><a href="!#"><i className="ti-linkedin"></i></a></li>
						</ul>
					</div>

				</div>
			</div>
		</div>
	</footer>           
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB2lkpqqcRQMRK21-C-rXHelXObmXkbaeI")
  })(Search)