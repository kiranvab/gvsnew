import { render } from '@testing-library/react';
import { Component } from 'react';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/styles.css';
import { Button, Navbar,Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

class RentForm extends Component {
    render(){
        return(
    <div>
	<body>
	<div id="main-wrapper">
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
								<div className="col-lg-12 col-md-12 p-0" >
									<div className="property-listing property-1 bdr-grey">
										<div className="row">
										<div className="col-lg-4 col-md-4 form-sidebar">
										
										<div className="col-md-12 col-lg-12 lh-50">
											<h5>Facility Information</h5>
										<div className="row">
											<div className="col-md-6 col-lg-6">Location</div>
											<div className="col-md-6 col-lg-6 text-right"><a href="#" className="green-txt">Change Locations</a></div>
											<br />
											<div className="col-lg-12 col-md-12 bdr-btm">Great Value Storage - Aurora</div>
											<hr/>
											<br/>
											<div className="col-md-6 col-lg-6">UNIT SIZES</div>
											<div className="col-md-6 col-lg-6 text-right"><a href="#" className="green-txt">Change Unit</a></div>
											<br />
											<div className="col-lg-12 col-md-12 bdr-btm">5' X 5'</div>
											<hr/>
											<br/>
											<div className="col-md-12 col-lg-12">Monthly Rent</div>
											<div className="col-md-12 col-lg-12 bdr-btm">Online Rent <br/>
											<a href="!#" className="green-txt">$59</a></div>
											<hr/>
											<br/>
											<div className="col-md-12 col-lg-12">MOVE-IN-CHARGES</div>
											<div className="col-md-12 col-lg-12">
												<p className="text-12">
												First Monthly Rent Fee: $33.43 USD<br/>
												Administrative Fee: $24 USD<br/>
												First Month Insurance: $9.39 USD<br/><br/>
												Covers up to $2000 USD ($10.95 USD / monthly)
											</p>
											<h4 className="text-center"><a href="#" className="text-center green-txt">$66.82 USD</a></h4>
											</div>

										</div>
									</div>
										</div>
										<div className="col-md-8 col-lg-8 p-5">
											<h4>Rent your unit now!</h4>
											<hr/>
											<form className="mb-5 " method="post" name="frmRentNow">
												<div className="fill-rent-info">
													<div className="row pb-2">
														<div className="col-md-6">
															<div className="form-group"><label for="First Name">First Name <span className="text-danger"> * </span></label><input type="text" className="form-control false" placeholder="First Name" id="FirstName" name="FirstName" value=""/>
															</div></div>
															<div className="col-md-6">
																<div className="form-group"><label for="formGroupExampleInput2"> Last Name <span className="text-danger"> * </span> </label><input type="text" className="form-control false" placeholder="Last Name" name="LastName" id="LastName" value=""/></div></div></div><div className="row pb-2"><div className="col-md-6"><div className="form-group"><label for="First Name">Company </label><input type="text" className="form-control false" placeholder="Enter your company name" name="CompanyName" id="CompanyName" value=""/></div></div>
																<div className="col-md-6"><div className="form-group"><label for="formGroupExampleInput2"> Email <span className="text-danger"> * </span> </label><input type="text" className="form-control false" placeholder="Enter your email address" name="Email" id="Email" value=""/></div></div></div><div className="row pb-2">
																	<div className="col-md-6"><div className="form-group"><label for="First Name"> Phone <span className="text-danger"> * </span> </label><input className="form-control false" placeholder="Enter your phone number" name="PhoneNumber" id="PhoneNumber" type="text" value=""/></div></div><div className="col-md-6"><div className="form-group"><label for="formGroupExampleInput2"> Fax </label><input className="form-control false" placeholder="Enter your Fax number" name="FaxNumber" id="FaxNumber" type="text" value=""/></div></div><div className="form-check small"><label className="customcheck">  Text me my reservation details and important move-in information.<input type="checkbox" name="chkTextMeUpdate"/><span className="checkmark"></span></label></div></div><div className="row pb-2"><div className="col-md-6"><div className="form-group"><label for="First Name">Address <span className="text-danger"> * </span> </label><input type="text" className="form-control false" placeholder="Enter your address" name="Address" id="Address" value=""/></div></div><div className="col-md-6"><div className="form-group"><label for="formGroupExampleInput2"> City <span className="text-danger"> * </span> </label><input type="text" className="form-control false" placeholder="Enter your city" name="City" id="City" value=""/></div></div></div><div className="row pb-2"><div className="col-md-6"><div className="form-group"><label className="d-block" for="First Name">State / Province <span className="text-danger"> * </span></label><input type="text" className="form-control false" placeholder="Enter your state" name="State" id="State" value=""/></div></div></div><div className="row pb-2"><div className="col-md-6"><div className="form-group"><label className="d-block">Country / Region <span className="text-danger"> * </span> <span className="small pull-right"> (required if not in US &amp; Canada) </span> </label><input type="text" className="form-control false" placeholder="Enter your country" id="Country" name="Country" value=""/></div></div><div className="col-md-6"><div className="form-group"><label for="formGroupExampleInput2"> Postal / Zip <span className="text-danger"> * </span> </label><input className="form-control false" placeholder="Enter your Zip" name="Zip" id="Zip" type="text" value=""/></div></div></div></div><div className="clearfix"> </div><div className="rent-your-unit-footer "><div className="unit-submit  pl-4 pr-4"><p><input type="submit" className="btn btn-gvstore btn-success border-0 green-gradient float-right" value="Proceed to payment"/></p><br/></div></div></form>
										
                                        
                                        
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

<div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="registermodal" aria-hidden="true">
	<div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
		<div className="modal-content" id="registermodal">
			<span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span>
			<div className="modal-body">
				<h4 className="modal-header-title">Log In</h4>
				<div className="login-form">
					<form>

						<div className="form-group">
							<label>User Name</label>
							<div className="input-with-icon">
								<input type="text" className="form-control" placeholder="Username"/>
								<i className="ti-user"></i>
							</div>
						</div>

						<div className="form-group">
							<label>Password</label>
							<div className="input-with-icon">
								<input type="password" className="form-control" placeholder="*******"/>
								<i className="ti-unlock"></i>
							</div>
						</div>

						<div className="form-group">
							<button type="submit" className="btn btn-md full-width pop-login">Login</button>
						</div>

					</form>
				</div>
				<div className="modal-divider"><span>Or login via</span></div>
				<div className="social-login mb-3">
					<ul>
						<li><a href="!#" className="btn connect-fb"><i className="ti-facebook"></i>Facebook</a></li>
						<li><a href="!#" className="btn connect-twitter"><i className="ti-twitter"></i>Twitter</a></li>
					</ul>
				</div>
				<div className="text-center">
					<p className="mt-5"><a href="!#" className="link">Forgot password?</a></p>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="modal fade signup" id="signup" tabindex="-1" role="dialog" aria-labelledby="sign-up" aria-hidden="true">
	<div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
		<div className="modal-content" id="sign-up">
			<span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span>
			<div className="modal-body">
				<h4 className="modal-header-title">Sign Up</h4>
				<div className="login-form">
					<form>

						<div className="row">

							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<div className="input-with-icon">
										<input type="text" className="form-control" placeholder="Full Name"/>
										<i className="ti-user"></i>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<div className="input-with-icon">
										<input type="email" className="form-control" placeholder="Email"/>
										<i className="ti-email"></i>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<div className="input-with-icon">
										<input type="text" className="form-control" placeholder="Username"/>
										<i className="ti-user"></i>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<div className="input-with-icon">
										<input type="password" className="form-control" placeholder="*******"/>
										<i className="ti-unlock"></i>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<div className="input-with-icon">
										<input type="password" className="form-control" placeholder="123 546 5847"/>
										<i className="lni-phone-handset"></i>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<div className="input-with-icon">
										<select className="form-control">
											<option>As a Customer</option>
											<option>As a Agent</option>
											<option>As a Agency</option>
										</select>
										<i className="ti-briefcase"></i>
									</div>
								</div>
							</div>

						</div>

						<div className="form-group">
							<button type="submit" className="btn btn-md full-width pop-login">Sign Up</button>
						</div>

					</form>
				</div>
				<div className="modal-divider"><span>Or login via</span></div>
				<div className="social-login mb-3">
					<ul>
						<li><a href="!#" className="btn connect-fb"><i className="ti-facebook"></i>Facebook</a></li>
						<li><a href="!#" className="btn connect-twitter"><i className="ti-twitter"></i>Twitter</a></li>
					</ul>
				</div>
				<div className="text-center">
					<p className="mt-5"><i className="ti-user mr-1"></i>Already Have An Account? <a href="!#" className="link">Go For LogIn</a></p>
				</div>
			</div>
		</div>
	</div>
</div>

<a id="back2Top" className="top-scroll" title="Back to top" href="!#"><i className="ti-arrow-up"></i></a>
</div>
</body>
</div>


        )
    }
}
export  default RentForm