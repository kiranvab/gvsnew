import { Component } from "react";
import axios from 'axios';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results:[],
            unitdetails:[]
        }
    }

    componentDidMount() {
        axios.get("/search/all")
        .then(response =>{ 
            console.log(response)
            this.setState({results: response.data.siteLocations})
        })
        .catch(error => {
            console.log(error)
        })
        axios.get("/units/L079")
        .then(Myresponse =>{ 
            console.log(Myresponse)
            this.setState({unitdetails: Myresponse.data.units})
        })
        .catch(error => {
            console.log(error)
        })
    }
    handleClick = () =>{
        let zip = document.getElementById('zipCode').value
        alert("I'm working on"+zip);
        axios.get("/search/"+zip)
        .then(response =>{ 
            console.log(response)
            this.setState({results: response.data.siteLocations})
        })
        .catch(error => {
            console.log(error)
        })
    }

    getDetils = (locationCode)=>{
        alert("I'm working on"+locationCode);
        axios.get("/units/"+locationCode)
        .then(Myresponse =>{ 
            console.log(Myresponse)
            this.setState({unitdetails: Myresponse.data.units})
        })
        .catch(error => {
            console.log(error)
        })
    }
     
    render(){
        
        const { results, unitdetails } = this.state
        return(
            
            <div>
                <body className="green-skin">
            <script>
            
            </script>
                
               <div className="header header-light">
				<div className="container">
					<nav id="navigation" className="navigation navigation-landscape">
						<div className="nav-header">
							<a className="nav-brand" href="!#">
                            <img src={require('./logo.png').default} className="logo" alt="" />
							</a>
							<div className="nav-toggle"></div>
						</div>
						<div className="nav-menus-wrapper">
							<ul className="nav-menu">
								<li className="active"><a href="!#">Locations</a></li>
								<li><a href="!#">Storage Options<span className="submenu-indicator"></span></a>
									<ul className="nav-dropdown nav-submenu">
										<li><a href="!#">Storage Options</a></li>
										<li><a href="!#">Storage Options</a></li>
										<li><a href="!#">Storage Options</a></li>
										<li><a href="!#">Storage Options</a></li>
										<li><a href="!#">Storage Options</a></li>
									</ul>
								</li>
								<li><a href="!#">Storage Tools<span className="submenu-indicator"></span></a>
									<ul className="nav-dropdown nav-submenu">
										<li><a href="!#">Storage Tools</a></li>
										<li><a href="!#">Storage Tools</a></li>
										<li><a href="!#">Storage Tools</a></li>
										<li><a href="!#">Storage Tools</a></li>
										<li><a href="!#">Storage Tools</a></li>
									</ul>
								</li>
								<li><a href="!#">Company<span className="submenu-indicator"></span></a>
									<ul className="nav-dropdown nav-submenu">
										<li><a href="!#">Company Info </a></li>
										<li><a href="!#">Company Info </a></li>
										<li><a href="!#">Company Info </a></li>
										<li><a href="!#">Company Info </a></li>
										<li><a href="!#">Company Info </a></li>
									</ul>
								</li>
								<li><a href="!#">Contact Us</a></li>
								<li><a href="!#">FAQ's</a></li>
							</ul>
							<ul className="nav-menu nav-menu-social align-to-right">
								<li className="add-listing theme-bg cust-btn">
									<a href="!#">Pay Bill Now</a>
								</li>
							</ul>
						</div>
					</nav>
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
									<button  className="w3-bar-item w3-button w3-large"><i className="ti-close"></i></button>
								</div>
								

								
								<div className="sidebar-widgets">
									<div className="find">
										<h5 className="mb-3">Find the right storage:</h5>
										
									<div className="search">
										<div className="row">
										<div className="col-lg-9 col-md-9">
											<input type="text" className="form-control input-btm-bdr" id="zipCode" placeholder="Zip, City or address" />
										</div>
										<div className="col-lg-3 col-md-3 p-0">
											<button className="btn green-btn" onClick={this.handleClick}>Search</button>
										</div>
										</div>
									</div>
									</div>
									
									<div className="row other-locations m-0">
										<div className="col-md-12 col-lg-12">
										<h4 className="text-center">Other Locations Near You</h4>
									</div>
										<div className="col-lg-4 col-md-4 col-sm-4 p-2">
											<img src={require('../assets/img/L009_1 1.png').default} className="img-responsive img-bdr" alt=""/>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8">
											<h6>5656 N IH 35<br/>
											Austin, TX 78751</h6>
											<p>Distance: 0.56 miles</p>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-4 p-2">
											<img src={require('../assets/img/L009_1 1.png').default} className="img-responsive img-bdr" alt=""/>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8">
											<h6>5656 N IH 35<br/>
											Austin, TX 78751</h6>
											<p>Distance: 0.56 miles</p>
										</div>
									</div>
									
									
									
							</div>
							</div>

							<div className="simple-sidebar sm-sidebar" id="filter_search">							
							
								<div className="search-sidebar_header">
									<h4 className="ssh_heading">Close Filter</h4>
									<button className="w3-bar-item w3-button w3-large"><i className="ti-close"></i></button>
								</div>
								
								<div className="sidebar-widgets">
									
									<img src={require('../assets/img/special-offer.png').default} className="img-responsive img-bdr" alt=""/>
									
									</div>
							</div>
						
						<div className="col-lg-12 col-md-12">
							<div className="filter_search_opt">
								<a href="!#">Find the right storage:<i className="ml-2 ti-menu"></i></a>
							</div>
						</div>
						</div>
							
							<div className="col-lg-8 col-md-12 col-md-12 list-layout">
                            <h2 style={{color: "green", textAlign: "center"}}>Search results({results.length})</h2>
                   
                            <div className="storage-listing">
                            {
                        results.length ?
                        results.map(result => 
							<div className="row" key= {result.siteID}>
							
								<div className="col-lg-12 col-md-12">
									<div className="filter-fl">
										<h4>{result.name}</h4>
										<div className="btn-group custom-drop" >
										</div>
									</div>
								</div>
						
									<div className="col-lg-12 col-md-12" >
									<div className="property-listing property-1">
										<div className="listing-img-wrapper">
											<a href="!#">
												<img src={require('../assets/img/L009_1 1.png').default} className="img-fluid mx-auto" alt="" />
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
														<h6>Extra Space Storage</h6>
														<p>{result.content.address}<br/>{result.address2} </p>
														<button className="btn btn-block direction-btn" onClick={() => this.getDetils(result.locationCode)}> View Facility</button>
											<div className="listing-rating">
												<i className="ti-star filled"></i>
												<i className="ti-star filled"></i>
												<i className="ti-star filled"></i>
												<i className="ti-star filled"></i>
												<i className="ti-star"></i>
											</div>
											<p className="review-txt">86 Reviews</p>
													</div>
													<div className="col-md-7 col-lg-7 listing-content">
														<p>New Customer: <span className="phone">{result.phone}</span><br/>6:00am - 10:00pm </p>
														<p>Storage Gate Hours<br/>Mon-Sun : 6:00am - 10:00pm </p>
														<p>Storage Office Hours<br/>Mon-Fri : 9:30am - 10:00pm Mon-Fri : 9:30am - 10:00pm Mon-Fri : 9:30am - 10:00pm </p>
                                                        
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
                                </div>
                            </div>
                            
							) : 
                            null
                        }
                       </div>
								<div className="col-md-12 col-lg-12">
									<img src={require('../assets/css/img/Group 52.png').default} className="img-responsive" alt=""/>
								</div>
							
								<div className="col-md-12 col-lg-12 sizes-block">
									<h3>Most Popular Sizes</h3>
									<div className="row bdr-btm">										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={require('../assets/img/city-6.jpg').default} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">5'x10' LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>Climate Controlled</li>
												<li>Indoor</li>
												<li>Elevator Access</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>$483</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>$59</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
											<button className="btn btn-block cust-btn">Rent Now</button>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>

									<div className="row bdr-btm">										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={require('../assets/img/city-6.jpg').default} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">5'x10' LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>Climate Controlled</li>
												<li>Indoor</li>
												<li>Elevator Access</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>$483</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>$59</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
											<button className="btn btn-block cust-btn">Rent Now</button>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
								</div>
	
								<div className="col-md-12 col-lg-12 sizes-block">
									<h3>All Other Available Sizes</h3>
                                    <div className="detail-listing">
                                    {
                                    unitdetails.length ?
                                    unitdetails.map(detail => 
									<div className="row bdr-btm"key= {detail.firstAvailableUnitID} >										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={require('../assets/img/city-6.jpg').default} alt=""/>
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
											<h4>$483</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>${detail.webRate}</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
											<button className="btn btn-block cust-btn">Rent Now</button>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
                                    ) : 
                                    null
                                }
                                </div>
									{/* <div className="row bdr-btm">										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={require('../assets/img/city-6.jpg').default} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">5'x10' LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>Climate Controlled</li>
												<li>Indoor</li>
												<li>Elevator Access</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>$483</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>$59</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
											<button className="btn btn-block cust-btn">Rent Now</button>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
									<div className="row bdr-btm">										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={require('../assets/img/city-6.jpg').default} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">5'x10' LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>Climate Controlled</li>
												<li>Indoor</li>
												<li>Elevator Access</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>$483</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>$59</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
											<button className="btn btn-block cust-btn">Rent Now</button>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
									<div className="row bdr-btm">										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={require('../assets/img/city-6.jpg').default} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">5'x10' LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>Climate Controlled</li>
												<li>Indoor</li>
												<li>Elevator Access</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>$483</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>$59</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
											<button className="btn btn-block cust-btn">Rent Now</button>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
									<div className="row bdr-btm">										
										<div className="col-md-2 col-lg-2 p-2 text-center">
											<img className="img-responsive img-bdr" src={require('../assets/img/city-6.jpg').default} alt=""/>
											<a href="!#" className="size-help">Size Help</a>
										</div>
										<div className="col-md-1 col-lg-1 p-0 large-text">5'x10' LARGE</div>
										<div className="col-md-3 col-lg-3 p-0">
											<ul className="features-list-ul">
												<li>Climate Controlled</li>
												<li>Indoor</li>
												<li>Elevator Access</li>
											</ul>
										
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-disable-block">
											<p>IN-STORE</p>
											<h4>$483</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-1">
											<div className="price-enable-block">
											<p>WEB RATE</p>
											<h4>$59</h4>
										</div>
										</div>
										<div className="col-md-2 col-lg-2 p-0 mt-3">
											<button className="btn btn-block cust-btn">Rent Now</button>
											<p className="act-fast">Acc Fast : 1 Unit Left!</p>
										</div>
									</div>
								 */}</div>

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
            </body>    
            <a id="back2Top" className="top-scroll" title="Back to top" href="!#"><i className="ti-arrow-up"></i></a>	
            <script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/popper.min.js"></script>
		<script src="assets/js/bootstrap.min.js"></script>
		<script src="assets/js/jquery.magnific-popup.min.js"></script>
		<script src="assets/js/slick.js"></script>
		<script src="assets/js/slider-bg.js"></script>
		<script src="assets/js/imagesloaded.js"></script>
		{/* <script src="assets/js/custom.js"></script> */}
		<script src="assets/js/cl-switch.js"></script>
        
		
                    
            </div>
            
        )
    }
}

export  default SearchResult