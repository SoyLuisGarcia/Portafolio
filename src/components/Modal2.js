import React, {Component} from 'react';

class Modal2 extends Component {
    
    render() {
        return (


 <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
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
             
             <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Java</h2>
            
             <div class="divider-custom">
                 <div class="divider-custom-line"></div>
                 <div class="divider-custom-icon">
                 <i class="fas fa-star"></i>
                 </div>
                 <div class="divider-custom-line"></div>
             </div>
             
             <img class="img-fluid rounded mb-5" src="img/portfolio/java.png" alt=""/>
             
             <p class="mb-5">Java uno de los lenguajes que</p>
             <button class="btn btn-primary" href="#" data-dismiss="modal">
                 <i class="fas fa-times fa-fw"></i>
                 Close Window
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
}
export default Modal2;