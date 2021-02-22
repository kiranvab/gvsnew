import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/styles.css';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
class Home extends Component {
	constructor(props) {
        super(props)
        this.state = {
            ZipValue: "",
		}
	}
	componentDidMount(props) {
            this.setState({ZipValue:"all"})
       
    }
	handleLoginKeyUp = () =>{
		
			let zip = document.getElementById('zipCode').value
			this.setState({ZipValue:zip})
		  
	
		}
    render(){
       const { ZipValue } = this.state
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
		  };
        return(
            <div className="green-skin">
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
<NavDropdown title="Locations" id="basic-nav-dropdown">
<NavDropdown.Item href={'/search-result/Texas'} style={{background:"#216121", color:"white"}}>Texas</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/Tennesse'} style={{background:"#216121", color:"white"}}>Tennesse</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/Ohio'} style={{background:"#216121", color:"white"}}>Ohio</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/New York'} style={{background:"#216121", color:"white"}}>New York</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/Nevada'} style={{background:"#216121", color:"white"}}>Nevada</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/Mississippi'} style={{background:"#216121", color:"white"}}>Mississippi</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/Missouri'}style={{background:"#216121", color:"white"}}>Missouri</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/Indiana'} style={{background:"#216121", color:"white"}}>Indiana</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/Illinois'} style={{background:"#216121", color:"white"}}>Illinois</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/Colorado'} style={{background:"#216121", color:"white"}}>Colorado</NavDropdown.Item>
<NavDropdown.Item href={'/search-result/California'} style={{background:"#216121", color:"white"}}>California</NavDropdown.Item>
</NavDropdown>
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

			<div className="image-cover hero-banner home-banner">
				<div className="container" style={{position: "relative", top: "100px"}}>

					<h1 className="big-header-capt mb-0" style={{color:"white"}}>Reserve and Rent from Home</h1>
					<p className="text-center mb-5" style={{color:"white"}}>Extra savings! See Facilities Details</p>
					
					<div className="full-search-2 eclip-search italian-search hero-search-radius">
						<div className="hero-search-content">
							
							<div className="row">

								<div className="col-lg-9 col-md-9 col-sm-12 small-padd">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control b-r" id="zipCode"  placeholder="Enter Address, City, Zip Code"onKeyUp={this.handleLoginKeyUp}/>
											<i className="ti-location-pin"></i>
										</div>
									</div>
								</div>
								
								<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
									<div className="form-group">
									
										<a href={'/search-result/'+ZipValue} className="btn search-btn">Find Storage  <i className="ti-arrow-right"></i></a>
									
										
									</div>
								</div>

								
							</div>
							
						</div>

					</div>
					<div className="row quick-search">
						<div className="col-md-2 col-lg-2 col-12 p-0">
							<strong>Qucik Search </strong>
						</div>
						<div className="col-md-10 col-lg-10">
							<div className="row">
								<div className="col-md-2 col-lg-2 col-6 p-0">
									<a href={'/search-result/newyork'}>NewYork</a>
								</div>
								<div className="col-md-2 col-lg-2 col-6 p-0">
									<a href={'/search-result/sanfransisco'}>San Francisco</a>
								</div>
								<div className="col-md-2 col-lg-2 col-6 p-0">
									<a href={'/search-result/chicago'}>Chicago</a>
								</div>
								<div className="col-md-2 col-lg-2 col-6 p-0">
									<a href={'/search-result/losangeles'}>Los Angeles</a>
								</div>
								<div className="col-md-2 col-lg-2 col-6 p-0">
									<a href={'/search-result/miami'}>Miami</a>
								</div>
								<div className="col-md-2 col-lg-2 col-6 p-0">
									<a href={'/search-result/austin'}>Austin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4">
							<div className="info-img">
								<img src={require('../assets/img/img1.png').default} className="img-responsive img-bdr-50" alt=""/>
							</div>
							<div className="text-center p-5">
								<h5 className="home-h1">Choose the right size storage unit for you</h5>
								<p>Use our custom tools to find the best unit size for you</p>
								<button className="btn direction-btn"> Find your unit size now</button>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="info-img">
								<img src={require('../assets/img/stairs.png').default} className="img-responsive img-bdr-50" alt=""/>
							</div>
							<div className="text-center p-5">
								<h5 className="home-h1">New to Storage?</h5>
								<p>Extra Space Storage makes it quick and easy to get started</p>
								<button className="btn direction-btn"> Find your unit size now</button>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="info-img">
								<img src={require('../assets/img/dog.png').default} className="img-responsive img-bdr-50" alt=""/>
							</div>
							<div className="text-center p-5">
								<h5 className="home-h1">We Offer Worry FREE Reservations</h5>
								<p>Use our custom tools to find the best unit size for you</p>
								<button className="btn direction-btn"> Find your unit size now</button>
							</div>
						</div>
					</div>
					
				</div>
			</section>
			<section className="gray">
				<div className="container">
				<Slider {...settings}>
          <div>
		  <div className="single-items">
									<div className="listing-img-wrapper">
										<div className="list-img-slide">
											<div><img src={require('../assets/img/img-p-1.jpg').default} width="50%" className="img-fluid img-bdr" alt="" /></div>
										</div>
										<blockquote className="blockquote">
											<p className="mb-0">Longest gate access hours in the area, on-site property manager, 24 hour surveillance, and cleanest storage facility you’ve ever seen!</p>
										</blockquote>
										<p className="test-name">Rachel Reed</p>
										<p className="test-desc">Scotts Valley, California</p>
									</div>
			</div>
          </div>
          <div>
		  <div className="single-items">
									<div className="listing-img-wrapper">
										<div className="list-img-slide">
											<div><img src={require('../assets/img/img-p-1.jpg').default} width="50%" className="img-fluid img-bdr" alt="" /></div>
										</div>
										<blockquote className="blockquote">
											<p className="mb-0">Longest gate access hours in the area, on-site property manager, 24 hour surveillance, and cleanest storage facility you’ve ever seen!</p>
										</blockquote>
										<p className="test-name">Rachel Reed</p>
										<p className="test-desc">Scotts Valley, California</p>
									</div>
			</div>
          </div>
          <div>
		  <div className="single-items">
									<div className="listing-img-wrapper">
										<div className="list-img-slide">
											<div><img src={require('../assets/img/img-p-1.jpg').default} width="50%" className="img-fluid img-bdr" alt="" /></div>
										</div>
										<blockquote className="blockquote">
											<p className="mb-0">Longest gate access hours in the area, on-site property manager, 24 hour surveillance, and cleanest storage facility you’ve ever seen!</p>
										</blockquote>
										<p className="test-name">Rachel Reed</p>
										<p className="test-desc">Scotts Valley, California</p>
									</div>
			</div>
          </div>
          <div>
		  <div className="single-items">
									<div className="listing-img-wrapper">
										<div className="list-img-slide">
											<div><img src={require('../assets/img/img-p-1.jpg').default} width="50%" className="img-fluid img-bdr" alt="" /></div>
										</div>
										<blockquote className="blockquote">
											<p className="mb-0">Longest gate access hours in the area, on-site property manager, 24 hour surveillance, and cleanest storage facility you’ve ever seen!</p>
										</blockquote>
										<p className="test-name">Rachel Reed</p>
										<p className="test-desc">Scotts Valley, California</p>
									</div>
			</div>
          </div>
          <div>
		  <div className="single-items">
									<div className="listing-img-wrapper">
										<div className="list-img-slide">
											<div><img src={require('../assets/img/img-p-1.jpg').default} width="50%" className="img-fluid img-bdr" alt="" /></div>
										</div>
										<blockquote className="blockquote">
											<p className="mb-0">Longest gate access hours in the area, on-site property manager, 24 hour surveillance, and cleanest storage facility you’ve ever seen!</p>
										</blockquote>
										<p className="test-name">Rachel Reed</p>
										<p className="test-desc">Scotts Valley, California</p>
									</div>
			</div>
          </div>
          <div>
		  <div className="single-items">
									<div className="listing-img-wrapper">
										<div className="list-img-slide">
											<div><img src={require('../assets/img/img-p-1.jpg').default} width="50%" className="img-fluid img-bdr" alt="" /></div>
										</div>
										<blockquote className="blockquote">
											<p className="mb-0">Longest gate access hours in the area, on-site property manager, 24 hour surveillance, and cleanest storage facility you’ve ever seen!</p>
										</blockquote>
										<p className="test-name">Rachel Reed</p>
										<p className="test-desc">Scotts Valley, California</p>
									</div>
			</div>
          </div>
        </Slider>
					
				</div>
			</section>


		<section>
			<div className="container">
				
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="sec-heading center pb-3">
							<h2>Newly Opened Storage Units Near You</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="row">
							<div className="col-lg-4 col-md-4 p-0">
								<ul className="location-list">
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Tucson, Arozona
									</a></li>
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Naples - Airport Pulling Road North, Florida
									</a></li>
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Buford - Gravel Springs Rd, Georgia
									</a></li>
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Roswell - Old Alabama Rd, Georgia
									</a></li>
								</ul>
								
							</div>
							<div className="col-lg-4 col-md-4 p-0">
								<ul className="location-list">
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Chicago, Illinois
									</a></li>
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Mount Prospect Mt. Prospect - Central Rd., Illinois
									</a></li>
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Fishers - Brooks School Rd, Indiana
									</a></li>
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Boston, Massachusetts
									</a></li>
								</ul>
								
							</div>
							<div className="col-lg-4 col-md-4 p-0">
								<ul className="location-list">
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Brooklyn, New York
									</a></li>
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										New York - Convent Ave, New York
									</a></li>
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Austin, Texas
									</a></li>
									<li><i className="ti-location-pin"></i><a href="!#" className="location-text">
										Denton - Frame Street, Texas
									</a></li>
								</ul>
								
							</div>
							<div className="col-md-12 col-lg-12 text-center">
								<button className="btn direction-btn"> Show more</button>
							</div>
						</div>
					</div>
				</div>



			</div>
		</section>


		<section className="call-to-act-wrap">
	<div className="container">
		<div className="row">
			<div className="col-lg-12 cold-md-12">

				<div className="call-to-act">
					<div className="call-to-act-head text-center">
						<h2>Find a self Storage location near you now</h2>
						<button className="btn find-btn">Find Storage  <i className="ti-arrow-right"></i></button>
					</div>
				</div>
			</div>
		</div>
		<div className="row mt-5">
			<div className="col-6 col-md-2 col-lg-2 p-4">
				<div className="footer-icons">
					<img src={require('../assets/img/map.svg').default} className="img-fluid"/>
				</div>
				<p className="ftr-icon-txt">
					Over 1,900 Convenient self storage locations
				</p>
			</div>
			<div className="col-6 col-md-2 col-lg-2 p-4">
				<div className="footer-icons">
					<img src={require('../assets/img/boss.svg').default} className="img-fluid"/>
				</div>
				<p className="ftr-icon-txt">
					Professional Managers
				</p>
			</div>
			<div className="col-6 col-md-2 col-lg-2 p-4">
				<div className="footer-icons">
					<img src={require('../assets/img/shield.png').default} className="img-fluid"/>
				</div>
				<p className="ftr-icon-txt">
					stat-of-the-art <br/> Security
				</p>
			</div>
			<div className="col-6 col-md-2 col-lg-2 p-4">
				<div className="footer-icons">
					<img src={require('../assets/img/clean.png').default} className="img-fluid"/>
				</div>
				<p className="ftr-icon-txt">
					Clean <br/> and well-lit
				</p>
			</div>
			<div className="col-6 col-md-2 col-lg-2 p-4">
				<div className="footer-icons">
					<img src={require('../assets/img/size.png').default} className="img-fluid" />
				</div>
				<p className="ftr-icon-txt">
					variety <br/> of Sizes
				</p>
			</div>
			<div className="col-6 col-md-2 col-lg-2 p-4">
				<div className="footer-icons">
					<img src={require('../assets/img/temperature.png').default} className="img-fluid"/>
				</div>
				<p className="ftr-icon-txt">
					Climate-controlled <br/> Units
				</p>
			</div>

		</div>
		
	</div>
</section>
<section className="footer-black">
	<div className="container">
		<div className="col-md-12 col-lg-12">
				<div className="row">
						<div className="col-md-7 col-lg-7 p-0">
<p>We work hard to implement tools to help you maintain your privacy. Click here for more information.</p>
						</div>
						<div className="col-md-2 col-lg-2p-0 ">
							<button className="btn btn-block footer-btn">Privacy Policy</button>
						</div>
						<div className="col-md-3 col-lg-3 p-0 ">
							<button className="btn btn-block footer-btn">Don't Sell My Personal information</button>
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
						<h4 className="widget-title">Texas (37)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/austin'}>Austin, TX (3)</a></li>
							<li><a href={'/search-result/baytown'}>Baytown, TX (3)</a></li>
							<li><a href={'/search-result/canyon'}>Canyon Lake, TX (3)</a></li>
							<li><a href={'/search-result/Cedar park'}>Cedar park, TX (3)</a></li>
							<li><a href={'/search-result/Dallas'}>Dallas, TX (3)</a></li>
							<li><a href={'/search-result/Deer park'}>Deer park, TX (3)</a></li>
							<li><a href={'/search-result/Fort Worth'}>Fort Worth, TX (3)</a></li>
							<li><a href={'/search-result/Houston'}>Houston, TX (3)</a></li>
							<li><a href={'/search-result/La Porte'}>La Porte, TX (3)</a></li>
							<li><a href={'/search-result/Leander'}>Leander, TX (3)</a></li>
							<li><a href={'/search-result/Mesquite'}>Mesquite, TX (3)</a></li>
							<li><a href={'/search-result/Pasadena'}>Pasadena, TX (3)</a></li>
							<li><a href={'/search-result/San Benito'}>San Benito, TX (3)</a></li>
							<li><a href={'/search-result/Texas'}>Texas City, TX (3)</a></li>
							<li><a href={'/search-result/omball'}>omball, TX (3)</a></li>

						</ul>
					</div>
				</div>

				<div className="col-lg-3 col-md-3">
					<div className="footer-widget">
						<h4 className="widget-title">Tennessee (4)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Memphis'}>Memphis, TN (4)</a></li>

						</ul>
						<h4 className="widget-title">Ohio (16)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Boardman'}>Boardman, OH (1)</a></li>
							<li><a href={'/search-result/Centerville'}>Centerville, OH (1)</a></li>
							<li><a href={'/search-result/Columbus'}>Columbus, OH (1)</a></li>
							<li><a href={'/search-result/Dayton'}>Dayton, OH (1)</a></li>
							<li><a href={'/search-result/Lewis Center'}>Lewis Center, OH (1)</a></li>
							<li><a href={'/search-result/Mansfield'}>Mansfield, OH (1)</a></li>
							<li><a href={'/search-result/Mason'}>Mason, OH (1)</a></li>
							<li><a href={'/search-result/Miamisburg'}>Miamisburg, OH (1)</a></li>
							<li><a href={'/search-result/Reynoldsburg'}>Reynoldsburg, OH (1)</a></li>
							<li><a href={'/search-result/Trotwood'}>Trotwood, OH (1)</a></li>
							<li><a href={'/search-result/Worthington'}>Worthington, OH (1)</a></li>
							<li><a href={'/search-result/Youngstown'}>Youngstown, OH (1)</a></li>


						</ul>
					</div>
				</div>

				<div className="col-lg-3 col-md-3">
					<div className="footer-widget">
						<h4 className="widget-title">New York (2)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Hyde Park'}>Hyde Park, NY (1)</a></li>
							<li><a href={'/search-result/Newburg'}>Newburg, NY (1)</a></li>
						</ul>
						<h4 className="widget-title">Nevada (1)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Las Vegas'}>Las Vegas, NV (1)</a></li>
						</ul>
						<h4 className="widget-title">Mississippi (3)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Brandon'}>Brandon, MS (1)</a></li>
							<li><a href={'/search-result/Flowood'}>Flowood, MS (1)</a></li>
							<li><a href={'/search-result/Hattiesburg'}>Hattiesburg, MS (1)</a></li>
						</ul>
						<h4 className="widget-title">Missouri (1)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Kansas'}>Kansas City, MO (1)</a></li>
						</ul>
					</div>
				</div>

				<div className="col-lg-3 col-md-3">
					<div className="footer-widget">
						<h4 className="widget-title">Indiana (1)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Indianapolis'}>Indianapolis, IN (1)</a></li>
						</ul>
						<h4 className="widget-title">Illinois (2)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Champaign'}>Champaign, IL (1)</a></li>
							<li><a href={'/search-result/Urbana'}>Urbana, IL (1)</a></li>
						</ul>
						<h4 className="widget-title">Colorado (2)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Aurora'}>Aurora, CO (1)</a></li>
							<li><a href={'/search-result/Commerce City'}>Commerce City, CO (1)</a></li>
						</ul>
						<h4 className="widget-title">California (1)</h4>
						<ul className="footer-menu">
							<li><a href={'/search-result/Santa'}>Santa Clarita, CA (1)</a></li>
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
								<li><a href={'/search-result/newyork'}>Car Storage</a></li>
								<li><a href={'/search-result/newyork'}>Boat Storage</a></li>
								<li><a href={'/search-result/newyork'}>RV Storage</a></li>
								<li><a href={'/search-result/newyork'}>Business Storage</a></li>
								<li><a href={'/search-result/newyork'}>Warehouse Storage and Office space</a></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="footer-widget">
							<h4 className="widget-title">STORAGE TOOLS</h4>
							<ul className="footer-menu">
								<li><a href={'/search-result/newyork'}>Size Guide</a></li>
								<li><a href={'/search-result/newyork'}>Space Calculator</a></li>
								<li><a href={'/search-result/newyork'}>Self Stoarge Tips</a></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-4">
						<div className="footer-widget">
							<h4 className="widget-title">GREAT VALUE STORAGE</h4>
							<ul className="footer-menu">
								<li><a href={'/search-result/newyork'}>Company Info</a></li>
								<li><a href={'/search-result/newyork'}>About Us</a></li>
								<li><a href={'/search-result/newyork'}>Contact Us</a></li>
								<li><a href={'/search-result/newyork'}>Careers</a></li>
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

  export  default Home