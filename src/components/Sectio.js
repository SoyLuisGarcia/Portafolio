import React, {Component} from 'react';

class Sectio extends Component {
    
    render() {
        return (
            <React.Fragment>
                 <section className="page-section portfolio" id="portfolio">
        <div class="container">

        
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

    
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
        </div>

        
        <div class="row">

           
            <div class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/portfolio/html5.png" alt=""/>
            </div>
            </div>

            
            <div class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/portfolio/java.png" alt=""/>
            </div>
            </div>

        
            <div class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/portfolio/jsg.png" alt=""/>
            </div>
            </div>

        
            <div class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/portfolio/c++.png" alt=""/>
            </div>
            </div>

            
            <div class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/portfolio/nodejs.png" alt=""/>
            </div>
            </div>

            
            <div class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/portfolio/Bootstrap.png" alt=""/>
            </div>
            </div>

        </div>
        

        </div>
    </section>
            </React.Fragment>
        );
    }
}
export default Sectio;