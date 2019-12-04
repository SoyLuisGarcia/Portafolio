import React, {Component} from 'react';

class Modal1 extends Component {
    
    render() {
        return (

            <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                    </span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                        
                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">HTML5</h2>
                        
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon">
                            <i class="fas fa-star"></i>
                            </div>
                            <div class="divider-custom-line"></div>
                        </div>
                        
                        <img class="img-fluid rounded mb-5" src="../img/portfolio/html5.png" alt=""/>
                        
                        <p class="mb-5">Mi experiencia en en Html alrededor de los 16 años gracias a un proyecto Preparatoria, en lo general domino un 90% en este entorno.
                            Y como estudiante universitario, estoy reforzando mis conocimientos ya que constante mente se actualiza en sus diferentes componetes.
                        </p>
                        <button class="btn btn-primary" href="#" data-dismiss="modal">
                            <i class="fas fa-times fa-fw"></i>
                            Cerrar 
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}export default Modal1;