import React, {Component} from 'react';

class SectioAbout extends Component {
    
    render() {
        return (
            <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
        
              
              <h2 class="page-section-heading text-center text-uppercase text-white">Quien soy</h2>
        
             
              <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                  <i class="fas fa-star"></i>
                </div>
                <div class="divider-custom-line"></div>
              </div>
        
              
              <div class="row">
                <div class="col-lg-4 ml-auto">
                  <p class="lead">Hola, mi nombre es Luis angel Garcia...
                  Actualmente curso 4to cuatrimestre en la Universidad Politecnica de Chiapas, en la carrera de Ingenieria en Desarrollo de Software (IDS), No me considero aun experto en programación pero aspiro hacerlo. 
                  </p>
                </div>
                <div class="col-lg-4 mr-auto">
                  <p class="lead">mi experiencia laboral en el ambito de la programación 
                    Es muy poca ya que por un tiempo estuve trabajando de Freelance con un grupo de amigos de la misma universidad, y constante mente sacamos a la venta diferentes tipos de proyectos.</p>
                </div>
              </div>
        
              
              
            </div>
          </section>

        );
    }
}
export default SectioAbout;