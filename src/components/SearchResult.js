
import { Component } from "react";
import axios from 'axios';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap'
class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results:{},
			unitdetails:[],
			nearLocations:[],
			fileterName :"",
			UnitContent:{},
			ZipValue:""
		}
    }
	
    componentDidMount(props) {
		console.log("web Params ID:",this.props.match.params.id )
		axios.get("https://veheal-prod.herokuapp.com/gvs/api/units/"+this.props.match.params.id)
		//axios.get("/units/"+this.props.match.params.id)
        .then(Myresponse =>{ 
            console.log(Myresponse)
			console.log("Site location Data:",Myresponse.data.siteLocation)
			console.log("Units Data:",Myresponse.data.units)
            this.setState({unitdetails: Myresponse.data.units})
			this.setState({results: Myresponse.data.siteLocation})
			this.setState({UnitContent: Myresponse.data.siteLocation.content})
        })
        .catch(error => {
            console.log(error)
        })
		this.setState({ZipValue:"all"})
    }

	handleLoginKeyUp = () =>{
		let zip = document.getElementById('zipCode').value
		this.setState({ZipValue:zip})
		}
	openFilterSearch = () => {
		document.getElementById("filter_search").style.display = "block"
	}
	closeFilterSearch=()=> {
		document.getElementById("filter_search").style.display = "none"
	}

    getDetils = (locationCode)=>{
        //alert("I'm working on"+locationCode);
		axios.get("https://veheal-prod.herokuapp.com/gvs/api/units/"+locationCode)
		//axios.get("/units/"+locationCode)
        .then(Myresponse =>{ 
            console.log(Myresponse)
            this.setState({unitdetails: Myresponse.data.units})
        })
        .catch(error => {
            console.log(error)
        })
	}
	
	FilterText = (event) => {
		console.log("file Value", event.target.value)
		if(event.target.value=="PriceL"){
			document.getElementById('PriceLDiv').style.display="block"
			document.getElementById('PriceHDiv').style.display="none"
			document.getElementById('SpaceLDiv').style.display="none"
			document.getElementById('SpaceHDiv').style.display="none"
		}
		if(event.target.value=="Price High to Low"){
			document.getElementById('PriceLDiv').style.display="none"
			document.getElementById('PriceHDiv').style.display="block"
			document.getElementById('SpaceLDiv').style.display="none"
			document.getElementById('SpaceHDiv').style.display="none"
		}
		if(event.target.value=="SpaceH"){
			document.getElementById('PriceLDiv').style.display="none"
			document.getElementById('PriceHDiv').style.display="none"
			document.getElementById('SpaceLDiv').style.display="block"
			document.getElementById('SpaceHDiv').style.display="none"
		}
		if(event.target.value=="Space High to Low"){
			document.getElementById('PriceLDiv').style.display="none"
			document.getElementById('PriceHDiv').style.display="none"
			document.getElementById('SpaceLDiv').style.display="none"
			document.getElementById('SpaceHDiv').style.display="block"
		}
	}
	DriveUp = () =>{
		
		this.setState({fileterName: "10X15"})
	}
	VehicleStore = () =>{
		
		this.setState({fileterName: "10X10"})
	}
	ClimateControll = () =>{
		this.setState({fileterName: "5X10"})
	}
	WarehouseOffice = () =>{
		this.setState({fileterName: "10X20"})
	}
	ShowAll = () =>{
		this.setState({fileterName: ""})
	}
     
    render(){
        
        const { results, unitdetails, nearLocations, fileterName, UnitContent, ZipValue} = this.state
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
							<div className="simple-sidebar sm-sidebar" id="filter_search">							
							
								<div className="search-sidebar_header">
									<h4 className="ssh_heading">Close Filter</h4>
									<button  className="w3-bar-item w3-button w3-large" onClick={this.closeFilterSearch}><i className="ti-close"></i></button>
								</div>
								

								
								<div className="sidebar-widgets">
									<div className="find">
										<h5 className="mb-3">Find the right storage:</h5>
										
									<div className="search">
										<div className="row">
										<div className="col-lg-9 col-md-9">
											<input type="text" className="form-control input-btm-bdr" id="zipCode" placeholder="Zip, City or address" onKeyUp={this.handleLoginKeyUp} />
										</div>
										<div className="col-lg-3 col-md-3 p-2 text-right">
										<a href={'/search-result/'+ZipValue} className="btn green-btn" >Search</a>
										</div>
										</div>
									</div>
									</div>
									
									<div className="row other-locations m-0 ">
										<div className="col-md-12 col-lg-12">
										<h4 className="text-center">Other Locations Near You</h4>
									</div>
									{
                        nearLocations.length ?
						nearLocations.map(location => 
							<div className="row" key= {location.siteLocation.siteID} style={{borderTop: "1px solid grey"}}>
										<div className="col-lg-4 col-md-4 col-sm-4 p-2" >
											<img src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+location.siteLocation.locationCode+'.png'} className="img-responsive img-bdr" alt=""/>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8">
											<h6>{location.siteLocation.address1}<br/>
											{location.siteLocation.city}</h6>
											<p style={{color: "green", textAlign: "center"}}>Distance: {location.distance} miles</p>
										</div>
										</div>
						) : 
						null
					}
									</div>
									
									
									
							</div>
							</div>

							<div className="simple-sidebar sm-sidebar" id="filter_search">							
							
								<div className="search-sidebar_header">
									<h4 className="ssh_heading">Close Filter</h4>
									<button className="w3-bar-item w3-button w3-large" style={{borderRadius:"50%"}}><i className="ti-close"></i></button>
								</div>
								
								<div className="sidebar-widgets">
									
									<img src={require('../assets/img/special-offer.png').default} className="img-responsive img-bdr" alt=""/>
									
									</div>
							</div>
						
						<div className="col-lg-12 col-md-12">
							<div className="filter_search_opt">
								<a onClick={this.openFilterSearch}>Find the right storage:<i className="ml-2 ti-menu"></i></a>
							</div>
						</div>
						</div>
							
							<div className="col-lg-8 col-md-12 col-md-12 list-layout">
                            <div className="storage-listing">
							<div className="row">
							
								<div className="col-lg-12 col-md-12">
									<div className="filter-fl">
										<h4></h4>
										<div className="btn-group custom-drop" >
										</div>
									</div>
								</div>
						
									<div className="col-lg-12 col-md-12" >
									<div className="property-listing property-1">
										<div className="listing-img-wrapper">
											<a href="!#">
												<img src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+results.locationCode+'.png'} className="img-fluid mx-auto" alt="" />
											</a>
											<div className="listing-like-top">
												<i className="ti-zoom-in"></i>
											</div>
											
										</div>
										
										<div className="listing-content">
										
											<div className="listing-detail-wrapper">
												<div className="col-md-12 col-lg-12 p-0">
												<div className="row">
													<div className="col-md-5 col-lg-5 right-bdr">
														<h6>{results.city} Self Storage</h6>
														<p>{UnitContent.address}</p>
											<div className="listing-rating">
												<i className="fa fa-star filled"></i>
												<i className="fa fa-star filled"></i>
												<i className="fa fa-star filled"></i>
												<i className="fa fa-star filled"></i>
												<i className="fa fa-star filled"></i>
											</div>
											<p className="review-txt">{Math.floor(Math.random() * 200) + 200} Reviews</p>
													</div>
													<div className="col-md-7 col-lg-7 listing-content">
														<p>New Customer: <span className="phone"><span style={{color:"green"}}>{results.phone}</span></span></p>
														<p>Storage Gate Hours<br/><span style={{color:"green"}}>{UnitContent.accesshours}</span> </p>
														<p>Storage Office Hours<br/><span style={{color:"green"}}>{UnitContent.officehours}</span></p>
                                                        
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
                                </div>
                            </div>
                       </div>
					   <div className="col-md-12 col-lg-12">
									<img src={require('../assets/css/img/Group 52.png').default} className="img-responsive" alt=""/>
						</div>
					   <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab" style={{marginTop:"5%"}}>
                 			<div className="col-lg-12 col-md-12 p-0">
                 	<div className="row">
                 		<div className="col-md-12 col-lg-12">
                 			<h4>Narrow Your Search</h4>
                 		</div>
                 		{/* <div className="col-md-6 col-lg-6 text-right text-12">
                 			<p>Unit Size Guide</p>
                 		</div> */}
                 	</div>
                 	<div className="row narrow-search-block">
    			{/* <div className="col-md-2 col-lg-2 p-1">
				    <select className="form-control select-style" id="Features">
				      <option>Features</option>
				      <option>Features</option>
				      <option>Features</option>
				      <option>Features</option>
				      <option>Features</option>
				    </select>
				</div>
				 		<div className="col-md-3 col-lg-3 p-1">
		                 	<select className="form-control select-style" id="vehicle-storage">
						      <option>Vehicle Storage</option>
						      <option>Vehicle Storage</option>
						      <option>Vehicle Storage</option>
						      <option>Vehicle Storage</option>
						      <option>Vehicle Storage</option>
						    </select>
                 		</div> */}
                 		<div className="col-md-3 col-lg-3"></div>
                 		<div className="col-md-4 col-lg-4 p-1 text-right">
							<div className="form-group row">
							{/* <label className="col-sm-4 col-form-label">Sort by</label> */}
							<div className="col-sm-8">
							<select className="form-control select-style" id="sort" onChange={this.FilterText} value={this.state.value}>
								<option value="">Sort By</option>
						      <option value="PriceL">Price Low to High</option>
						      <option vale="PriceH">Price High to Low</option>
							  <option value="SpaceH">Space Low to High</option>
						      <option vale="SpaceL">Space High to Low</option>
						    </select>
							</div>
							</div>
                 		</div>
                 	
                 		<div className="col-md-12 col-lg-12">
                 		<div className="row">
                 				<div className="col-md-12 col-lg-12">
                 					<div className="row">
									 <div className="col-md-4 col-lg-4 p-1 mt-2">
											<button className="btn btn-block cust-btn" onClick={this.ShowAll} >Show All</button>
										</div>
                 						<div className="col-md-2 col-lg-2 col-6 p-1 mt-2">
											<button className="btn btn-block cust-btn" onClick={this.ClimateControll} >Small</button>
										</div>
										<div className="col-md-2 col-lg-2 col-6 p-1  mt-2">
											<button className="btn btn-block cust-btn" onClick={this.VehicleStore}>Medium</button>
										</div>
										<div className="col-md-2 col-lg-2 col-6 p-1 mt-2">
											<button className="btn btn-block cust-btn" onClick={this.DriveUp}>Large</button>
										</div>
										<div className="col-md-2 col-lg-2 col-6 p-1 mt-2">
											<button className="btn btn-block cust-btn" onClick={this.WarehouseOffice}>Huge</button>
										</div>
                 					</div>
                 				</div>
                 		</div>
                 	</div>
					 </div>
					 </div>
					 </div>
							<div className="col-md-12 col-lg-12 ">
									<h3>Most Popular Sizes</h3>
									<div className="row bdr-btm">										
									<div className="detail-listing">
										<div id="PriceLDiv">
                                    {
                                    unitdetails.length ?
									unitdetails
									.sort((a, b) => a.webRate > b.webRate ? 1 : -1)
									.slice(0, 2)
									.map(detail => 
									<div className="row bdr-btm"key= {detail.firstAvailableUnitID} >										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+detail.locationCode+'.png'} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">{detail.unitSize} LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>{detail.unitTypeName}</li>
												<li>{detail.floor}</li>
												<li>{detail.entryLocation}</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 col-6 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>${(detail.webRate)*1.5}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 col-6 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>${detail.webRate}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
										<a href={'/rent-now/'+detail.firstAvailableUnitID} className="btn btn-block cust-btn">Rent Now</a>
											<p className="act-fast">Act Fast : 1 Unit Left!</p>
										</div>
									</div>
                                    ) : 
                                    null
                                }
								<div className="col-md-12 col-lg-12" style={{marginTop:"30px"}}>
									<h3>All Other Available Sizes</h3>
                                    <div className="detail-listing">
                                    {
                                    unitdetails.length ?
									unitdetails
									 .filter(detail=> {
										return detail.unitSize.toLowerCase().indexOf(fileterName.toLocaleLowerCase()) >=0
									}) 
									.map(detail => 
									<div className="row bdr-btm"key= {detail.firstAvailableUnitID} >										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+detail.locationCode+'.png'} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">{detail.unitSize} LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>{detail.unitTypeName}</li>
												<li>{detail.floor}</li>
												<li>{detail.entryLocation}</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 col-6 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>${(detail.webRate)*1.5}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 col-6  p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>${detail.webRate}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
										<a href={'/rent-now/'+detail.firstAvailableUnitID} className="btn btn-block cust-btn">Rent Now</a>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
                                    ) : 
                                    null
                                }
                                </div>
								</div>
								</div>
								<div id="PriceHDiv" style={{display:"none"}}>
                                    {
                                    unitdetails.length ?
									unitdetails
									.sort((a, b) => a.webRate > b.webRate ? -1 : 1)
									.slice(0, 2)
									.map(detail => 
									<div className="row bdr-btm"key= {detail.firstAvailableUnitID} >										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+detail.locationCode+'.png'} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">{detail.unitSize} LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>{detail.unitTypeName}</li>
												<li>{detail.floor}</li>
												<li>{detail.entryLocation}</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>${(detail.webRate)*1.5}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>${detail.webRate}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
										<a href={'/rent-now/'+detail.firstAvailableUnitID} className="btn btn-block cust-btn">Rent Now</a>
											<p className="act-fast">Act Fast : 1 Unit Left!</p>
										</div>
									</div>
                                    ) : 
                                    null
                                }
								<div className="col-md-12 col-lg-12" style={{marginTop:"30px"}}>
									<h3>All Other Available Sizes</h3>
                                    <div className="detail-listing">
                                    {
                                    unitdetails.length ?
									unitdetails
									 .filter(detail=> {
										return detail.unitSize.toLowerCase().indexOf(fileterName.toLocaleLowerCase()) >=0
									}) 
									.map(detail => 
									<div className="row bdr-btm"key= {detail.firstAvailableUnitID} >										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+detail.locationCode+'.png'} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">{detail.unitSize} LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>{detail.unitTypeName}</li>
												<li>{detail.floor}</li>
												<li>{detail.entryLocation}</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>${(detail.webRate)*1.5}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>${detail.webRate}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
										<a href={'/rent-now/'+detail.firstAvailableUnitID} className="btn btn-block cust-btn">Rent Now</a>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
                                    ) : 
                                    null
                                }
                                </div>
								</div>
								</div>
								<div id="SpaceHDiv" style={{display:"none"}}>
                                    {
                                    unitdetails.length ?
									unitdetails
									.sort((a, b) => a.unitWidth > b.unitWidth ? -1 : 1)
									.slice(0, 2)
									.map(detail => 
									<div className="row bdr-btm"key= {detail.firstAvailableUnitID} >										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+detail.locationCode+'.png'} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">{detail.unitSize} LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>{detail.unitTypeName}</li>
												<li>{detail.floor}</li>
												<li>{detail.entryLocation}</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>${(detail.webRate)*1.5}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>${detail.webRate}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
										<a href={'/rent-now/'+detail.firstAvailableUnitID} className="btn btn-block cust-btn">Rent Now</a>
											<p className="act-fast">Act Fast : 1 Unit Left!</p>
										</div>
									</div>
                                    ) : 
                                    null
                                }
								<div className="col-md-12 col-lg-12" style={{marginTop:"30px"}}>
									<h3>All Other Available Sizes</h3>
                                    <div className="detail-listing">
                                    {
                                    unitdetails.length ?
									unitdetails
									 .filter(detail=> {
										return detail.unitSize.toLowerCase().indexOf(fileterName.toLocaleLowerCase()) >=0
									}) 
									.map(detail => 
									<div className="row bdr-btm"key= {detail.firstAvailableUnitID} >										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+detail.locationCode+'.png'} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">{detail.unitSize} LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>{detail.unitTypeName}</li>
												<li>{detail.floor}</li>
												<li>{detail.entryLocation}</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>${(detail.webRate)*1.5}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>${detail.webRate}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
										<a href={'/rent-now/'+detail.firstAvailableUnitID} className="btn btn-block cust-btn">Rent Now</a>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
                                    ) : 
                                    null
                                }
                                </div>
								</div>
								</div>
								<div id="SpaceLDiv" style={{display:"none"}}>
                                    {
                                    unitdetails.length ?
									unitdetails
									.sort((a, b) => a.unitWidth > b.unitWidth ? 1 : -1)
									.slice(0, 2)
									.map(detail => 
									<div className="row bdr-btm"key= {detail.firstAvailableUnitID} >										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+detail.locationCode+'.png'} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">{detail.unitSize} LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>{detail.unitTypeName}</li>
												<li>{detail.floor}</li>
												<li>{detail.entryLocation}</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>${(detail.webRate)*1.5}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>${detail.webRate}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
										<a href={'/rent-now/'+detail.firstAvailableUnitID} className="btn btn-block cust-btn">Rent Now</a>
											<p className="act-fast">Act Fast : 1 Unit Left!</p>
										</div>
									</div>
                                    ) : 
                                    null
                                }
								<div className="col-md-12 col-lg-12" style={{marginTop:"30px"}}>
									<h3>All Other Available Sizes</h3>
                                    <div className="detail-listing">
                                    {
                                    unitdetails.length ?
									unitdetails
									 .filter(detail=> {
										return detail.unitSize.toLowerCase().indexOf(fileterName.toLocaleLowerCase()) >=0
									}) 
									.map(detail => 
									<div className="row bdr-btm"key= {detail.firstAvailableUnitID} >										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={'https://s3.us-east-2.amazonaws.com/gvstorage/prod/img/locations/'+detail.locationCode+'.png'} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">{detail.unitSize} LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>{detail.unitTypeName}</li>
												<li>{detail.floor}</li>
												<li>{detail.entryLocation}</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>${(detail.webRate)*1.5}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>${detail.webRate}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
										<a href={'/rent-now/'+detail.firstAvailableUnitID} className="btn btn-block cust-btn">Rent Now</a>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
                                    ) : 
                                    null
                                }
                                </div>
								</div>
								</div>
                                </div>
							</div>
							</div>
	
								

								<div className="col-lg-12 p-0">
									<div className="description-block">
										<h5>CONVENIENTLY LOCATED NEAR YOU</h5>
										<p>Located near the intersection of E 50th St and Harmon Ave off I-35, Extra Space Storage serves Austin residents near North Loop, Hyde Park, Rosedale, Highland, Windsor Park, Mueller, and more. Locals will recognize our facility across the interstate from Home Depot.</p>
										
										<h5>Affordable Storage Near The University of Texas at Austin</h5>
										<p>Are you a college student in Austin who needs a storage unit over the summer or while studying abroad? Extra Space Storage is about 2.7 miles from The University of Texas at Austin, so we're a great option!</p>

										<h5>A VERSATILE SELF STORAGE SOLUTION</h5>
										<p>Located near the intersection of E 50th St and Harmon Ave off I-35, Extra Space Storage serves Austin residents near North Loop, Hyde Park, Rosedale, Highland, Windsor Park, Mueller, and more. Locals will recognize our facility across the interstate from Home Depot.</p>

										<h5>Storage Units to Fit Your Needs</h5>
										<p>Our Austin storage facility has units as small as 25 square feet and as large as 300+ square feet, so it's easy to store items of all sizes. We also have units with first-floor access and elevator access!</p>

										<h5>Secure Storage</h5>
										<p>At Extra Space Storage, security is a top priority. Our E 50th St storage facility utilizes advanced security measures like video surveillance and electronic gate access to provide a safe storage environment and peace of mind for customers.</p>

										<h5>Climate-Controlled Storage</h5>
										<p>Need to store temperature-sensitive items? Climate control can help protect your belongings from extreme temperature changes. These units typically maintain a storage environment between 55 and 80 degrees throughout the year.</p>

										<h5>Other Amenities & Services</h5>
											<ul className="features-list-ul">
												<li>Extended access hours are standard with 24/7 access available - ask site manager for details</li>
												<li>Sturdy moving carts for heavy, bulky items</li>
												<li>Elevators for easy access to upper levels</li>
												<li>Se Habla Espanol</li>
											</ul>
										<br/>
										<h5>EXPERIENCE THE EXTRA SPACE DIFFERENCE</h5>
										<p>Not only does Extra Space Storage maintain a clean, secure facility at all times, but we also have a friendly, professional team dedicated to ensuring you're satisfied with your self storage experience! We go above and beyond to meet your needs, answer your questions, and help you get the perfect storage solution. Contact us today to reserve a storage unit in Austin!</p>

									</div>
								</div>

								<div className="col-md-12 col-lg-12 company-block p-0">
								Company<br/>
								Employees 1-10<br/>
								Payment Options: MasterCard / VISA / American Express / Discover / Check / Cash / Invoice<br/>
								Established Date: 1977<br/>
								Site Number: 8989
								</div>

							
						<div className="reviews-block">
	<h2>Reviews</h2>
	<p className="text-right">(20 of 86 Reviews)</p>
	<h3>Recent Customer Reviews About This Facility</h3>
	<hr/>
	
	<div className="row">
		<div className="col-md-6 col-lg-6">
			<div className="review-date">July 16, 2020</div>
			<div className="review-name">Gabe Cuneo</div>
			<div className="review-posted">Posted on Google</div>
		</div>
		<div className="col-md-6 col-lg-6 text-right">
			<p className="review-txt">Overall Rating</p>
			<div className="listing-rating">
				<i className="ti-star filled"></i>
				<i className="ti-star filled"></i>
				<i className="ti-star filled"></i>
				<i className="ti-star filled"></i>
				<i className="ti-star"></i>
			</div>
		</div>
		<div className="col-md-12 col-lg-12">
			<hr/>
			<p>I needed a storage unit for a couple of months. The process was extraordinarily easy; someone got back to me within a day of submitting an inquiry, and everything was done over the phone in 10 minutes. And, it's on a month-to-month basis, so when I am done, I'm not locked in! The unit is very secure, requiring a unique passcode to enter, and they give you plenty of keys to your individual unit, which is good if you need to allow access to someone else. I would definitely recommend to others.</p>
			<div className="review-response">
				<h4>Response from Extra Space Storage</h4>
				Hello, Gabe. Thanks for the positive feedback. We're so happy we have customers like you. Please call (806) 319-7610 if you have any questions.
			</div>
			<hr/>
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
					<div className="container-fluid">
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

export  default SearchResult